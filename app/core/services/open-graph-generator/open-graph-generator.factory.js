(function () {
  'use strict'

  angular.module('app.core.services')
  .factory('openGraphGeneratorService', ['$http', function($http) {
    return {
      getOpenGraphGenerators: function() {
        return $http.get('core/services/open-graph-generator/open-graph-generator.json').then(function(response) {
          return response.data;
        });
      }
    }
  }]);
})();
