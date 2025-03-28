#!/bin/sh

echo "🔧 Starting NGINX..."
echo "📦 Build version: ${BUILD_VERSION:-not set}"

exec nginx -g 'daemon off;'
chmod +x .docker/entrypoint.sh

