# gatsby-starter-epic

Gatsby starter with good, opinionated defaults. I use it for most projects.

It includes my favourite dependencies, dev tools, configurations, and the like.
## Features
### Tech stack

A complete list of dependencies is in `package.json`. These are the primary ones:

#### Core

- [Gatsby](https://www.gatsbyjs.com)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)

#### Development

- [Jest](https://jestjs.io) (testing framework)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (testing library)
- [ESLint](https://eslint.org) (linting)
- [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript) (primary ESLint config extension)
- [Prettier](https://prettier.io) (code formatter)
- [lint-staged](https://github.com/okonet/lint-staged) (precommit validation)

#### Styles

- [Tailwind CSS](https://tailwindcss.co) (CSS framework)
- [twin.macro](https://github.com/ben-rogerson/twin.macro) (CSS-in-JS for Tailwind)
- [Emotion Styled Components](https://emotion.sh/docs/styled) (styled components for use with `twin.macro`)
- [postcss](https://postcss.org) (CSS customisation)
- [PurgeCSS](https://purgecss.com/) (removes unused CSS)
- [Autoprefixer](https://autoprefixer.github.io) (automatically adds vendor prefixes to CSS)
- [Inter UI font](https://rsms.me/inter/) (sleek, modern Sans font)
#### Misc

- [lodash](https://lodash.com) (general utilities)
- [Sentry](https://sentry.io) (error logging)

### Other features

* Dev workflow works smoothly out of the box
* Absolute imports are configured
* Extra Tailwind CSS utilities (text shadows)
* Great TypeScript config defaults
* Jest config and utilities for writing clean tests
* Simple examples for writing clean, maintainable tests
* Optimised ESLint config (including adjustments to the extensions)
* `global.css` for any global styles that can't be included in `tailwind.config.js`
* Organised directory tree
* Example of a page with its own folder
* [EditorConfig](https://editorconfig.org/) for consistent styles across multiple editors
* VSCode config that works out of the box with `twin.macro`
* `.env.example` file
* `uuid` utility for `key` props (useful when an ID from a back-end isn't available)

No state management is included—only dependencies for the UI. This enables you to configure the project for any state management library (or none at all).

Examples will be included for Apollo/Redux later (or feel free to open a PR if you get around to it before me). I'm thinking of using an automated setup script instead of creating multiple redundant repos for each one. It will automatically add/overwrite necessary files for whatever config you choose and work flawlessly out of the box.
## 🚀 Installation

Copy environment variable template:

```sh
cp .env.example .env
```

Edit the env vars as necessary for your environment.

Then install dependencies:

```sh
yarn install
```

## Development

Run the dev server:

```sh
yarn run develop -p 3000
```

Now open `http://localhost:3000` to view the site. Any changes will be updated in real-time.

Of course, you can redact `-p 3000` if you always use this by default.

I also recommend installing [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for style autocompletion.

### Utilities

Run tests:

```sh
yarn run test
yarn run test:watch # Run in watch mode
```

Lint the source code:

```sh
yarn run lint
yarn run lint:fix # Fix any possible errors
```

Format the source code:

```sh
yarn run prettier
yarn run prettier:fix # Fix any possible errors
```

Validate the source code with `lint`, `prettier`, & `test`:

```sh
yarn run validate
```

Build the source code:

```sh
yarn run build
```

Run the built source code in the browser:

```sh
yarn run serve
```

Install Husky Git hooks:

```sh
yarn install-hooks
```
## Deployment

Validate and build the source code for deployment:

```sh
yarn run deploy
```
