(function () {
  'use strict';

  angular.module('app.generators.jsonLd')
  .controller('JsonLdProductOfferController', [function() {
    this.data = {
      brand: '',
      productName: '',
      productImage: '',
      description: '',
      productNumberType: 'upc',
      productNumber: '',
      currency: '',
      price: '',
      condition: 'new'
    };

    this.jsonLd = function() {
      var html = '{\n  "@context": "http://schema.org/",';

      html += '\n  "@type": "Product",';
      
      html += '\n  "brand": {';
      html += '\n    "@type": "Brand",';
      html += '\n    "name": "' + this.data.brand + '"';
      html += '\n  },'
      
      html += '\n  "name": "' + this.data.productName + '",';
      html += '\n  "image": "' + this.data.productImage + '",';
      html += '\n  "description": "' + this.data.description + '",';
      html += '\n  "productID": "' + this.data.productNumberType + ':' + this.data.productNumber + '",';
      
      html += '\n  "offers": {';
      html += '\n    "@type": "Offer",';
      html += '\n    "priceCurrency": "' + this.data.currency + '",';
      html += '\n    "price": "' + Number(this.data.price.replace(/[^0-9\.]+/g,"")).toFixed(2) + '",';
      html += '\n    "itemCondition": "' + this.data.condition + '"'
      html += '\n  }'

      html += '\n}';

      return html;
    }
  }]);
})();
