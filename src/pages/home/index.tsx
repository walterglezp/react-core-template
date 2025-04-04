import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@app/router/routes'
import { useAppContext } from '@app/state'
import { MutateSettings } from '@app/state/mutate/settings'
import { MutateForm } from '@app/state/mutate/forms'
import { Input } from '@components/form/input'
import { CheckBox } from '@components/form/checkbox'

import './index.scss'

const HomePage: FC = () => {
  const [submitted, setSubmitted] = React.useState(false)
  const { globalState, updateGlobalState } = useAppContext()
  const mutateSettings = new MutateSettings(globalState, updateGlobalState)
  const mutateForm = new MutateForm(globalState, updateGlobalState)
  const { language } = globalState.setting
  const { currentSection, errorMsg } = globalState.forms.signup
  const { password, userName, acceptTerms, confirmPassword } = globalState.forms.signup.fields

  const changeLanguage = (): void => {
    if (language === 'es') {
      mutateSettings.setLanguage('en')
    } else {
      mutateSettings.setLanguage('es')
    }
  }

  const handleFormChange = (field: FormFieldProps): void => {
    mutateForm.setFieldValue(field)
  }

  const openForm = (): void => {
    setSubmitted(false)
    mutateForm.resetForm('signup')
  }

  return (
    <div id="home-page" className="h-100">
      <header>
        <h1>React Core Template</h1>
        <p>A minimal React template with essential configurations for quick project setup</p>
        <a href="https://github.com/walterglezp/react-core-template" target="_blank" className="github-link">
          View on GitHub
        </a>
      </header>

      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#features">✨ Features</a>
          </li>
          <li>
            <a href="#getting-started">🧑‍💻 Getting Started </a>
          </li>
          <li>
            <a href="#project-structure">📁 Project Structure</a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="readme-content">
          <h2 id="about">React Core Template</h2>
          <p>
            A boilerplate for modern React applications built with TypeScript, Webpack 5, and essential tools for
            development and production.
          </p>
          <h2 id="features">✨ Features</h2>
          <ul>
            <li>⚛️ React 19 + React Router v7</li>
            <li>🧑‍💻 TypeScript for type safety</li>
            <li>🔥 Hot Module Replacement (HMR) with Webpack Dev Server</li>
            <li>🛠️ Webpack 5 for optimized builds</li>
            <li>💅 SCSS support</li>
            <li>🧾 Aliased imports</li>
            <li>🧪 Source maps for debugging</li>
            <li>📦 Code splitting and cache busting</li>
            <li>🔍 Bundle analysis support</li>
            <li>📄 Pre-configured ESLint + Prettier</li>
            <li>📂 Organized folder structure with `@components`, `@pages`, and `@app` aliases</li>
          </ul>

          <h2 id="getting-started">🧑‍💻 Getting Started (Local Development)</h2>
          <p>1. Set up your ".env.development" file:</p>
          <code>
            <pre>
              env <br />
              REACT_API_GATEWAY_URL=http://localhost:5079 <br />
              REACT_APP_GOOGLE_MAPS_API_KEY=your-dev-key <br />
              REACT_AUTH_CLIENT_ID=your-dev-client-id <br />
              REACT_AUTH_DOMAIN=your-dev-auth-domain
            </pre>
          </code>
          <p>2. Install dependencies:</p>
          <code>
            <pre>npm install</pre>
          </code>
          <p>3. Run the app (auto-generates config.js):</p>
          <code>
            <pre>npm start</pre>
          </code>

          <h2 id="dependencies">📦 Dependencies</h2>
          <p>Runtime:</p>
          <pre>
            <code>
              <ul>
                <li>
                  <strong>react</strong>: UI library for building user interfaces
                </li>
                <li>
                  <strong>react-dom</strong>: React DOM bindings
                </li>
                <li>
                  <strong>react-router-dom</strong>: Declarative routing for React apps
                </li>
                <li>
                  <strong>url</strong>: Node polyfill for URL handling in browsers
                </li>
              </ul>
            </code>
          </pre>
          <p>Development:</p>
          <pre>
            <code>
              <ul>
                <li>
                  <strong>typescript</strong>: Type-safe JavaScript
                </li>
                <li>
                  <strong>webpack</strong>: Module bundler
                </li>
                <li>
                  <strong>webpack-dev-server</strong>: Development server with live reloading
                </li>
                <li>
                  <strong>webpack-cli</strong>: Command-line interface for Webpack
                </li>
                <li>
                  <strong>ts-loader</strong>: TypeScript loader for Webpack
                </li>
                <li>
                  <strong>html-webpack-plugin</strong>: Generates HTML and injects bundles
                </li>
                <li>
                  <strong>html-webpack-tags-plugin</strong>: Injects custom scripts/tags like `config.js`
                </li>
                <li>
                  <strong>copy-webpack-plugin</strong>: Copies static assets to `dist`
                </li>
                <li>
                  <strong>compression-webpack-plugin</strong>: Adds gzip compression to assets
                </li>
                <li>
                  <strong>webpack-bundle-analyzer</strong>: Visualize bundle size and composition
                </li>
                <li>
                  <strong>sass</strong>, <strong>sass-loader</strong>, <strong>css-loader</strong>,{' '}
                  <strong>style-loader</strong>: SCSS support
                </li>
                <li>
                  <strong>source-map-loader</strong>: Processes source maps for better debugging
                </li>
                <li>
                  <strong>eslint</strong>, <strong>eslint-config-prettier</strong>,{' '}
                  <strong>eslint-plugin-prettier</strong>, <strong>prettier</strong>: Linting and code formatting
                </li>
              </ul>
            </code>
          </pre>

          <h2 id="project-structure">📁 Project Structure</h2>
          <code>
            <pre>
              react-core-template/ <br />
              ├── dist/ # Compiled production build <br />
              ├── src/ │ ├── assets/ # Static assets <br />
              │ ├── components/ # Reusable components <br />
              │ ├── pages/ # Route-based views <br />
              │ ├── index.tsx # App entry point <br />
              │ └── index.html # HTML template <br />
              ├── .docker/ # Custom Docker entrypoint <br />
              │ └── entrypoint.sh <br />
              ├── .env.production # Environment variables for production <br />
              ├── .env.staging # Environment variables for staging <br />
              ├── config.js # Generated at build time <br />
              ├── scripts/ <br />
              │ └── generate-config.js # Script to generate config.js from .env <br />
              ├── webpack.config.js # Webpack configuration <br />
              ├── tsconfig.json # TypeScript configuration <br />
              ├── Dockerfile # Multi-stage Docker build <br />
              ├── docker-compose.yml # Docker Compose config <br />
              ├── .eslintrc # ESLint rules <br />
              ├── .prettierrc # Prettier formatting rules <br />
              └── package.json # Project metadata and scripts <br />
            </pre>
          </code>
          <h2 id="scripts">📜 Scripts</h2>
          <ul>
            <li>
              <code>Command | Description </code>
            </li>
            <li>
              <code>npm start</code>: Run dev server at `localhost:3000` (auto-generates config.js)
            </li>
            <li>
              <code>npm run build</code>: Create production build in `/dist`
            </li>
            <li>
              <code>npm run lint</code>: Run ESLint on all files
            </li>
            <li>
              <code>npm run format</code>: Format files using Prettier
            </li>
            <li>
              <code>npm run generate:config</code>: Generate config.js (defaults to production)
            </li>
            <li>
              <code>npm run generate:config dev</code>: Generate config.js for development
            </li>
          </ul>
        </section>

        <section id="forms-state-management">
          <h2>Forms State Management</h2>
          <p>
            This template provides a solid foundation for implementing form state management in your React applications.
            While it doesn't include a specific forms library out of the box, you can easily add popular solutions like:
          </p>
          <ul>
            <li>
              <strong>React Form Component</strong> – Lightweight form validation with minimal re-renders
            </li>
          </ul>
          <p>
            The template's TypeScript support and absolute imports make it particularly well-suited for building complex
            forms with proper type safety and clean component organization.
          </p>
          <p>How to use form state management:</p>
          <ol>
            <li>
              Define your form fields and structure in <code>src/state/mutate/forms</code> (e.g., <code>login.ts</code>,{' '}
              <code>signup.ts</code>)
            </li>
            <li>
              Access and update form state using <code>MutateForm</code> and the global context
            </li>
            <li>
              Use custom components like <code>{'<Input />'}</code> and <code>{'<CheckBox />'}</code> for field-level
              validation and UI
            </li>
          </ol>

          <h2>Mutate global state</h2>
          <p>
            Current Language: <strong>{language === 'en' ? 'English' : 'Spanish'}</strong>
          </p>
          <button type="button" onClick={changeLanguage}>
            Change Language
          </button>
          <br />
          <h2>Sign up Form</h2>
          <p>
            The following example demonstrates a multi-step signup form with validation and state management using the
            provided utilities.
          </p>
          {!submitted ? (
            <form id="multistep-form">
              {currentSection === 1 && (
                <div>
                  <p>
                    <strong>Enter Information</strong>
                  </p>
                  <Input field={userName} onChange={handleFormChange} isRequired placeholder="user name" />
                  <Input
                    type="password"
                    field={password}
                    onChange={handleFormChange}
                    isRequired
                    placeholder="password"
                  />
                  <Input
                    type="password"
                    field={confirmPassword}
                    onChange={handleFormChange}
                    isRequired
                    placeholder="confirm password"
                  />
                  <button type="button" onClick={() => mutateForm.goToFormSection('signup', currentSection + 1)}>
                    Next Section
                  </button>
                </div>
              )}
              {currentSection === 2 && (
                <div>
                  <p>
                    <strong>Accept Terms and Conditions: </strong>
                  </p>
                  <p>
                    By clicking 'I Agree,' you acknowledge that you have read, understood, and accepted our Terms and
                    Conditions, Privacy Policy, and Cookie Policy. You agree to comply with all applicable laws and
                    regulations regarding your use of this service. If you do not agree to these terms, please
                    discontinue access immediately. Continued use of the platform constitutes ongoing acceptance of any
                    updates or modifications to these policies.
                  </p>
                  <CheckBox field={acceptTerms} onChange={handleFormChange} label={<span>I Agree</span>} /> <br />
                  <button type="button" onClick={() => mutateForm.goToFormSection('signup', currentSection - 1)}>
                    Previous Section
                  </button>
                  &nbsp;
                  <button type="button" onClick={() => setSubmitted(true)}>
                    Submit
                  </button>
                </div>
              )}
            </form>
          ) : (
            <div style={{ color: 'green', border: '1px solid green', padding: '15px', backgroundColor: '#e6ffe6' }}>
              <p>
                <strong>Form submitted successfully!</strong>
              </p>
              <button type="button" onClick={openForm}>
                Open Form
              </button>
            </div>
          )}
        </section>
      </main>

      <footer>
        <p>
          Project maintained by <a href="https://github.com/walterglezp">walterglezp</a>
        </p>
      </footer>
    </div>
  )
}

export default HomePage
