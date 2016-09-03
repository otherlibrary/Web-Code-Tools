(function () {
  'use strict';

  angular.module('app.generators.jsonLd')
  .controller('JsonLdVideoController', [function() {
    this.data = {
      videoName: '',
      videoUrl: '',
      description: '',
      thumbnailUrl: '',
      uploadDate: '',
      duration: ''
    };

    this.jsonLd = function() {
      var html = '{\n  "@context": "http://schema.org/",';

      html += '\n  "@type": "VideoObject",';
      html += '\n  "name": "' + this.data.videoName + '",';
      html += '\n  "contentUrl": "' + this.data.videoUrl + '",';
      html += '\n  "duration": "' + getISOTime(this.data.duration) + '",';
      html += '\n  "thumbnailUrl": "' + this.data.thumbnailUrl + '",'
      html += '\n  "uploadDate": "' + this.data.uploadDate + '",'
      html += '\n  "description": "' + this.data.description + '"'

      html += '\n}';

      return html;
    }

    function getISOTime(time) {
      var isoTime = '';

      if (time) {
        var indices = [];

        for (var i = time.length; i > 0; --i) {
          if (time[i] === ":") indices.push(i);
        }

        isoTime += 'PT' + time;

        if (typeof indices[0] != 'undefined') {
          isoTime = isoTime.substr(0, indices[0] + 2) + 'M' + isoTime.substr(indices[0] + 3);
        }

        if (typeof indices[1] != 'undefined') {
          isoTime = isoTime.substr(0, indices[1] + 2) + 'H' + isoTime.substr(indices[1] + 3);
        }

        isoTime += 'S';
      }

      return isoTime;
    }
  }]);
})();
