(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlInputFileController', [function() {
    this.data = {
      name: 'myFileBrowser'
    };

    this.elementHtml = function() {
      var html = '<input type="file"';

      if (this.data.name) html += ' name="' + this.data.name + '"';

      html += '>';

      return html;
    }
  }]);
})();
