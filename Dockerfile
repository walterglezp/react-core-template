# Stage 1: Build
FROM node:23.8.0-alpine@sha256:0a29d8a047149079bf48dab598f287815e39867d547e8f3935cfdece0a4379cc AS build

# ARGs
ARG NODE_REGISTRY
ARG NODE_SCOPE
ARG NODE_AUTH_TOKEN
ARG APP_ENV=production

# Set working directory
WORKDIR /usr/src/app

# Install deps only
COPY package*.json ./
RUN echo "//$(echo \"${NODE_REGISTRY}\" | sed 's|^[^:]*://||'):_authToken=${NODE_AUTH_TOKEN}" > .npmrc && \
    echo "${NODE_SCOPE}:registry=${NODE_REGISTRY}" >> .npmrc && \
    npm ci && rm -f .npmrc

# Copy only necessary source files (faster builds)
COPY . .
COPY .env.* ./
COPY scripts/generate-config.js ./scripts/

# Generate config.js based on APP_ENV
RUN npm install dotenv && node scripts/generate-config.js $APP_ENV && rm -f .env.*

# Build the app
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine-slim@sha256:9ebd266ba0ddab1bf6c0f7580bb53f373bf5ac137ec02430169d20c4c139c70b AS final

ARG BUILD_VERSION
ENV BUILD_VERSION=${BUILD_VERSION}

COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY .docker/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
