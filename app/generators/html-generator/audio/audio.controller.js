(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlAudioController', [function() {
    this.data = {
      sourceOgg: 'media/sound.ogg',
      sourceMp3: 'media/sound.mp3',
      sourceWav: 'media/sound.wav',
      controls: 'controls',
      autoplay: '',
      loop: ''
    };

    this.elementHtml = function() {
      var html = '<audio';

      if (this.data.controls) html += ' controls';

      if (this.data.autoplay) html += ' autoplay';

      if (this.data.loop) html += ' loop';

      html += '>';

      if (this.data.sourceOgg) html += '\n    <source src="' + this.data.sourceOgg + '" type="audio/ogg">';
      if (this.data.sourceMp3) html += '\n    <source src="' + this.data.sourceMp3 + '" type="audio/mpeg">';
      if (this.data.sourceWav) html += '\n    <source src="' + this.data.sourceWav + '" type="audio/wav">';

      html += '\n</audio>';

      return html;
    }
  }]);
})();
