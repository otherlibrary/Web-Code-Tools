(function () {
  'use strict';

  var app = angular.module('app');

  app
  .directive('wctLabel', function() {
    return {
      restrict: 'A',
      replace: false,
      link: function link(scope, element, attrs) {
        element.attr('class', 'control-label');
      }
    }
  })
  .directive('wctInputText', function() {
    return {
      restrict: 'A',
      replace: false,
      link: function link(scope, element, attrs) {
        element.attr('type', 'text');
        element.attr('class', 'form-control');
      }
    }
  })
  .directive('wctInputRange', function() {
    return {
      restrict: 'A',
      replace: false,
      link: function link(scope, element, attrs) {
        element.attr('type', 'range');
        element.attr('class', 'form-control');
      }
    }
  })
  .directive('wctInputNumber', function() {
    return {
      restrict: 'A',
      replace: false,
      link: function link(scope, element, attrs) {
        element.attr('type', 'number');
        element.attr('class', 'form-control');
      }
    }
  })
  .directive('wctInputTel', function() {
    return {
      restrict: 'A',
      replace: false,
      link: function link(scope, element, attrs) {
        element.attr('type', 'tel');
        element.attr('class', 'form-control');
      }
    }
  })
  .directive('wctInputEmail', function() {
    return {
      restrict: 'A',
      replace: false,
      link: function link(scope, element, attrs) {
        element.attr('type', 'email');
        element.attr('class', 'form-control');
      }
    }
  })
  .directive('wctTextarea', function() {
    return {
      restrict: 'A',
      replace: false,
      link: function link(scope, element, attrs) {
        element.attr('class', 'form-control');
      }
    }
  })
  .directive('wctSelect', function() {
    return {
      restrict: 'A',
      replace: false,
      link: function link(scope, element, attrs) {
        element.attr('class', 'form-control');
      }
    }
  })

  .directive('animationNgDisabled', function ($animate) {
     return {
        restrict: 'A',
        link: function (scope, element, attrs) {
           $animate.enabled(element, false);
        }
     };
  })
  .directive('jsonld', ['$filter', '$sce', function($filter, $sce) {
    return {
      restrict: 'E',
      template: function() {
        return '<script type="application/ld+json" ng-bind-html="onGetJson()"></script>';
      },
      scope: {
        json: '=json'
      },
      link: function(scope, element, attrs) {
        scope.onGetJson = function() {
          return $sce.trustAsHtml($filter('json')(scope.json));
        }
      },
      replace: true
    };
  }]);
})();
