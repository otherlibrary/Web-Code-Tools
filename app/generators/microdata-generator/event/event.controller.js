(function () {
  'use strict';

  angular.module('app.generators.microdata')
  .controller('MicrodataEventController', [function() {
    this.data = {
      eventName: '',
      description: '',
      startDate: '',
      endDate: '',
      locationName: '',
      street: '',
      city: '',
      region: ''
    };

    this.elementHtml = function() {
      var html = '<div itemscope itemtype="http://schema.org/Event">';

      html += '\n    <span itemprop="name">' + this.data.eventName + '</span><br>';
      html += '\n    <span itemprop="description">' + this.data.description + '</span><br>';
      html += '\n    When: <time itemprop="startDate" datetime="' + this.data.startDate + '"></time> - \n'
          + '    <time itemprop="endDate" datetime="' + this.data.endDate + '"></time><br>';

      html += '\n    <div itemprop="location" itemscope itemtype="http://schema.org/Place">';
      html += '\n        Where: <span itemprop="name">' + this.data.locationName + '</span><br>';

      html += '\n        <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">';
      html += '\n            <span itemprop="streetAddress">' + this.data.street + '</span><br>';
      html += '\n            <span itemprop="addressLocality">' + this.data.city + '</span><br>';
      html += '\n            <span itemprop="addressRegion">' + this.data.region + '</span> ';
      html += '\n        </div>';

      html += '\n    </div>';

      html += '\n</div>';

      return html;
    }
  }]);
})();
