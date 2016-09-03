(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlVideoController', [function() {
    this.data = {
      sourceMp4: 'media/video.mp4',
      sourceOgv: 'media/video.ogv',
      sourceWebM: 'media/video.webm',
      height: '220',
      width: '390',
      controls: 'controls',
      autoplay: '',
      loop: '',
      muted: ''
    };

    this.elementHtml = function() {
      var html = '<video';

      if (this.data.controls) html += ' controls';
      if (this.data.autoplay) html += ' autoplay';
      if (this.data.loop) html += ' loop';
      if (this.data.muted) html += ' muted';

      if (this.data.height > '0') html += ' height="' + this.data.height + '"';
      if (this.data.width > '0') html += ' width="' + this.data.width + '"';

      html += '>';

      if (this.data.sourceMp4) html += '\n    <source src="' + this.data.sourceMp4 + '" type="video/mp4">';
      if (this.data.sourceOgv) html += '\n    <source src="' + this.data.sourceOgv + '" type="video/ogg">';
      if (this.data.sourceWebM) html += '\n    <source src="' + this.data.sourceWebM + '" type="video/webm">';

      html += '\n</video>';

      return html;
    }
  }]);
})();
