(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlInputCheckboxRadioController', [function() {
    this.data = {
      type: 'checkbox',
      label: 'Check me!',
      name: 'myCheckbox'
    };

    this.elementHtml = function() {
      var html = '<label><input type="' + this.data.type + '"';

      if (this.data.name) html += ' name="' + this.data.name + '"';

      html += '> ' + this.data.label;

      html += '</label>';

      return html;
    }
  }]);
})();
