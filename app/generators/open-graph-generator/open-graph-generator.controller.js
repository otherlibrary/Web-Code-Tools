(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('OpenGraphGeneratorHomeController', ['$scope', 'openGraphGeneratorService',
    function($scope, openGraphGeneratorService) {
      openGraphGeneratorService.getOpenGraphGenerators().then(function(data) {
        $scope.generatorData = data;
      });
  }]);
})();
