(function () {
  'use strict';

  angular.module('app.generators.openGraph')
  .controller('OpenGraphProductGroupController', ['generalService', function(generalService) {
    this.data = {
      title: '',
      url: '',
      numImages: '1',

      images: [new Image()]
    };

    var prevNumImages = this.data.numImages;

    function Image(url) {
      this.url = (typeof b !== 'undefined') ?  url : '';
    }

    this.elementHtml = function() {
      var html = '';

      html += '<meta property="og:type" content="product.group">';
      html += '\n<meta property="og:title" content="' + this.data.title + '">';
      
      html += '\n<meta property="og:url" content="' + this.data.url + '">';

      for(var i = 0; i < this.data.images.length; ++i) {
        html += '\n'
          + '<meta property="og:image" content="' + this.data.images[i].url + '">';
      }

      return html;
    }

    this.updateNumImages = function() {
      var numImages = parseInt(this.data.numImages);

      this.data.images = generalService.updateKeyValueArray(
        numImages, 
        prevNumImages, 
        this.data.images,
        Image
      ).slice();

      prevNumImages = numImages;
    }
  }]);
})();
