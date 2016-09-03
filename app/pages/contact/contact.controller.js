(function () {
  'use strict';

  angular.module('app.pages.contact')
  .controller('ContactController', ['$http', function($http) {
    var ctrl = this;

    ctrl.data = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    ctrl.processForm = function() {
      /*
      $http({
        method: 'POST',
        url: 'process.php',
        data: ctrl.data,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .then(function(data) {
        console.log(data);
        
        if (!data.success) {
          // if not successful, bind errors to error variables
          ctrl.errorName = data.errors.name;
          ctrl.errorSuperhero = data.errors.superheroAlias;
        } else {
          // if successful, bind success message to message
          ctrl.message = data.message;
        }
      });
      */

      $http.post('/postEmail', ctrl.data)
      .then(function(data, status, headers, config) {
        alert('submitted');
      });
    }
  }]);
})();
