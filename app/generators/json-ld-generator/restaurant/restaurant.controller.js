(function () {
  'use strict';

  angular.module('app.generators.jsonLd')
  .controller('JsonLdRestaurantController', [function() {
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
      telephone: ''
    };

    this.jsonLd = function() {
      var html = '<script type="application/ld+json">';
      
      html += '\n{\n  "@context": "http://schema.org/",';

      html += '\n  "@type": "Restaurant",';
      html += '\n  "name": "' + this.data.restaurantName + '",';
      html += '\n  "acceptsReservations": "' + this.data.reservations + '",';
      html += '\n  "menu": "' + this.data.menuUrl + '",';
      html += '\n  "servesCuisine": "' + this.data.cuisine + '",';
      html += '\n  "priceRange": "' + this.data.priceRange + '",';
      
      html += '\n  "address": {';
      html += '\n    "@type": "PostalAddress",';
      html += '\n    "streetAddress": "' + this.data.street + '",';
      html += '\n    "addressLocality": "' + this.data.city + '",';
      html += '\n    "addressRegion": "' + this.data.region + '",';
      html += '\n    "postalCode": "' + this.data.postalCode + '"';
      html += '\n  },'
      
      html += '\n  "telephone": "' + this.data.telephone + '"';

      html += '\n}';

      html += '\n</script>';

      return html;
    }
  }]);
})();
