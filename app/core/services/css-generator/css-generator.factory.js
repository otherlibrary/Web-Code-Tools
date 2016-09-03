(function () {
  'use strict'

  angular.module('app.core.services')
  .factory('cssGeneratorService', ['$http', function($http) {
    return {
      getCssGenerators: function() {
        return $http.get('core/services/css-generator/css-generator.json').then(function(response) {
          return response.data;
        });
      }
    }
  }]);
})();
