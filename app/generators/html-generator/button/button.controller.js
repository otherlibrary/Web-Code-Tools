(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlButtonController', [function() {
    this.data = {
      type: 'button',
      text: 'Click me!',
      name: 'myButton',
      target: '_self',
      formAction: '',
      autoFocus: '',
      disabled: ''
    };

    this.elementHtml = function() {
      var html = '<button type="' + this.data.type + '"';

      if (this.data.name) html += ' name="' + this.data.name + '"';

      if (this.data.target) html += ' formtarget="' + this.data.target + '"';

      if (this.data.type === 'submit') {
        if (this.data.formAction) html += ' formaction="' + this.data.formAction + '"';
      }

      if (this.data.autoFocus) html += ' autofocus';

      if (this.data.disabled) html += ' disabled';

      html += '>' + this.data.text;

      html += '</button>';

      return html;
    }
  }]);
})();
