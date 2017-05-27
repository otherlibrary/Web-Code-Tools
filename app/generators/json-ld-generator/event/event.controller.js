(function () {
  'use strict';

  angular.module('app.generators.jsonLd')
  .controller('JsonLdEventController', [function() {
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

    this.jsonLd = function() {
      var html = '<script type="application/ld+json">';
      
      html += '\n{\n  "@context": "http://schema.org/",';

      html += '\n  "@type": "Event",';
      html += '\n  "name": "' + this.data.eventName + '",';
      html += '\n  "description": "' + this.data.description + '",';
      html += '\n  "startDate": "' + this.data.startDate + '",';
      html += '\n  "endDate": "' + this.data.endDate + '",';

      html += '\n  "location": {';
      html += '\n    "@type": "Place",';
      html += '\n    "name": "' + this.data.locationName + '",';
      html += '\n    "address": {';
      html += '\n      "streetAddress": "' + this.data.street + '",';
      html += '\n      "addressLocality": "' + this.data.city + '",';
      html += '\n      "addressRegion": "' + this.data.region + '"';
      html += '\n    }'
      html += '\n  }';

      html += '\n}';

      html += '\n</script>';

      return html;
    }
  }]);
})();
