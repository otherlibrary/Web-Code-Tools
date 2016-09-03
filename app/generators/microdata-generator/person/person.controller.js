(function () {
  'use strict';

  angular.module('app.generators.microdata')
  .controller('MicrodataPersonController', [function() {
    this.data = {
      name: '',
      job: '',
      city: '',
      region: ''
    };

    this.elementHtml = function() {
      var html = '<div itemscope itemtype="http://schema.org/Person">';

      html += '\n    My name is <span itemprop="name">' + this.data.name + '</span> ';
      html += '\n    <span itemprop="jobTitle">(' + this.data.job + ')</span><br>';

      html += '\n    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">';
      html += '\n        I live in <span itemprop="addressLocality">' + this.data.city + '</span>, ';
      html += '\n        <span itemprop="addressRegion">' + this.data.region + '</span> ';
      html += '\n    </div>';

      html += '\n</div>';

      return html;
    }
  }]);
})();
