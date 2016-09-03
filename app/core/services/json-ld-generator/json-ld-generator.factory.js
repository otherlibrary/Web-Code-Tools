(function () {
  'use strict'

  angular.module('app.core.services')
  .factory('jsonLdGeneratorService', ['$http', function($http) {
    return {
      getJsonLdGenerators: function() {
        return $http.get('core/services/json-ld-generator/json-ld-generator.json').then(function(response) {
          return response.data;
        });
      }
    }
  }]);
})();
