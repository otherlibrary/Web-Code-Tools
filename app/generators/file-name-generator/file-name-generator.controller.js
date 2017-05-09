(function () {
  'use strict';

  angular.module('app.generators.fileName')
  .controller('FileNameGeneratorHomeController', ['$scope', 'fileNameGeneratorService',
    function($scope, fileNameGeneratorService) {
      fileNameGeneratorService.getFileNameGenerators().then(function(data) {
        $scope.generatorData = data;
      });
  }]);
})();
