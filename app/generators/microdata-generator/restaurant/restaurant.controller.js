(function () {
  'use strict';

  angular.module('app.generators.microdata')
  .controller('MicrodataRestaurantController', [function() {
    this.data = {
      restaurantName: '',
      reservations: 'Yes',
      menuUrl: '',
      cuisine: '',
      priceRange: '$$',
      street: '',
      city: '',
      region: '',
      postalCode: '',
      phoneNumber: ''
    };

    this.elementHtml = function() {
      var html = '<div itemscope itemtype="http://schema.org/Restaurant">';

      html += '\n    <h2 itemprop="name">' + this.data.restaurantName + '</h2><br>';
      html += '\n    Accepting reservations: <span itemprop="acceptsReservations">' + this.data.reservations + '</span><br>';
      html += '\n    <a itemprop="menu" href="' + this.data.menuUrl + '">Menu</a><br>';
      html += '\n    Cuisine: <span itemprop="servesCuisine">' + this.data.cuisine + '</span><br>';
      html += '\n    Price range: <span itemprop="priceRange">' + this.data.priceRange + '</span><br>';

      html += '\n    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">';
      html += '\n        <span itemprop="streetAddress">' + this.data.street + '</span><br>';
      html += '\n        <span itemprop="addressLocality">' + this.data.city + '</span>, ';
      html += '\n        <span itemprop="addressRegion">' + this.data.region + '</span> ';
      html += '\n        <span itemprop="postalCode">' + this.data.postalCode + '</span>';
      html += '\n    </div>';

      html += '\n    Phone: <span itemprop="telephone">' + this.data.phoneNumber + '</span>';

      html += '\n</div>';

      return html;
    }
  }]);
})();
