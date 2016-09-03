(function () {
  'use strict'

  angular.module('app.core.services')
  .factory('microdataGeneratorService', ['$http', function($http) {
    return {
      getMicrodataGenerators: function() {
        return $http.get('core/services/microdata-generator/microdata-generator.json').then(function(response) {
          return response.data;
        });
      }
    }
  }]);
})();
