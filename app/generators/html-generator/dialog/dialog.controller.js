(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlDialogController', [function() {
    this.data = {
      open: 'open',
      text: '<p>Some text...</p>'
    };

    this.elementHtml = function() {
      var html = '<dialog';

      if (this.data.open) html += ' open';

      html += '>';

      html += '\n    ' + this.data.text;

      html += '\n</dialog>';

      return html;
    }
  }]);
})();
