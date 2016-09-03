(function () {
  'use strict';

  angular.module('app.generators.microdata')
  .controller('MicrodataSoftwareApplicationController', [function() {
    this.data = {
      appName: '',
      category: '',
      operatingSystem: '',
      rating: '',
      numRatings: '',
      currency: '',
      price: ''
    };

    this.elementHtml = function() {
      var html = '<div itemscope itemtype="http://schema.org/SoftwareApplication">';

      html += '\n    <span itemprop="name">' + this.data.appName + '</span><br>';
      html += '\n    <span itemprop="applicationCategory">' + this.data.category + '</span><br>';

      html += '\n    Requires <span itemprop="operatingSystem">' + this.data.operatingSystem + '</span><br>';

      html += '\n    <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">';
      html += '\n        Rating <span itemprop="ratingValue">' + this.data.rating + '</span> ';
      html += '\n        (<span itemprop="ratingCount">' + this.data.numRatings + ' ratings</span>)';
      html += '\n    </div>';

      html += '\n    <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">';
      if (this.data.currency) {
          html += ' <span itemprop="priceCurrency" content="' + this.data.currency + '"></span>';
      }
      html += '\n        Price: ' + (this.data.price).charAt(0) + '<span itemprop="price">' + Number(this.data.price.replace(/[^0-9\.]+/g,"")).toFixed(2) + '</span>';
      html += '\n    </div>';

      html += '\n</div>';

      return html;
    }
  }]);
})();
