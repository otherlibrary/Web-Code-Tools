(function () {
  'use strict';

  angular.module('app.generators.microdata')
  .controller('MicrodataOrganizationController', [function() {
    this.data = {
      organizationName: '',
      street: '',
      city: '',
      region: '',
      postalCode: '',
      telephone: ''
    };

    this.elementHtml = function() {
      var html = '<div itemscope itemtype="http://schema.org/Organization">';

      html += '\n    <span itemprop="name">' + this.data.organizationName + '</span><br>';

      html += '\n    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">';
      html += '\n        <span itemprop="streetAddress">' + this.data.street + '</span><br>';
      html += '\n        <span itemprop="addressLocality">' + this.data.city + '</span><br>';
      html += '\n        <span itemprop="addressRegion">' + this.data.region + '</span> ';
      html += '\n        <span itemprop="postalCode">' + this.data.postalCode + '</span>';
      html += '\n    </div>';

      html += '\n    Phone: <span itemprop="telephone">' + this.data.telephone + '</span>';

      html += '\n</div>';

      return html;
    }
  }]);
})();
