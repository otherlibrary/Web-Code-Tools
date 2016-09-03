(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlInputSubmitController', [function() {
    this.data = {
      text: 'Submit',
      name: 'mySubmit',
      autofocus: '',
      disabled: ''
    };

    this.elementHtml = function() {
      var html = '<input type="submit" value="' + this.data.text + '"';

      if (this.data.name) html += ' name="' + this.data.name + '"';

      if (this.data.autofocus) html += ' autofocus';

      if (this.data.disabled) html += ' disabled';

      html += '>';

      return html;
    }
  }]);
})();
