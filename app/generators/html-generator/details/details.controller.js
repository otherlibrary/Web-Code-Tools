(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlDetailsController', [function() {
    this.data = {
      summary: 'This is a short summary.',
      details: 'These are the additional details.',
      open: ''
    };

    this.elementHtml = function() {
      var html = '<details';

      if (this.data.open) html += ' open';

      html += '>';

      html += '\n    <summary>' + this.data.summary + '</summary>';
      html += '\n    <p>' + this.data.details + '</p>';

      html += '\n</details>';

      return html;
    }
  }]);
})();
