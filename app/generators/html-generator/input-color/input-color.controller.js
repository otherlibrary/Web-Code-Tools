(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlInputColorController', [function() {
    this.data = {
      name: 'myColorField',
      placeholder: ''
    };

    this.elementHtml = function() {
      var html = '<input type="color"';

      if (this.data.name) html += ' name="' + this.data.name + '"';

      if (this.data.placeholder) html += ' placeholder="' + this.data.placeholder + '"';

      html += '>';

      return html;
    }
  }]);
})();
