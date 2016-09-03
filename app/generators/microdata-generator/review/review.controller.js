(function () {
  'use strict';

  angular.module('app.generators.microdata')
  .controller('MicrodataReviewController', [function() {
    this.data = {
      item: '',
      author: '',
      dateReviewed: '',
      description: '',
      rating: ''
    };

    this.elementHtml = function() {
      var html = '<div itemscope itemtype="http://schema.org/Review">';

      html += '\n    <div itemprop="itemReviewed" itemscope itemtype="http://schema.org/Thing">';
      html += '\n        <span itemprop="name">' + this.data.item + '</span><br>';
      html += '\n    </div>';

      html += '\n    <div itemprop="author" itemscope="" itemtype="http://schema.org/Person">';
      html += '\n        Reviewed by <span itemprop="name">' + this.data.author + '</span>'
      html += '\n    </div>';

      html += '\n    on <time itemprop="datePublished" datetime="' + this.data.dateReviewed + '"></time><br>';

      html += '\n    <div itemprop="reviewRating" itemscope="" itemtype="http://schema.org/Rating">';
      html += '\n        <span itemprop="description">' + this.data.description + '</span><br>';
      html += '\n        Rating: <span itemprop="ratingValue">' + this.data.rating + '</span>';
      html += '\n    </div>';

      html += '\n</div>';

      return html;
    }
  }]);
})();
