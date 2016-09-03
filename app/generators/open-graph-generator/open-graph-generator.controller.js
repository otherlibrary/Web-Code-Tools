(function () {
  'use strict';

  angular.module('app.generators.openGraph')
  .controller('OpenGraphController', [function() {
    this.data = {
      title: '',
      siteName: '',
      siteUrl: '',
      description: '',
      type: 'article',
      numImages: '1',

      images: [{url: ''}]
    };

    var prevNumImages = this.data.numImages;

    this.elementHtml = function() {
      var html = '';

      html += '<meta property="og:title" content="' + this.data.title + '">';
      html += '\n<meta property="og:site_name" content="' + this.data.siteName + '">';
      html += '\n<meta property="og:url" content="' + this.data.siteUrl + '">';
      html += '\n<meta property="og:description" content="' + this.data.description + '">';
      html += '\n<meta property="og:type" content="' + this.data.type + '">';

      for(var i = 0; i < this.data.images.length; ++i) {
        html += '\n'
          + '<meta property="og:image" content="' + this.data.images[i].url + '">';
      }

      return html;
    }

    this.updateNumImages = function() {
      var numImages = parseInt(this.data.numImages);

      if (numImages > prevNumImages) {
        for (var i = 0; i < (numImages - prevNumImages); ++i) {
          this.data.images.push({url: ''});
        }
      }
      else if (numImages < prevNumImages) {
        for (var i = 0; i < (prevNumImages - numImages); ++i) {
          this.data.images.pop();
        }
      }

      prevNumImages = numImages;
    }
  }]);
})();
