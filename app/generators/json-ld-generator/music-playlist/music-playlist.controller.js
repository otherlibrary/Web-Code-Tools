(function () {
  'use strict';

  angular.module('app.generators.jsonLd')
  .controller('JsonLdMusicPlaylistController', function() {
    this.data = {
      playlistName: '',
      playlistImageUrl: '',
      downloadUrl: '',
      genre: '',
      numTracks: '1',
      includeTrackUrl: '1',

      tracks: [{name: '', artist: '', duration: '', album: '', url: ''}]
    };

    var prevNumTracks = this.data.numTracks;

    this.jsonLd = function() {
      var html = '<script type="application/ld+json">';
      
      html += '\n{\n  "@context": "http://schema.org/",';

      html += '\n  "@type": "MusicPlaylist",';
      html += '\n  "name": "' + this.data.playlistName + '",';
      html += '\n  "image": "' + this.data.playlistImageUrl + '",';
      html += '\n  "url": "' + this.data.downloadUrl + '",';
      
      if (this.data.genre) {
        html += '\n  "genre": "' + this.data.genre + '",';
      }
      
      html += '\n  "numtracks": "' + this.data.numTracks + '",';

      html += '\n  "track": [';

      for(var i = 0; i < this.data.tracks.length; ++i) {
        html += '\n    {';
        html += '\n      "@type": "MusicRecording",';
        html += '\n      "position": "' + (i + 1) + '",';
        html += '\n      "name": "' + this.data.tracks[i].name + '",';
        html += '\n      "byArtist": {';
        html += '\n        "@type": "MusicGroup",';
        html += '\n        "name": "' + this.data.tracks[i].artist + '"';
        html += '\n      },';

        html += '\n      "inAlbum": {';
        html += '\n        "@type": "MusicAlbum",';
        html += '\n        "name": "' + this.data.tracks[i].album + '"';
        html += '\n      },';

        html += '\n      "duration": "' + getISOTime(this.data.tracks[i].duration) + '",';

        if (this.data.includeTrackUrl == '1') {
          html += '\n      "url": "' + this.data.tracks[i].url + '"';
        }

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
          this.data.tracks.push({name: '', artist: '', duration: '', album: '', url: ''});
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
