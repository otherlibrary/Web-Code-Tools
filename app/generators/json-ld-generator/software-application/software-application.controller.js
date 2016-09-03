(function () {
  'use strict';

  angular.module('app.generators.jsonLd')
  .controller('JsonLdSoftwareApplicationController', [function() {
    this.data = {
      appName: '',
      category: '',
      operatingSystem: '',
      rating: '',
      numRatings: '',
      currency: '',
      price: ''
    };

    this.jsonLd = function() {
      var html = '{\n  "@context": "http://schema.org/",';

      html += '\n  "@type": "SoftwareApplication",';
      html += '\n  "name": "' + this.data.appName + '",';
      html += '\n  "applicationCategory": "' + this.data.category + '",';
      html += '\n  "operatingSystem": "' + this.data.operatingSystem + '",';

      html += '\n  "aggregateRating": {';
      html += '\n    "@type": "AggregateRating",';
      html += '\n    "ratingValue": "' + this.data.rating + '",';
      html += '\n    "ratingCount": "' + this.data.numRatings + '"';
      html += '\n  },';

      html += '\n  "offers": {';
      html += '\n    "@type": "Offer",';
      html += '\n    "priceCurrency": "' + this.data.currency + '",';
      html += '\n    "price": "' + Number(this.data.price.replace(/[^0-9\.]+/g,"")).toFixed(2) + '"';
      html += '\n  }';

      html += '\n}';

      return html;
    }
  }]);
})();
