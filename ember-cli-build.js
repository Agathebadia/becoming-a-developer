'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      exclude: ['purple-flower-round.jpg', 'dieter-pankratz.png', 'eyeglasses-round.jpg', 'men-camera-round.jpg', 'petaled-flowers-round.jpg', 'purple-abstract-round.jpg', 'purple-flower-round.jpg', 'splatter-round.jpg', 'seanb.jpg', 'agatheb.png', 'nikita.jpg', 'favicon.ico'],
    }
  });

  app.import('vendor/netlify.toml', {
    destDir: '/',
  });
  return app.toTree();
};
