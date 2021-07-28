# Usage

Configure a typescript-based project with linting and testing.

The project expects a folder `./src` with project source files and a folder `./tests` with tests in project root.

## Configuraqtion

Configure typescript, 

### Configure typescipt 

tsconfig.json
```json
{
  "extends": "./node_modules/@suprcrew/project-configs/configs/tsconfig.base.json"
}
```

#### Usage:

```bash
./node_modules/typescript/bin/tsc
```

### Configure linting

.eslintrc.js
```js
module.exports = {
  extends: './node_modules/@jungehaie/se-config/dist/setup_se_development/eslintrc.js'
}
```
#### dev dependencies

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint
- eslint-config-airbnb-base
- eslint-config-airbnb-typescript
- eslint-plugin-import

#### Usage

```bash
./node_modules/eslint/bin/eslint.js --color './src/**/*.ts'
```

### Configure testing framework

jest.config.js
```js
const config = require('./node_modules/@suprcrew/project-configs/configs/jest.config.js');

module.exports = {
  ...config,
  "rootDir": "./"
}
```

#### Usage:

```bash
./node_modules/jest/bin/jest.js tests
```

## Extend package.json

You may configure following scripts to use them via npm script runner `npm run <name>`. 

```json
{
  "lint": "./node_modules/eslint/bin/eslint.js --color './src/**/*.ts",
  "test:run": "./node_modules/jest/bin/jest.js tests",
  "test:watch": "./node_modules/jest/bin/jest.js tests --watch",
  "test:coverage": "./node_modules/jest/bin/jest.js tests --coverage",
  "test:watch:coverage": "./node_modules/jest/bin/jest.js tests --watch --coverage",
  "test": "npm run lint; npm run test:run",
  "build": "rm -rf ./build && npm run lint && npm run test && ./node_modules/typescript/bin/tsc"
}
```

## Create project from template

Create a new project from our base template with configuration done.

### Setup

```
npm i -g create-project
```

### Install

```
npx create-project your-project-name suprcrew/project-template
```
