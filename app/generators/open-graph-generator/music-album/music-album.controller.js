(function () {
  'use strict';

  angular.module('app.generators.openGraph')
  .controller('OpenGraphMusicAlbumController', ['generalService', function(generalService) {
    this.data = {
      title: '',
      url: '',
      numMusicians: '1',
      numSongs: '1',
      numImages: '1',

      musicians: [new Musician()],
      songs: [new Song()],
      images: [new Image()]
    };

    var prevNumMusicians = this.data.numMusicians;
    var prevNumSongs = this.data.numSongs;
    var prevNumImages = this.data.numImages;

    function Musician(url) {
      this.url = (typeof b !== 'undefined') ?  url : '';
    }

    function Song(url) {
      this.url = (typeof b !== 'undefined') ?  url : '';
    }

    function Image(url) {
      this.url = (typeof b !== 'undefined') ?  url : '';
    }

    this.elementHtml = function() {
      var html = '';

      html += '<meta property="og:type" content="music.album">';
      html += '\n<meta property="og:title" content="' + this.data.title + '">';
      
      html += '\n<meta property="og:url" content="' + this.data.url + '">';

      for(var i = 0; i < this.data.images.length; ++i) {
        html += '\n'
          + '<meta property="og:image" content="' + this.data.images[i].url + '">';
      }

      for (var i = 0; i < this.data.musicians.length; ++i) {
        html += '\n<meta property="music:musician" content="' + this.data.musicians[i].url + '">';
      }
      
      for (var i = 0; i < this.data.songs.length; ++i) {
        html += '\n<meta property="music:song:url" content="' + this.data.songs[i].url + '">';
      }

      return html;
    }

    this.updateNumMusicians = function() {
      var numMusicians = parseInt(this.data.numMusicians);

      this.data.musicians = generalService.updateKeyValueArray(
        numMusicians, 
        prevNumMusicians, 
        this.data.musicians,
        Musician
      ).slice();

      prevNumMusicians = numMusicians;
    }

    this.updateNumSongs = function() {
      var numSongs = parseInt(this.data.numSongs);

      this.data.songs = generalService.updateKeyValueArray(
        numSongs, 
        prevNumSongs, 
        this.data.songs,
        Song
      ).slice();

      prevNumSongs = numSongs;
    }

    this.updateNumImages = function() {
      var numImages = parseInt(this.data.numImages);

      this.data.images = generalService.updateKeyValueArray(
        numImages, 
        prevNumImages, 
        this.data.images,
        Image
      ).slice();

      prevNumImages = numImages;
    }
  }]);
})();
