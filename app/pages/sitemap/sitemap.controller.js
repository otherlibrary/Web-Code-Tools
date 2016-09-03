(function () {
  'use strict';

  angular.module('app.pages.sitemap')
  .controller('SitemapController', [
    'cssGeneratorService',
    'htmlGeneratorService',
    'microdataGeneratorService',
    'jsonLdGeneratorService',

    function(cssGeneratorService, htmlGeneratorService, microdataGeneratorService, jsonLdGeneratorService) {
      var ctrl = this;
      
      cssGeneratorService.getCssGenerators().then(function(data) {
        ctrl.cssGenerators = data;
      });

      htmlGeneratorService.getHtmlGenerators().then(function(data) {
        ctrl.htmlGenerators = data;
      });

      microdataGeneratorService.getMicrodataGenerators().then(function(data) {
        ctrl.microdataGenerators = data;
      });

      jsonLdGeneratorService.getJsonLdGenerators().then(function(data) {
        ctrl.jsonLdGenerators = data;
      });
  }]);
})();
