(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlInputUrlController', [function() {
    this.data = {
      name: 'myUrl',
      placeholder: ''
    };

    this.elementHtml = function() {
      var html = '<input type="url"';

      if (this.data.name) html += ' name="' + this.data.name + '"';

      if (this.data.placeholder) html += ' placeholder="' + this.data.placeholder + '"';

      html += '>';

      return html;
    }
  }]);
})();
