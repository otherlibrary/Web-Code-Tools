(function () {
  'use strict';

  angular.module('app.core.services')
  .factory('browserSupportService', ['$state', '$http', function($state, $http) {
    return {
      getBrowsers: function() {
        var stateParentName = $state.$current.parent.name;
        var stateName = $state.current.name;

        switch(stateParentName) {
          case 'css-generator':
            return $http.get('core/services/browser-support/browser-support-css.json').then(function(response) {
              return response.data[stateName];
            });
          case 'html-generator':
            return $http.get('core/services/browser-support/browser-support-html.json').then(function(response) {
              return response.data[stateName];
            });
        }
      }
    }
  }]);
})();
