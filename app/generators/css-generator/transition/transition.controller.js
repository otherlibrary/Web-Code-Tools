(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssTransitionController', ['$rootScope', function($rootScope) {
    this.data = {
      type: 'background-color',
      timingFunction: 'linear',
      duration: '1',
      beforeColor: '#ffffff',
      afterColor: '#ff0000',
      height: '400',
      opacity: '0.5',
      outlineWidth: '5',
      outlineStyle: 'solid',
      outlineColor: '#fff70d',
      width: '300'
    };

    this.elementCss = function() {
      var css = '';

      if (this.data.type === 'background-color') {
        css += 'background-color: ' + this.data.beforeColor + ';\n';
      }

      css += 'transition: ' + this.data.type + ' ' + this.data.duration + 's ' + this.data.timingFunction + ';';

      return css;
    }

    this.hoverCss = function() {
      if (this.data.type === 'background-color') {
        return '.preview:hover {\n    background-color: ' + this.data.afterColor + ' !important;\n}';
      }
      else if (this.data.type === 'height') {
        return '.preview:hover {\n    height: ' + this.data.height + 'px;\n}';
      }
      else if (this.data.type === 'opacity') {
        return '.preview:hover {\n    opacity: ' + this.data.opacity + ';\n}';
      }
      else if (this.data.type === 'outline') {
        return '.preview:hover {\n    outline: ' + this.data.outlineWidth
        + 'px ' + this.data.outlineStyle + ' ' + this.data.outlineColor + ';\n}';
      }
      else if (this.data.type === 'width') {
        return '.preview:hover {\n    width: ' + this.data.width + 'px;\n}';
      }
    }

    $rootScope.pageStyle = this.hoverCss();

    this.updatePageStyle = function () {
      $rootScope.pageStyle = this.hoverCss();
    }
  }]);
})();
