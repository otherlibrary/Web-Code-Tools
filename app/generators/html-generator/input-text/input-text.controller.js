(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlInputTextController', [function() {
    this.data = {
      name: 'myText',
      placeholder: ''
    };

    this.elementHtml = function() {
      var html = '<input type="text"';

      if (this.data.name) html += ' name="' + this.data.name + '"';

      if (this.data.placeholder) html += ' placeholder="' + this.data.placeholder + '"';

      html += '>';

      return html;
    }
  }]);
})();
