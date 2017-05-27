(function () {
  'use strict';

  angular.module('app.generators.jsonLd')
  .controller('JsonLdMusicAlbumController', function() {
    this.data = {
      albumTitle: '',
      artistName: '',
      albumImageUrl: '',
      downloadUrl: '',
      genre: '',
      numTracks: '1',
      includeTrackUrl: '1',

      tracks: [{name: '', duration: '', url: ''}]
    };

    var prevNumTracks = this.data.numTracks;

    this.jsonLd = function() {
      var html = '<script type="application/ld+json">';
      
      html += '\n{\n  "@context": "http://schema.org/",';

      html += '\n  "@type": "MusicAlbum",';
      html += '\n  "name": "' + this.data.albumTitle + '",';
      
      html += '\n  "byArtist": {';
      html += '\n    "@type": "MusicGroup",';
      html += '\n    "name": "' + this.data.artistName + '"';
      html += '\n  },';
      
      html += '\n  "image": "' + this.data.albumImageUrl + '",';
      html += '\n  "url": "' + this.data.downloadUrl + '",';
      html += '\n  "genre": "' + this.data.genre + '",';
      html += '\n  "numtracks": "' + this.data.numTracks + '",';

      html += '\n  "track": [';

      for(var i = 0; i < this.data.tracks.length; ++i) {
        html += '\n    {';
        html += '\n      "@type": "MusicRecording",';
        html += '\n      "position": "' + (i + 1) + '",';
        html += '\n      "name": "' + this.data.tracks[i].name + '",';

        if (this.data.includeTrackUrl == '1') {
          html += '\n      "url": "' + this.data.tracks[i].url + '",';
        }

        html += '\n      "duration": "' + getISOTime(this.data.tracks[i].duration) + '"';
        html += '\n    }';

        if (i < (this.data.tracks.length - 1)) html += ',';
      }

      html += '\n  ]';

      html += '\n}';

      html += '\n</script>';

      return html;
    }

    this.updateNumTracks = function() {
      var numTracks = parseInt(this.data.numTracks);

      if (numTracks > prevNumTracks) {
        for (var i = 0; i < (numTracks - prevNumTracks); ++i) {
          this.data.tracks.push({name: '', duration: '', url: ''});
        }
      }
      else if (numTracks < prevNumTracks) {
        for (var i = 0; i < (prevNumTracks - numTracks); ++i) {
          this.data.tracks.pop();
        }
      }

      prevNumTracks = numTracks;
    }

    function getISOTime(time) {
      var isoTime = '';

      if (time) {
        isoTime += 'PT' + time;
        isoTime = isoTime.replace(':', 'M');
        isoTime += 'S';
      }

      return isoTime;
    }
  });
})();
