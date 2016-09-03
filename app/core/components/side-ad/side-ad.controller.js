(function () {
  'use strict';

  angular.module('app.core.components')
  .controller('SideAdController', [
    '$rootScope', '$scope', '$location', 'pageInfoService',
    function($rootScope, $scope, $location, pageInfoService) {
      switch(pageInfoService.getPath()) {
        case 'css-generator':
          this.adSlot = '3366897052';
          break;
        case 'html-generator':
          this.adSlot = '4843630250';
          break;
        case 'meta-tags-generator':
          this.adSlot = '6320363451';
          break;
        case 'microdata-generator':
          this.adSlot = '7797096657';
          break;
        case 'json-ld-generator':
          this.adSlot = '5395723850';
          break;
        case 'open-graph-generator':
          this.adSlot = '9273829855';
          break;
        case 'twitter-card-generator':
          this.adSlot = '1750563051';
          break;
        // TODO Default ad for default theme colour.
        default:
          this.adSlot = '3366897052';
          break;
      }
  }]);
})();
