(function () {
  'use strict';

  angular.module('app.core.components').
  component('sideMenu', {
    templateUrl: 'core/components/side-menu/side-menu.template.html',
    controller: ['$location',
      function($location) {
        this.isActive = function(route) {
          return route === '/' + $location.path().split('/')[1];
        };
      }
    ]
  });
})();
