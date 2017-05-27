(function () {
  'use strict';

  angular.module('app.generators.jsonLd')
  .controller('JsonLdAggregateOfferController', [function() {
    this.data = {
      brand: '',
      productName: '',
      productImage: '',
      description: '',
      productNumberType: 'upc',
      productNumber: '',
      currency: '',
      lowPrice: '',
      highPrice: '',
      condition: 'new'
    };

    this.jsonLd = function() {
      var html = '<script type="application/ld+json">';
      
      html += '\n{\n  "@context": "http://schema.org/",';

      html += '\n  "@type": "Product",';
      
      html += '\n  "brand": {';
      html += '\n    "@type": "Thing",'
      html += '\n    "name": "' + this.data.brand + '"';
      html += '\n  },';
      
      html += '\n  "name": "' + this.data.productName + '",';
      html += '\n  "image": "' + this.data.productImage + '",';
      html += '\n  "description": "' + this.data.description + '",';
      html += '\n  "productId": "' + this.data.productNumberType + ':' + this.data.productNumber + '",';

      html += '\n  "offers": {';
      html += '\n    "@type": "AggregateOffer",';
      html += '\n    "priceCurrency" : "' + this.data.currency + '",';
      html += '\n    "lowPrice": "' + Number(this.data.lowPrice.replace(/[^0-9\.]+/g,"")).toFixed(2) + '",';
      if (this.data.highPrice) {
        html += '\n    "highPrice": "' + Number(this.data.highPrice.replace(/[^0-9\.]+/g,"")).toFixed(2) + '",';
      }
      html += '\n    "itemCondition": "' + this.data.condition + '"';
      html += '\n  }';

      html += '\n}';

      html += '\n</script>';

      return html;
    }
  }]);
})();
