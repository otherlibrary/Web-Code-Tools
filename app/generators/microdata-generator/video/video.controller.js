(function () {
  'use strict';

  angular.module('app.generators.microdata')
  .controller('MicrodataVideoController', [function() {
    this.data = {
      videoName: '',
      videoUrl: '',
      description: '',
      thumbnailUrl: '',
      uploadDate: '',
      duration: ''
    };

    this.elementHtml = function() {
      var html = '<div itemscope itemtype="http://schema.org/VideoObject">';

      html += '\n    <h2 itemprop="name">' + this.data.videoName + '</h2><br>';
      html += '\n    <link itemprop="contentUrl" href="' + this.data.videoUrl + '">';
      html += '\n    <time itemprop="duration" content="' + getISOTime(this.data.duration) + '">'
        + this.data.duration + '</time><br>';
      html += '\n    <img itemprop="thumbnailUrl" src="' + this.data.thumbnailUrl
        + '" alt="' + this.data.videoName + '"><br>';
      html += '\n    <span itemprop="uploadDate">' + this.data.uploadDate + '</span><br>';
      html += '\n    <span itemprop="description">' + this.data.description + '</span>';

      html += '\n</div>';

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
