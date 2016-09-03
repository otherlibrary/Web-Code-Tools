(function () {
  'use strict';

  angular.module('app.generators.microdata')
  .controller('MicrodataGeneratorHomeController', ['$scope', 'microdataGeneratorService',
    function($scope, microdataGeneratorService) {
      microdataGeneratorService.getMicrodataGenerators().then(function(data) {
        $scope.generatorData = data;
      });
  }]);
})();
