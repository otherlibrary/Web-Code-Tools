(function () {
  'use strict';

  angular.module('app.generators.jsonLd')
  .controller('JsonLdReviewController', [function() {
    this.data = {
      item: '',
      author: '',
      dateReviewed: '',
      description: '',
      rating: ''
    };

    this.jsonLd = function() {
      var html = '<script type="application/ld+json">';
      
      html += '\n{\n  "@context": "http://schema.org/",';

      html += '\n  "@type": "Review",';

      html += '\n  "itemReviewed": {';
      html += '\n    "@type": "Thing",';
      html += '\n    "name": "' + this.data.item + '"';
      html += '\n  },';

      html += '\n  "author": {';
      html += '\n    "@type": "Person",';
      html += '\n    "name": "' + this.data.author + '"';
      html += '\n  },';

      html += '\n  "datePublished": "' + this.data.dateReviewed + '",';

      html += '\n  "reviewRating": {';
      html += '\n    "@type": "Rating",'
      html += '\n    "description": "' + this.data.description + '",'
      html += '\n    "ratingValue": "' + this.data.rating + '"';
      html += '\n  }';

      html += '\n}';

      html += '\n</script>';

      return html;
    }
  }]);
})();
