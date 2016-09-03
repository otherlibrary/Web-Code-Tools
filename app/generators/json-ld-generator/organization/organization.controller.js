(function () {
  'use strict';

  angular.module('app.generators.jsonLd')
  .controller('JsonLdOrganizationController', [function() {
    this.data = {
      organizationName: '',
      street: '',
      city: '',
      region: '',
      postalCode: '',
      telephone: ''
    };

    this.jsonLd = function() {
      var html = '{\n  "@context": "http://schema.org/",';

      html += '\n  "@type": "Organization",';
      html += '\n  "name": "' + this.data.organizationName + '",';
      
      html += '\n  "address": {';
      html += '\n    "@type": "PostalAddress",';
      html += '\n    "streetAddress": "' + this.data.street + '",';
      html += '\n    "addressLocality": "' + this.data.city + '",';
      html += '\n    "addressRegion": "' + this.data.region + '",';
      html += '\n    "postalCode": "' + this.data.postalCode + '"';
      html += '\n  },';
      
      html += '\n  "telephone": "' + this.data.telephone + '"';

      html += '\n}';

      return html;
    }
  }]);
})();
