# React Core Template

A boilerplate for modern React applications built with TypeScript, Webpack 5, and essential tools for development and production.

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

react-core-template/ ├── dist/ # Compiled production build ├── src/ │ ├── assets/ # Static assets │ ├── components/ # Reusable components │ ├── pages/ # Route-based views │ ├── index.tsx # App entry point │ └── index.html # HTML template ├── webpack.config.js # Webpack configuration ├── tsconfig.json # TypeScript configuration ├── .eslintrc # ESLint rules ├── .prettierrc # Prettier formatting rules └── package.json # Project metadata and scripts

---

## 🛠️ Scripts

| Command          | Description                        |
| ---------------- | ---------------------------------- |
| `npm start`      | Run dev server at `localhost:3000` |
| `npm run build`  | Create production build in `/dist` |
| `npm run lint`   | Run ESLint on all files            |
| `npm run format` | Format files using Prettier        |

---

## 🧪 Optimization Notes

- **Content hash in filenames** for cache busting
- **SplitChunks** configured for performance
- **Terser** via Webpack default minimizes JS
- **Gzip compression** for smaller bundles
- **BundleAnalyzerPlugin** helps analyze and reduce size

---

## 🌐 Live URL & Issues

- Homepage: [https://github.com/walterglezp/react-core-template](https://github.com/walterglezp/react-core-template)
- Issues: [https://github.com/walterglezp/react-core-template/issues](https://github.com/walterglezp/react-core-template/issues)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Created with ❤️ by [Walter J. Gonzalez](https://github.com/walterglezp)
