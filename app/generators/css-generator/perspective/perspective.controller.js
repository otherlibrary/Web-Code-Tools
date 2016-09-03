(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssPerspectiveController', function() {
    this.data = {
      perspective: '150',
      rotateX: '10',
      rotateY: '-5'
    };

    this.parentCss = function() {
      return 'position: relative;\n'
      + '-webkit-perspective: ' + this.data.perspective + 'px;\n'
      + 'perspective: ' + this.data.perspective + 'px;';
    }

    this.childCss = function() {
      return '-webkit-transform: rotateX(' + this.data.rotateX + 'deg) rotateY(' + this.data.rotateY + 'deg);\n'
      + 'transform: rotateX(' + this.data.rotateX + 'deg) rotateY(' + this.data.rotateY + 'deg);';
    }
  });
})();
