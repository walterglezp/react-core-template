# React Core Template

A boilerplate for modern React applications built with TypeScript, Webpack 5, and essential tools for development and production.

---

## 🚀 Features

- ⚛️ React 19 + React Router v7
- 🧑‍💻 TypeScript for type safety
- 🔥 Hot Module Replacement (HMR) with Webpack Dev Server
- 🛠️ Webpack 5 for optimized builds
- 💅 SCSS support
- 🧾 Aliased imports
- 🧪 Source maps for debugging
- 📦 Code splitting and cache busting
- 🔍 Bundle analysis support
- 📄 Pre-configured ESLint + Prettier
- 📂 Organized folder structure with `@components`, `@pages`, and `@app` aliases

---

## 📦 Dependencies

### Runtime

- **react**: UI library for building user interfaces
- **react-dom**: React DOM bindings
- **react-router-dom**: Declarative routing for React apps
- **url**: Node polyfill for URL handling in browsers

### Development

- **typescript**: Type-safe JavaScript
- **webpack**: Module bundler
- **webpack-dev-server**: Development server with live reloading
- **webpack-cli**: Command-line interface for Webpack
- **ts-loader**: TypeScript loader for Webpack
- **html-webpack-plugin**: Generates HTML and injects bundles
- **html-webpack-tags-plugin**: Injects custom scripts/tags like `config.js`
- **copy-webpack-plugin**: Copies static assets to `dist`
- **compression-webpack-plugin**: Adds gzip compression to assets
- **webpack-bundle-analyzer**: Visualize bundle size and composition
- **sass**, **sass-loader**, **css-loader**, **style-loader**: SCSS support
- **source-map-loader**: Processes source maps for better debugging
- **eslint**, **eslint-config-prettier**, **eslint-plugin-prettier**, **prettier**: Linting and code formatting

---

## 📁 Project Structure

react-core-template/ ├── dist/ # Compiled production build ├── src/ │ ├── assets/ # Static assets │ ├── components/ # Reusable components │ ├── pages/ # Route-based views │ ├── index.tsx # App entry point │ └── index.html # HTML template ├── .docker/ # Custom Docker entrypoint │ └── entrypoint.sh ├── .env.production # Environment variables for production ├── .env.staging # Environment variables for staging ├── config.js # Generated at build time ├── scripts/ │ └── generate-config.js # Script to generate config.js from .env ├── webpack.config.js # Webpack configuration ├── tsconfig.json # TypeScript configuration ├── Dockerfile # Multi-stage Docker build ├── docker-compose.yml # Docker Compose config ├── .eslintrc # ESLint rules ├── .prettierrc # Prettier formatting rules └── package.json # Project metadata and scripts

---

## 🧑‍💻 Getting Started (Local Development)

1. **Set up your `.env.development`** file:

```env
REACT_API_GATEWAY_URL=http://localhost:5079
REACT_APP_GOOGLE_MAPS_API_KEY=your-dev-key
REACT_AUTH_CLIENT_ID=your-dev-client-id
REACT_AUTH_DOMAIN=your-dev-auth-domain
```

2. Install dependencies:
   npm install

3. Run the app (auto-generates config.js):
   npm start

## Your app will be available at http://localhost:3000

## 📦 Docker Support

This project includes full Docker support for containerized builds and static hosting with NGINX.

### 🐳 Build & Run with Docker Compose

# Set your NPM token if using private packages

export NODE_AUTH_TOKEN=your-npm-token

# Build for a specific environment

docker-compose build --build-arg APP_ENV=staging

# Start the container

docker-compose up

### 🐳 Environment Options

# Change the APP_ENV build arg in docker-compose.yml to:

- production
- staging

## The appropriate .env.[env] file will be used to generate config.js.

## 🛠️ Scripts

| Command                       | Description                                                   |
| ----------------------------- | ------------------------------------------------------------- |
| `npm start`                   | Run dev server at `localhost:3000` (auto-generates config.js) |
| `npm run build`               | Create production build in `/dist`                            |
| `npm run lint`                | Run ESLint on all files                                       |
| `npm run format`              | Format files using Prettier                                   |
| `npm run generate:config`     | Generate config.js (defaults to production)                   |
| `npm run generate:config dev` | Generate config.js for development                            |

---

## 🌐 Routing Support

🔹 Features:

- Configured with <BrowserRouter> and nested <Routes>
- Centralized route paths via the ROUTES enum in @app/router/routes
- Includes a basic NotFoundPage for unknown routes
- Scalable structure for adding authenticated or lazy-loaded routes in the future

src/
├── app/
│ └── router/
│ ├── app-router.tsx # Defines all app routes
│ └── routes.ts # Centralized route enums
├── pages/
│ └── not-found/ # 404 Not Found Page

Example:

```

<Route path={ROUTES.home} element={<HomePage />} />
<Route path="\*" element={<NotFoundPage />} />

```

---

## ⚡ Lazy Loading with Error Boundaries

This template supports lazy-loaded routes to improve performance by splitting the app into smaller chunks. It also includes error boundaries to gracefully handle loading or runtime errors in these dynamic imports.

🔹 Features:

- Pages are loaded using React.lazy + Suspense
- Errors in route components are caught by a global <ErrorBoundary>
- Fallback UI can be customized per use case
- Automatically splits code using Webpack for optimized bundles

---

## 🧪 Optimization Notes

- ✅ Cache-busted filenames using [contenthash]

- ✅ JS splitting via Webpack splitChunks

- ✅ Production bundles gzip-compressed

- ✅ Runtime environment config via config.js

- ✅ Optional bundle analysis via webpack-bundle-analyzer

---

## 🌐 Live URL & Issues

- 🏠 Homepage: [https://github.com/walterglezp/react-core-template](https://github.com/walterglezp/react-core-template)
- 🐛 Issues: [https://github.com/walterglezp/react-core-template/issues](https://github.com/walterglezp/react-core-template/issues)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Created with ❤️ by [Walter J. Gonzalez](https://github.com/walterglezp)
