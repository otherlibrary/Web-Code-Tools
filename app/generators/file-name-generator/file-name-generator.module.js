(function () {
  'use strict';

  var fileNameGeneratorHome = angular.module('app.generators.fileName', []);

  fileNameGeneratorHome.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      // Aggregate Offer
      .state('file-name-generator.music', {
        url: '/music',
        templateUrl: 'generators/file-name-generator/music/music.template.html',
        title: 'Music File Name Generator',
        ncyBreadcrumb: {
          label: 'Music File Name'
        },
        metaTags: {
          title: 'Music File Name Generator',
          description: 'Generate regular and slug file names for your music for website URLs.'
        }
      });
  }]);
})();
