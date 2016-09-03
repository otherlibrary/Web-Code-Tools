(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlIFrameController', [function() {
    this.data = {
      source: 'http://apple.com',
      name: 'myIframe'
    };

    this.elementHtml = function() {
      var html = '<iframe src="' + this.data.source + '"';

      if (this.data.name) html += ' name ="' + this.data.name + '"';

      html += '></iframe>';

      return html;
    }
  }]);
})();
