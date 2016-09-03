(function () {
  'use strict';

  angular.module('app.generators.microdata')
  .controller('MicrodataAggregateRatingController', [function() {
    this.data = {
      item: '',
      averageRating: '',
      totalRatings: '',
      totalReviews: ''
    };

    this.elementHtml = function() {
      var html = '<div itemscope itemtype="http://schema.org/Product">';

      html += '\n    <span itemprop="name">' + this.data.item + '</span><br>';

      html += '\n    <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">';
      html += '\n        Average Rating: <span itemprop="ratingValue">' + this.data.averageRating + '</span><br>';
      html += '\n        Votes: <span itemprop="ratingCount">' + this.data.totalRatings + '</span><br>';
      html += '\n        Reviews: <span itemprop="reviewCount">' + this.data.totalReviews + '</span>';
      html += '\n    </div>';

      html += '\n</div>';

      return html;
    }
  }]);
})();
