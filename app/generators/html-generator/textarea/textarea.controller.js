(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlTextareaController', [function() {
    this.data = {
      name: 'myTextarea',
      placeholder: 'Leave a comment.',
      autofocus: '',
      columns: '30',
      rows: '15',
      maxChars: '0',
      required: 'required'
    };

    this.elementHtml = function() {
      var html = '<textarea';

      if (this.data.name) html += ' name="' + this.data.name + '"';

      if (this.data.placeholder) html += ' placeholder="' + this.data.placeholder + '"';

      if (this.data.columns) html += ' cols="' + this.data.columns + '"';

      if (this.data.rows) html += ' rows="' + this.data.rows + '"';

      if (this.data.maxChars != '0') html += ' maxlength="' + this.data.maxChars + '"';

      if (this.data.autofocus) html += ' autofocus';

      if (this.data.required) html += ' required';

      html += '></textarea>';

      return html;
    }
  }]);
})();
