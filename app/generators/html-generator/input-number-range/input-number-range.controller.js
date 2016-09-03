(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlInputNumberRangeController', [function() {
    this.data = {
      type: 'number',
      name: 'myInput',
      defaultValue: '0',
      minValue: '0',
      maxValue: '100',
      stepValue: '1'
    };

    this.elementHtml = function() {
      var html = '<input type="' + this.data.type + '"';

      if (this.data.name) html += ' name="' + this.data.name + '"';

      if (this.data.defaultValue) html += ' value="' + this.data.defaultValue + '"';

      if (this.data.minValue) html += ' min="' + this.data.minValue + '"';

      if (this.data.maxValue) html += ' max="' + this.data.maxValue + '"';

      if (this.data.stepValue) html += ' step="' + this.data.stepValue + '"';

      html += '>';

      return html;
    }
  }]);
})();
