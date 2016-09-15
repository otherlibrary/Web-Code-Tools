(function () {
  'use strict';

  angular.module('app.generators.openGraph')
  .controller('OpenGraphBusinessController', ['generalService', function(generalService) {
    this.data = {
      title: '',
      url: '',
      numImages: '1',
      streetAddress: '',
      locality: '',
      region: '',
      postalCode: '',
      country: '',

      images: [new Image()]
    };

    var prevNumImages = this.data.numImages;

    function Image(url) {
      this.url = (typeof b !== 'undefined') ?  url : '';
    }

    this.elementHtml = function() {
      var html = '';

      html += '<meta property="og:type" content="business.business">';
      html += '\n<meta property="og:title" content="' + this.data.title + '">';
      
      html += '\n<meta property="og:url" content="' + this.data.url + '">';

      for (var i = 0; i < this.data.images.length; ++i) {
        html += '\n<meta property="og:image" content="' + this.data.images[i].url + '">';
      }

      html += '\n<meta property="business:contact_data:street_address" content="' + this.data.streetAddress + '">';
      html += '\n<meta property="business:contact_data:locality" content="' + this.data.locality + '">';
      html += '\n<meta property="business:contact_data:region" content="' + this.data.region + '">';
      html += '\n<meta property="business:contact_data:postal_code" content="' + this.data.postalCode + '">';
      html += '\n<meta property="business:contact_data:country_name" content="' + this.data.country + '">';

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
