(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlInputTelephoneController', [function() {
    this.data = {
      name: 'myTel',
      placeholder: '(123) 555-9876'
    };

    this.elementHtml = function() {
      var html = '<input type="tel"';

      if (this.data.name) html += ' name="' + this.data.name + '"';

      if (this.data.placeholder) html += ' placeholder="' + this.data.placeholder + '"';

      html += '>';

      return html;
    }
  }]);
})();
