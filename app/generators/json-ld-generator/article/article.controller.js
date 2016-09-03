(function () {
  'use strict';

  angular.module('app.generators.jsonLd')
  .controller('JsonLdArticleController', [function() {
    this.data = {
      headline: '',
      description: '',
      datePublished: '',
      imageUrl: '',
      imageHeight: '',
      imageWidth: '',
      author: '',
      publisherLogoUrl: '',
      publisher: '',
      articleBody: ''
    };

    this.jsonLd = function() {
      var html = '{\n  "@context": "http://schema.org/",';

      html += '\n  "@type": "NewsArticle",';
      html += '\n  "headline": "' + this.data.headline + '",';
      html += '\n  "datePublished": "' + this.data.datePublished + '",';
      html += '\n  "description": "' + this.data.description + '",';

      html += '\n  "image": {';
      html += '\n    "@type": "ImageObject",';
      html += '\n    "height": "' + this.data.imageHeight + '",';
      html += '\n    "width": "' + this.data.imageWidth + '",';
      html += '\n    "url": "' + this.data.imageUrl + '"';
      html += '\n  },';

      html += '\n  "author": "' + this.data.author + '",';

      html += '\n  "publisher": {';
      html += '\n    "@type": "Organization",';
      html += '\n    "logo": {';
      html += '\n      "@type": "ImageObject",';
      html += '\n      "url": "' + this.data.publisherLogoUrl + '"';
      html += '\n    },';
      html += '\n    "name": "' + this.data.publisher + '"';
      html += '\n  },';

      html += '\n  "articleBody": "' + this.data.articleBody + '"';

      html += '\n}';

      return html;
    }
  }]);
})();
