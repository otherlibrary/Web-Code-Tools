(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlHyperlinkController', [function() {
    this.data = {
      url: 'http://',
      target: '_blank',
      text: 'click here',
      follow: ''
    };

    this.elementHtml = function() {
      var html = '<a href="' + this.data.url + '" target="' + this.data.target + '"';

      if (this.data.follow) html += ' rel="nofollow"';

      html += '>' + this.data.text + '</a>';

      return html;
    }
  }]);
})();
