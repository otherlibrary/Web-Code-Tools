(function () {
  'use strict';

  // Generators module.
  angular.module('app.generators', 
    [
      'app.generators.css',
      'app.generators.html',
      'app.generators.jsonLd',
      'app.generators.metaTags',
      'app.generators.microdata',
      'app.generators.openGraph',
      'app.generators.twitterCard'
    ]);
})();
