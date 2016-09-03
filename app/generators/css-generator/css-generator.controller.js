(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssGeneratorHomeController', ['$scope', 'cssGeneratorService',
    function($scope, cssGeneratorService) {
      cssGeneratorService.getCssGenerators().then(function(data) {
        $scope.generatorData = data;
      });
  }]);
})();
