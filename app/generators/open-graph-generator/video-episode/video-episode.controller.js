(function () {
  'use strict';

  angular.module('app.generators.openGraph')
  .controller('OpenGraphVideoEpisodeController', ['generalService', function(generalService) {
    this.data = {
      title: '',
      url: '',
      series: '',
      numActors: '1',
      numImages: '1',

      actors: [new Actor()],
      images: [new Image()]
    };

    var prevNumActors = this.data.numActors;
    var prevNumImages = this.data.numImages;

    function Actor(url) {
      this.url = (typeof b !== 'undefined') ?  url : '';
    }

    function Image(url) {
      this.url = (typeof b !== 'undefined') ?  url : '';
    }

    this.elementHtml = function() {
      var html = '';

      html += '<meta property="og:type" content="video.episode">';
      html += '\n<meta property="og:title" content="' + this.data.title + '">';
      
      html += '\n<meta property="og:url" content="' + this.data.url + '">';

      for(var i = 0; i < this.data.images.length; ++i) {
        html += '\n<meta property="og:image" content="' + this.data.images[i].url + '">';
      }

      if (this.data.series) {
        html += '\n<meta property="video:series" content="' + this.data.series + '">';
      }

      for (var i = 0; i < this.data.actors.length; ++i) {
        html += '\n<meta property="video:actor:id" content="' + this.data.actors[i].url + '">';
      }

      return html;
    }

    this.updateNumActors = function() {
      var numActors = parseInt(this.data.numActors);

      this.data.actors = generalService.updateKeyValueArray(
        numActors, 
        prevNumActors, 
        this.data.actors,
        Actor
      ).slice();

      prevNumActors = numActors;
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
