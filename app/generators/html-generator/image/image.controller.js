(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlImageController', [function() {
    this.data = {
      source: 'img/ottawa.jpg',
      altText: 'My Image',
      height: '170',
      width: '390'
    };

    this.elementHtml = function() {
      var html = '<img src="' + this.data.source + '" alt="' + this.data.altText + '"';

      if (this.data.height > '0') html += ' height="' + this.data.height + '"';

      if (this.data.width > '0') html += ' width="' + this.data.width + '"';

      html += '>';

      return html;
    }
  }]);
})();
