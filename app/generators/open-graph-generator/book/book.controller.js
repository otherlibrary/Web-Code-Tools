(function () {
  'use strict';

  angular.module('app.generators.openGraph')
  .controller('OpenGraphBookController', ['generalService', function(generalService) {
    this.data = {
      title: '',
      siteName: '',
      siteUrl: '',
      description: '',
      isbn: '',
      ratingValue: '',
      ratingScale: '',
      numAuthors: '1',
      numImages: '1',

      authors: [new Author()],
      images: [new Image()]
    };

    var prevNumAuthors = this.data.numAuthors;
    var prevNumImages = this.data.numImages;

    function Author(url) {
      this.url = (typeof b !== 'undefined') ?  url : '';
    }

    function Image(url) {
      this.url = (typeof b !== 'undefined') ?  url : '';
    }

    this.elementHtml = function() {
      var html = '';

      html += '<meta property="og:type" content="books.book">';
      html += '\n<meta property="og:title" content="' + this.data.title + '">';
      
      if (this.data.siteName) {
        html += '\n<meta property="og:site_name" content="' + this.data.siteName + '">';
      }
      
      html += '\n<meta property="og:url" content="' + this.data.siteUrl + '">';

      if (this.data.description) {
        html += '\n<meta property="og:description" content="' + this.data.description + '">';
      }

      for(var i = 0; i < this.data.images.length; ++i) {
        html += '\n'
          + '<meta property="og:image" content="' + this.data.images[i].url + '">';
      }

      html += '\n<meta property="books:isbn" content="' + this.data.isbn + '">';
      html += '\n<meta property="books:rating:value" content="' + this.data.ratingValue + '">';
      html += '\n<meta property="books:rating:scale" content="' + this.data.ratingScale + '">';

      for(var i = 0; i < this.data.authors.length; ++i) {
        html += '\n'
          + '<meta property="books:author" content="' + this.data.authors[i].url + '">';
      }

      return html;
    }

    this.updateNumAuthors = function() {
      var numAuthors = parseInt(this.data.numAuthors);

      this.data.authors = generalService.updateKeyValueArray(
        numAuthors, 
        prevNumAuthors, 
        this.data.authors,
        Author
      ).slice();
      
      prevNumAuthors = numAuthors;
    }

    this.updateNumImages = function() {
      var numImages = parseInt(this.data.numImages);

      this.data.images = generalService.updateKeyValueArray(
        numImages, 
        prevNumImages, 
        this.data.images,
        Image
      ).slice();

      prevNumImages = numImages;
    }
  }]);
})();
