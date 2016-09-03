(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlInputPasswordController', [function() {
    this.data = {
      name: 'myPassword',
      placeholder: ''
    };

    this.elementHtml = function() {
      var html = '<input type="password"';

      if (this.data.name) html += ' name="' + this.data.name + '"';

      if (this.data.placeholder) html += ' placeholder="' + this.data.placeholder + '"';

      html += '>';

      return html;
    }
  }]);
})();
