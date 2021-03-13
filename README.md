# Aldinga Beach Bliss

Gatsby starter with good defaults. I use it for most projects.

It includes my favourite dependencies, dev tools, configurations, and the like.

## Tech stack

A complete list of dependencies is in `package.json`. These are the primary ones:

### Core

- [Gatsby](https://www.gatsbyjs.com)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)

### Development

- [Jest](https://jestjs.io) (testing framework)
- [ESLint](https://eslint.org) (linting)
- [Prettier](https://prettier.io) (code formatter)
- [lint-staged](https://github.com/okonet/lint-staged) (precommit validation)

### Styles

- [Tailwind CSS](https://tailwindcss.co) (CSS framework)
- [postcss](https://postcss.org) (CSS customisation)
- [cssnano](https://cssnano.co) (CSS compression)
- [Autoprefixer](https://autoprefixer.github.io) (automatically adds vendor prefixes to CSS)

### Misc

- [lodash](https://lodash.com) (general utilities)
- [Sentry](https://sentry.io) (error logging)

## 🚀 Installation

Install dependencies:

```sh
yarn install
```

## Development

Run the dev server:

```sh
yarn run develop
```

Now open `http://localhost:3000` to view the site. Any changes will be updated in real-time.

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

## Deployment

Validate and build the source code for deployment:

```sh
yarn run deploy
```
