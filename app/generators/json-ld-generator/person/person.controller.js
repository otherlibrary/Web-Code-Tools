(function () {
  'use strict';

  angular.module('app.generators.jsonLd')
  .controller('JsonLdPersonController', [function() {
    this.data = {
      name: '',
      job: '',
      city: '',
      region: ''
    };

    this.jsonLd = function() {
      var html = '<script type="application/ld+json">';
      
      html += '\n{\n  "@context": "http://schema.org/",';

      html += '\n  "@type": "Person",';
      html += '\n  "name": "' + this.data.name + '",';
      html += '\n  "jobTitle": "' + this.data.job + '",';
      
      html += '\n  "address": {';
      html += '\n    "@type": "PostalAddress",';
      html += '\n    "addressLocality": "' + this.data.city + '",';
      html += '\n    "addressRegion": "' + this.data.region + '"';
      html += '\n  }'

      html += '\n}';

      html += '\n</script>';

      return html;
    }
  }]);
})();
