(function () {
  'use strict';

  angular.module('app.generators.jsonLd')
  .controller('JsonLdGeneratorHomeController', ['$scope', 'jsonLdGeneratorService',
    function($scope, jsonLdGeneratorService) {
      jsonLdGeneratorService.getJsonLdGenerators().then(function(data) {
        $scope.generatorData = data;
      });
  }]);
})();
