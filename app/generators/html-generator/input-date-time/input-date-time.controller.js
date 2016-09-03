(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlInputDateTimeController', [function() {
    this.data = {
      type: 'date',
      name: 'myDateTime',
      placeholder: ''
    };

    this.elementHtml = function() {
      var html = '<input type="' + this.data.type + '"';

      if (this.data.name) html += ' name="' + this.data.name + '"';

      if (this.data.placeholder) html += ' placeholder="' + this.data.placeholder + '"';

      html += '>';

      return html;
    }
  }]);
})();
