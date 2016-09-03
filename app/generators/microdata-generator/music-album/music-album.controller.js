(function () {
  'use strict';

  angular.module('app.generators.microdata')
  .controller('MicrodataMusicAlbumController', function() {
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

    this.elementHtml = function() {
      var html = '<div itemscope itemtype="http://schema.org/MusicAlbum">';

      html += '\n    <h2><span itemprop="name">' + this.data.albumTitle + '</span> '
        + 'by <span itemprop="byArtist">' + this.data.artistName + '</span></h2>';

      html += '\n    <div itemprop="image">';
      html += '\n        <img src="' + this.data.albumImageUrl + '" alt="' + this.data.albumTitle + '">';
      html += '\n    </div>';

      html += '\n    <a itemprop="url" href="' + this.data.downloadUrl + '">DOWNLOAD</a>';
      html += '\n    <span itemprop="genre">' + this.data.genre + '</span>';

      html += '\n\n    <h3>Tracks</h3>';
      html += '\n    <span itemprop="numtracks" content="' + this.data.numTracks + '"></span>';

      html += '\n    <ol>';

      for(var i = 0; i < this.data.tracks.length; ++i) {
        html += '\n        <li itemprop="track" itemscope itemtype="http://schema.org/MusicRecording">'
          + '\n            <span itemprop="position" content="' + (i + 1) + '"></span>'
          + '\n            <span itemprop="name">';

        if (this.data.includeTrackUrl == '1') {
          html += '<a itemprop="url" href="' + this.data.tracks[i].url + '">' + this.data.tracks[i].name + '</a>';
        }
        else {
          html += this.data.tracks[i].name;
        }

        html += '</span> '
          + '<time itemprop="duration" datetime="' + getISOTime(this.data.tracks[i].duration) + '">'
          + this.data.tracks[i].duration + '</time>'
          + '\n        </li>';
      }

      html += '\n    </ol>';

      html += '\n</div>';

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
