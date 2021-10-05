# Ember + Vite

To run this demo, `./start.sh`

NOTE: This demo exists solely because Vite support isn't yet merged into Embroider, so this is how to use Vite with Ember, but mostly how to use a fork of a monorepo with Ember that happens to provide Vite which we much prefer over Webpack.

To make your own Ember + Vite app
1. make a new ember app
  - `ember new my-app`
  - remove ember-welcome-page from `package.json` and `application.hbs`
  - run `yarn` or `npm` or `pnpm` to install the default dependencies
2. update `ember-cli-build.js`
  ```diff
  - return app.toTree();
  + const { Vite } = require('@embroider/vite');

  + return require('@embroider/compat').compatBuild(app, Vite, {
  +   extraPublicTrees: [],
  +   staticAddonTestSupportTrees: true,
  +   staticAddonTrees: true,
  +   staticHelpers: true,
  +   staticComponents: true,
  + });
  ```
  This differs from the normal instructions for an embroider app because in order to use Vite,
  we must already have maximum static analyzeability.
3. add the following to your package.json
  ```js
  "@embroider/compat": "*",
  "@embroider/core": "*",
  "@embroider/vite": "*",
  ```
4. copy the `start.sh` from this repo and place it one directory above your app
5. run `start.sh ./my-app`
