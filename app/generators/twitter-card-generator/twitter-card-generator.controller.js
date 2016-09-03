(function () {
  'use strict';

  angular.module('app.generators.twitterCard')
  .controller('TwitterCardController', function() {
    this.data = {
      type: 'app',
      siteUsername: '@',
      title: '',
      appName: '',
      iPhoneAppId: '',
      iPadAppId: '',
      googleAppId: '',
      appCountry: '',
      imageUrl: '',
      playerUrl: '',
      playerHeight: '',
      playerWidth: '',
      description: '',
      label1: '',
      data1: '',
      label2: '',
      data2: ''
    }

    this.elementHtml = function() {
      var html = '';

      html += '<meta name="twitter:card" content="' + this.data.type + '">';
      html += '\n<meta name="twitter:site" content="' + this.data.siteUsername + '">';

      if (this.data.type === 'app') {
        if (this.data.description) {
          html += '\n<meta name="twitter:description" content="' + this.data.description + '">';
        }
        html += '\n<meta name="twitter:app:name:iphone" content="' + this.data.appName + '">';
        html += '\n<meta name="twitter:app:id:iphone" content="' + this.data.iPhoneAppId + '">';
        html += '\n<meta name="twitter:app:name:ipad" content="' + this.data.appName + '">';
        html += '\n<meta name="twitter:app:id:ipad" content="' + this.data.iPadAppId + '">';
        html += '\n<meta name="twitter:app:name:googleplay" content="' + this.data.appName + '">';
        html += '\n<meta name="twitter:app:id:googleplay" content="' + this.data.googleAppId + '">';
        if (this.data.appCountry) {
          html += '\n<meta name="twitter:app:country" content="' + this.data.appCountry + '">';
        }
      }
      else if (this.data.type === 'player') {
        html += '\n<meta name="twitter:title" content="' + this.data.title + '">';
        if (this.data.description) {
          html += '\n<meta name="twitter:description" content="' + this.data.description + '">';
        }
        html += '\n<meta name="twitter:image" content="' + this.data.imageUrl + '">';
        html += '\n<meta name="twitter:player" content="' + this.data.playerUrl + '">';
        html += '\n<meta name="twitter:player:height" content="' + this.data.playerHeight + '">';
        html += '\n<meta name="twitter:player:width" content="' + this.data.playerWidth + '">';
      }
      else if (this.data.type === 'product') {
        html += '\n<meta name="twitter:title" content="' + this.data.title + '">';
        html += '\n<meta name="twitter:description" content="' + this.data.description + '">';
        html += '\n<meta name="twitter:image" content="' + this.data.imageUrl + '">';
        html += '\n<meta name="twitter:label1" content="' + this.data.label1 + '">';
        html += '\n<meta name="twitter:data1" content="' + this.data.data1 + '">';
        html += '\n<meta name="twitter:label2" content="' + this.data.label2 + '">';
        html += '\n<meta name="twitter:data2" content="' + this.data.data2 + '">';
      }
      else if (this.data.type === 'summary') {
        html += '\n<meta name="twitter:title" content="' + this.data.title + '">';
        html += '\n<meta name="twitter:description" content="' + this.data.description + '">';
      }
      else if (this.data.type === 'summary_large_image') {
        html += '\n<meta name="twitter:title" content="' + this.data.title + '">';
        html += '\n<meta name="twitter:description" content="' + this.data.description + '">';
        html += '\n<meta name="twitter:image" content="' + this.data.imageUrl + '">';
      }

      return html;
    }
  });
})();
