(function () {
  'use strict';

  angular.module('app.core.services')
  .factory('alertService', ['$http', function($http) {
    return {
      getAlertsQueue: function() {
        return $http.get('core/services/alert/alerts.json').then(function(response) {
          return response.data;
        });
      }
    }
  }]);
})();
