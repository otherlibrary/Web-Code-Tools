(function () {
  'use strict';

  angular.module('app.generators.microdata')
  .controller('MicrodataArticleController', [function() {
    this.data = {
      headline: '',
      description: '',
      datePublished: '',
      imageUrl: '',
      imageAlt: '',
      imageHeight: '',
      imageWidth: '',
      author: '',
      publisherLogoUrl: '',
      publisher: '',
      articleBody: ''
    };

    this.elementHtml = function() {
      var html = '<div itemscope itemtype="http://schema.org/NewsArticle">';

      html += '\n    <h1 itemprop="headline">' + this.data.headline + '</h1>';
      html += '\n    <span itemprop="datePublished" content="' + this.data.datePublished
        + '">' + this.data.datePublished + '</span>';
      html += '\n    <span itemprop="description">' + this.data.description + '</span><br>';

      html += '\n    <div itemprop="image" itemscope itemtype="http://schema.org/ImageObject">';
      html += '\n        <meta itemprop="height" content="' + this.data.imageHeight + '">';
      html += '\n        <meta itemprop="width" content="' + this.data.imageWidth + '">';
      html += '\n        <meta itemprop="url" content="' + this.data.imageUrl + '">';
      html += '\n        <img src="' + this.data.imageUrl + '" alt="' + this.data.imageAlt + '">';
      html += '\n    </div>';

      html += '\n    Author: <span itemprop="author">' + this.data.author + '</span><br>';

      html += '\n    <div itemprop="publisher" itemscope itemtype="http://schema.org/Organization">';
      html += '\n        <div itemprop="logo" itemscope itemtype="http://schema.org/ImageObject">';
      html += '\n            <meta itemprop="url" content="' + this.data.publisherLogoUrl + '">';
      html += '\n            <img src="' + this.data.publisherLogoUrl + '" alt="' + this.publisher + '">';
      html += '\n        </div>';
      html += '\n        <span itemprop="name">' + this.data.publisher + '</span>';
      html += '\n    </div>';

      html += '\n    <span itemprop="articleBody">' + this.data.articleBody + '</span>';

      html += '\n</div>';

      return html;
    }
  }]);
})();
