(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlInputImageController', [function() {
    this.data = {
      source: 'img/seagull.jpg',
      name: 'myImageButton',
      altText: 'Submit',
      width: '70',
      height: '70',
      autofocus: ''
    };

    this.elementHtml = function() {
      var html = '<input type="image" src="' + this.data.source + '"';

      if (this.data.name) html += ' name="' + this.data.name + '"';

      html += ' alt="' + this.data.altText + '"';

      html += ' width="' + this.data.width + '" height="' + this.data.height + '"';

      if (this.data.autofocus) html += ' autofocus';

      html += '>';

      return html;
    }
  }]);
})();
