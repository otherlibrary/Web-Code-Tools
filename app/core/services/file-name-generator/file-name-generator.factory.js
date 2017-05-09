(function () {
  'use strict'

  angular.module('app.core.services')
  .factory('fileNameGeneratorService', ['$http', function($http) {
    return {
      getFileNameGenerators: function() {
        return $http.get('core/services/file-name-generator/file-name-generator.json').then(function(response) {
          return response.data;
        });
      }
    }
  }]);
})();
