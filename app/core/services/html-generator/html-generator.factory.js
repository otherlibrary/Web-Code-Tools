(function () {
  'use strict'

  angular.module('app.core.services')
  .factory('htmlGeneratorService', ['$http', function($http) {
    return {
      getHtmlGenerators: function() {
        return $http.get('core/services/html-generator/html-generator.json').then(function(response) {
          return response.data;
        });
      }
    }
  }]);
})();
