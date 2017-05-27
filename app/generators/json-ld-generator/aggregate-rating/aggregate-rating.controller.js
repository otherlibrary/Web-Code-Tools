(function () {
  'use strict';

  angular.module('app.generators.jsonLd')
  .controller('JsonLdAggregateRatingController', [function() {
    this.data = {
      item: '',
      averageRating: '',
      totalRatings: '',
      totalReviews: ''
    };

    this.jsonLd = function() {
      var html = '<script type="application/ld+json">';
      
      html += '\n{\n  "@context": "http://schema.org/",';

      html += '\n  "@type": "Product",';
      html += '\n  "name": "' + this.data.item + '",';

      html += '\n  "aggregateRating": {';
      html += '\n    "@type": "AggregateRating",';
      html += '\n    "ratingValue" : "' + this.data.averageRating + '",';
      html += '\n    "ratingCount": "' + this.data.totalRatings + '",';
      html += '\n    "reviewCount": "' + this.data.totalReviews + '"';
      html += '\n  }';

      html += '\n}';

      html += '\n</script>';

      return html;
    }
  }]);
})();
