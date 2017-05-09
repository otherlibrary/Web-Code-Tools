(function () {
  'use strict';

  angular.module('app.generators.fileName')
  .controller('FileNameMusicController', function() {
    this.data = {
      trackNumber: '',
      fileType: 'mp3',
      primaryArtistName: '',
      trackTitle: '',
      numSecondaryArtists: '0',

      secondaryArtistNames: []
    };

    var prevNumSecondaryArtists = this.data.numSecondaryArtists;

    this.fileNameReg = function() {
      var fileNameReg = '';

      // Add 0 in front of number if less than 10.
      fileNameReg += ('0' + this.data.trackNumber).slice(-2) + ' - ';
      fileNameReg += this.data.primaryArtistName + ' - ';
      fileNameReg += this.data.trackTitle;

      if (this.data.numSecondaryArtists > 0) {
        fileNameReg += ' (feat. ';
      }

      for (var i = 0; i < this.data.numSecondaryArtists; ++i) {
        fileNameReg += this.data.secondaryArtistNames[i];
        if (i < this.data.numSecondaryArtists - 1) {
          fileNameReg += ', ';
        }
      }

      if (this.data.numSecondaryArtists > 0) {
        fileNameReg += ')';
      }

      fileNameReg += '.' + this.data.fileType;

      return fileNameReg;
    }

    this.fileNameSlug = function() {
      var fileNameSlug = '';

      // Add 0 in front of number if less than 10.
      fileNameSlug += ('0' + this.data.trackNumber).slice(-2) + '-';
      fileNameSlug += this.data.primaryArtistName.replace(/\s/g,'-') + '-';
      fileNameSlug += this.data.trackTitle.replace(/\s/g,'-');

      if (this.data.numSecondaryArtists > 0) {
        fileNameSlug += '-feat-';
      }

      for (var i = 0; i < this.data.numSecondaryArtists; ++i) {
        fileNameSlug += this.data.secondaryArtistNames[i].replace(/\s/g,'-');
        if (i < this.data.numSecondaryArtists - 1) {
          fileNameSlug += '-';
        }
      }

      fileNameSlug += '.' + this.data.fileType;

      return fileNameSlug;
    }

    this.updateNumSecondaryArtists = function() {
      var numSecondaryArtists = parseInt(this.data.numSecondaryArtists);

      if (numSecondaryArtists > prevNumSecondaryArtists) {
        for (var i = 0; i < (numSecondaryArtists - prevNumSecondaryArtists); ++i) {
          this.data.secondaryArtistNames.push('');
        }
      }
      else if (numSecondaryArtists < prevNumSecondaryArtists) {
        for (var i = 0; i < (prevNumSecondaryArtists - numSecondaryArtists); ++i) {
          this.data.secondaryArtistNames.pop();
        }
      }

      prevNumSecondaryArtists = numSecondaryArtists;
    }
  });
})();
