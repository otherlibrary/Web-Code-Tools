(function () {
  'use strict';

  angular.module('app.core.directives')
  .directive('generator', function() {
    return {
      restrict: 'E',
      templateUrl: 'core/directives/generator/generator.template.html',
      transclude: true,
      name: "controllerName",
      controller: '@',
      controllerAs: 'ctrl',
      scope: {
        generatorForm: '@generatorForm',
        generatorPreview: '@?generatorPreview',
        generatorCode: '@generatorCode'
      },
      link: function(scope, element, attrs) {
        scope.browserSupport = 'browserSupport' in attrs;
      }
    };
  });
})();
