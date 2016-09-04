(function () {
  'use strict';

  angular.module('app.core.directives')
  .directive('wctInputText', function() {
    return {
      restrict: 'A',
      replace: false,
      link: function link(scope, element, attrs) {
        element.attr('type', 'text');
        element.attr('class', 'form-control');
      }
    }
  });
})();
