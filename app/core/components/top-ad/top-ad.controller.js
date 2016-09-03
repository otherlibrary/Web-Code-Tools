(function () {
  'use strict';

  angular.module('app.core.components')
  .controller('TopAdController', [
    '$rootScope', '$scope', '$location', 'pageInfoService',
    function($rootScope, $scope, $location, pageInfoService) {
      switch(pageInfoService.getPath()) {
        case 'css-generator':
          this.adSlot = '6939865856';
          break;
        case 'html-generator':
          this.adSlot = '2481679852';
          break;
        case 'meta-tags-generator':
          this.adSlot = '5155944659';
          break;
        case 'microdata-generator':
          this.adSlot = '9586144258';
          break;
        case 'json-ld-generator':
          this.adSlot = '9825923453';
          break;
        case 'open-graph-generator':
          this.adSlot = '9597645059';
          break;
        case 'twitter-card-generator':
          this.adSlot = '8894151056';
          break;
        // TODO Default ad for default theme colour.
        default:
          this.adSlot = '6939865856';
          break;
      }
  }]);
})();
