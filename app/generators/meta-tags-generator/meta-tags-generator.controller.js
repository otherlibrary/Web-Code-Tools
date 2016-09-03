(function () {
  'use strict';

  angular.module('app.generators.metaTags')
  .controller('MetaTagsController', function() {
    this.data = {
      pageTitle: '',
      description: '',
      index: 'index, follow',
      author: ''
    };

    this.elementHtml = function() {
      var html = '';

      html += '<meta charset="utf-8">';
      html += '\n<title>' + this.data.pageTitle + '</title>';
      html += '\n<meta name="description" content="' + this.data.description + '">';
      html += '\n<meta name="robots" content="' + this.data.index + '">';
      html += '\n<meta name="author" content="' + this.data.author + '">';

      return html;
    }
  });
})();
