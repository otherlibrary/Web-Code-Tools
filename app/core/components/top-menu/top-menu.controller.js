(function () {
  'use strict';

  angular.module('app.core.components')
  .controller('TopMenuController', ['$rootScope', '$location', 'pageInfoService',
    function($rootScope, $location, pageInfoService) {
      var ctrl = this;

      // Initially, collapse the navigation for mobile.
      $rootScope.navCollapsed = true;

      // The common extension to all page titles.
      var titleExtension = ' - Web Code Tools';

      // Set the page title.
      ctrl.shareTitle = $rootScope.shareTitle + titleExtension;
      // Set page URL.
      ctrl.shareUrl = $location.absUrl();

      // Do stuff when the state changes.
      $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        // Change the page title when the state changes.
        ctrl.shareTitle = $rootScope.shareTitle + titleExtension;
        // Change the page URL when the state changes.
        ctrl.shareUrl = $location.absUrl();
        // Set the top menu class.
        ctrl.topMenuClass = pageInfoService.getPageThemeColor() + '-700';
      });

      // Toggle the mobile navigation.
      $rootScope.toggleNavigation = function() {
        $rootScope.navCollapsed = !$rootScope.navCollapsed;
      }
  }]);
})();
