(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlGeneratorHomeController', ['$scope', 'htmlGeneratorService',
    function($scope, htmlGeneratorService) {
      htmlGeneratorService.getHtmlGenerators().then(function(data) {
        $scope.generatorData = data;
      });
  }]);
})();
