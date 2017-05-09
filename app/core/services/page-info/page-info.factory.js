(function () {
  'use strict';

  angular.module('app.core.services')
  .factory('pageInfoService', ['$location', function($location) {
    var path = $location.path().split('/')[1];

    return {
      setPath: function(newPath) {
        path = newPath;
      },

      getPath: function() {
        return path;
      },

      getPageThemeColor: function() {
        switch(path) {
          case 'css-generator':
            return 'bg-blue';

          case 'html-generator':
            return 'bg-orange';

          case 'microdata-generator':
            return 'bg-red';

          case 'json-ld-generator':
            return 'bg-deep-purple';

          case 'meta-tags-generator':
            return 'bg-purple';

          case 'open-graph-generator':
            return 'bg-indigo';

          case 'twitter-card-generator':
            return 'bg-light-blue';

          case 'file-name-generator':
            return 'bg-teal';

          case 'error':
            return 'bg-red';

          default:
            return 'bg-blue';
        }
      }
    }

  }]);
})();
