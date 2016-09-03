(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlInputEmailController', [function() {
    this.data = {
      name: 'myEmailField',
      placeholder: ''
    };

    this.elementHtml = function() {
      var html = '<input type="email"';

      if (this.data.name) html += ' name="' + this.data.name + '"';

      if (this.data.placeholder) html += ' placeholder="' + this.data.placeholder + '"';

      html += '>';

      return html;
    }
  }]);
})();
