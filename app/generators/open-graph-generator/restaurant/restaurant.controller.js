(function () {
  'use strict';

  angular.module('app.generators.openGraph')
  .controller('OpenGraphRestaurantController', ['generalService', function(generalService) {
    this.data = {
      title: '',
      url: '',
      website: '',
      description: '',
      streetAddress: '',
      locality: '',
      region: '',
      postalCode: '',
      country: '',
      email: '',
      phoneNumber: '',
      numMenus: '1',
      numImages: '1',

      menus: [new Menu()],
      images: [new Image()]
    };

    var prevNumMenus = this.data.numMenus;
    var prevNumImages = this.data.numImages;

    function Menu(url) {
      this.url = (typeof b !== 'undefined') ?  url : '';
    }

    function Image(url) {
      this.url = (typeof b !== 'undefined') ?  url : '';
    }

    this.elementHtml = function() {
      var html = '';

      html += '<meta property="og:type" content="restaurant.restaurant">';
      html += '\n<meta property="og:title" content="' + this.data.title + '">';
      
      html += '\n<meta property="og:url" content="' + this.data.url + '">';

      if (this.data.description) {
        html += '\n<meta property="og:description" content="' + this.data.description + '">';
      }

      for(var i = 0; i < this.data.images.length; ++i) {
        html += '\n<meta property="og:image" content="' + this.data.images[i].url + '">';
      }

      for(var i = 0; i < this.data.menus.length; ++i) {
        html += '\n<meta property="restaurant:menu" content="' + this.data.menus[i].url + '">';
      }

      html += '\n<meta property="restaurant:contact_info:website" content="' + this.data.website + '">';
      html += '\n<meta property="restaurant:contact_info:street_address" content="' + this.data.streetAddress + '">';
      html += '\n<meta property="restaurant:contact_info:locality" content="' + this.data.locality + '">';
      html += '\n<meta property="restaurant:contact_info:region" content="' + this.data.region + '">';
      html += '\n<meta property="restaurant:contact_info:postal_code" content="' + this.data.postalCode + '">';
      html += '\n<meta property="restaurant:contact_info:country_name" content="' + this.data.country + '">';
      html += '\n<meta property="restaurant:contact_info:email" content="' + this.data.email + '">';
      html += '\n<meta property="restaurant:contact_info:phone_number" content="' + this.data.phoneNumber + '">';

      return html;
    }

    this.updateNumMenus = function() {
      var numMenus = parseInt(this.data.numMenus);

      this.data.menus = generalService.updateKeyValueArray(
        numMenus, 
        prevNumMenus, 
        this.data.menus,
        Menu
      ).slice();

      prevNumMenus = numMenus;
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
