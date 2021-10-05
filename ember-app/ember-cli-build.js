'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const { CLASSIC, WEBPACK } = process.env;

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  if (CLASSIC) {
    return app.toTree();
  }

  if (WEBPACK) {
    const { Webpack } = require('@embroider/webpack');

    return require('@embroider/compat').compatBuild(app, Webpack, {
      extraPublicTrees: [],
      staticAddonTestSupportTrees: true,
      staticAddonTrees: true,
      staticHelpers: true,
      staticComponents: true,
    });
  }

  const { Vite } = require('@embroider/vite');

  return require('@embroider/compat').compatBuild(app, Vite, {
    extraPublicTrees: [],
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticComponents: true,
  });
};
