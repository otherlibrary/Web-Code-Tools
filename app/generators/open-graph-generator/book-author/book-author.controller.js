(function () {
  'use strict';

  angular.module('app.generators.openGraph')
  .controller('OpenGraphBookAuthorController', ['generalService', function(generalService) {
    this.data = {
      title: '',
      url: '',
      authorUrl: '',
      description: '',
      numBooks: '1',
      numImages: '1',

      books: [new Book()],
      images: [new Image()]
    };

    var prevNumBooks = this.data.numBooks;
    var prevNumImages = this.data.numImages;

    function Book(url) {
      this.url = (typeof b !== 'undefined') ?  url : '';
    }

    function Image(url) {
      this.url = (typeof b !== 'undefined') ?  url : '';
    }

    this.elementHtml = function() {
      var html = '';

      html += '<meta property="og:type" content="books.author">';
      html += '\n<meta property="og:title" content="' + this.data.title + '">';
      
      html += '\n<meta property="og:url" content="' + this.data.url + '">';

      if (this.data.description) {
        html += '\n<meta property="og:description" content="' + this.data.description + '">';
      }

      for (var i = 0; i < this.data.images.length; ++i) {
        html += '\n<meta property="og:image" content="' + this.data.images[i].url + '">';
      }

      for (var i = 0; i < this.data.books.length; ++i) {
        html += '\n<meta property="books:book" content="' + this.data.books[i].url + '">';
      }

      if (this.data.authorUrl) {
        html += '\n<meta property="books:official_site" content="' + this.data.authorUrl + '">';
      }

      return html;
    }

    this.updateNumBooks = function() {
      var numBooks = parseInt(this.data.numBooks);

      this.data.books = generalService.updateKeyValueArray(
        numBooks, 
        prevNumBooks, 
        this.data.books,
        Book
      ).slice();

      prevNumBooks = numBooks;
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
