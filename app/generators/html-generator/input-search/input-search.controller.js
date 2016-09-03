(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlInputSearchController', [function() {
    this.data = {
      name: 'mySearch',
      placeholder: 'Search...'
    };

    this.elementHtml = function() {
      var html = '<input type="search"';

      if (this.data.name) html += ' name="' + this.data.name + '"';

      if (this.data.placeholder) html += ' placeholder="' + this.data.placeholder + '"';

      html += '>';

      return html;
    }
  }]);
})();
