(function () {
  'use strict';

  var jsonLdGeneratorHome = angular.module('app.generators.jsonLd', []);

  jsonLdGeneratorHome.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      // Aggregate Offer
      .state('json-ld-generator.aggregate-offer', {
        url: '/aggregate-offer',
        templateUrl: 'generators/json-ld-generator/aggregate-offer/aggregate-offer.template.html',
        title: 'JSON-LD Aggregate Offer Generator',
        description: 'Generate JSON-LD for an aggregate offer - a single product with multiple offers. Insert the generated JSON into your HTML to improve your website\'s SEO.',
        ncyBreadcrumb: {
          label: 'Aggregate Offer'
        }
      })
      // Aggregate Rating
      .state('json-ld-generator.aggregate-rating', {
        url: '/aggregate-rating',
        templateUrl: 'generators/json-ld-generator/aggregate-rating/aggregate-rating.template.html',
        title: 'JSON-LD Aggregate Rating Generator',
        description: 'Generate JSON-LD for an aggregate rating - average rating based on many ratings. Insert the generated JSON into your HTML to enhance your website\'s SEO.',
        ncyBreadcrumb: {
          label: 'Aggregate Rating'
        }
      })
      // Article
      .state('json-ld-generator.article', {
        url: '/article',
        templateUrl: 'generators/json-ld-generator/article/article.template.html',
        title: 'JSON-LD Article Generator',
        description: 'Generate JSON-LD for an article, such as a news article or blog post. Copy the generated JSON into your HTML to boost your website\'s SEO.',
        ncyBreadcrumb: {
          label: 'Article'
        }
      })
      // Event Information
      .state('json-ld-generator.event', {
        url: '/event',
        templateUrl: 'generators/json-ld-generator/event/event.template.html',
        title: 'JSON-LD Event Generator',
        description: 'Generate JSON-LD for an event, such as a concert or festival. Copy the generated JSON into your HTML to improve your website\'s SEO.',
        ncyBreadcrumb: {
          label: 'Event'
        }
      })
      // Music Album
      .state('json-ld-generator.music-album', {
        url: '/music-album',
        templateUrl: 'generators/json-ld-generator/music-album/music-album.template.html',
        title: 'JSON-LD Music Album Generator',
        description: 'Generate JSON-LD for a music album - a group of music tracks. Insert the generated JSON into your HTML to enhance your website\'s SEO.',
        ncyBreadcrumb: {
          label: 'Music Album'
        }
      })
      // Music Playlist
      .state('json-ld-generator.music-playlist', {
        url: '/music-playlist',
        templateUrl: 'generators/json-ld-generator/music-playlist/music-playlist.template.html',
        title: 'JSON-LD Music Playlist Generator',
        description: 'Generate JSON-LD for a music playlist - a group of music tracks in a playlist form. Insert the generated JSON in your HTML to improve your website\'s SEO.',
        ncyBreadcrumb: {
          label: 'Music Playlist'
        }
      })
      // Organization
      .state('json-ld-generator.organization', {
        url: '/organization',
        templateUrl: 'generators/json-ld-generator/organization/organization.template.html',
        title: 'JSON-LD Organization Generator',
        description: 'Generate JSON-LD for an organization, such as a school, club or business. Copy the generated JSON into your HTML to improve your website\'s SEO.',
        ncyBreadcrumb: {
          label: 'Organization'
        }
      })
      // Person
      .state('json-ld-generator.person', {
        url: '/person',
        templateUrl: 'generators/json-ld-generator/person/person.template.html',
        title: 'JSON-LD Person Generator',
        description: 'Generate JSON-LD for a person - yourself, alive, dead or fictional. Insert the generated JSON within your HTML to boost your website\'s SEO.',
        ncyBreadcrumb: {
          label: 'Person'
        }
      })
      // Product Offer
      .state('json-ld-generator.product-offer', {
        url: '/product-offer',
        templateUrl: 'generators/json-ld-generator/product-offer/product-offer.template.html',
        title: 'JSON-LD Product Offer Generator',
        description: 'Generate JSON-LD for any type of product offer, from a spa day to a car rental. Insert the generated JSON into your HTML to boost your website\'s SEO.',
        ncyBreadcrumb: {
          label: 'Product Offer'
        }
      })
      // Recipe Information
      .state('json-ld-generator.recipe', {
        url: '/recipe',
        templateUrl: 'generators/json-ld-generator/recipe/recipe.template.html',
        title: 'JSON-LD Recipe Generator',
        description: 'Generate JSON-LD for a recipe. Include a photo, prep and cook time, calories and more. Insert the JSON into your HTML to improve your website\'s SEO.',
        ncyBreadcrumb: {
          label: 'Recipe'
        }
      })
      // Restaurant
      .state('json-ld-generator.restaurant', {
        url: '/restaurant',
        templateUrl: 'generators/json-ld-generator/restaurant/restaurant.template.html',
        title: 'JSON-LD Restaurant Generator',
        description: 'Generate JSON-LD for a restaurant. Include a menu, type of cuisine, address and more. Insert the JSON into your HTML to improve your website\'s SEO.',
        ncyBreadcrumb: {
          label: 'Restaurant'
        }
      })
      // Review
      .state('json-ld-generator.review', {
        url: '/review',
        templateUrl: 'generators/json-ld-generator/review/review.template.html',
        title: 'JSON-LD Review Generator',
        description: 'Generate JSON-LD for a review, such as the review of a movie, item, book or restaurant. Copy the JSON within your HTML to improve your website\'s SEO.',
        ncyBreadcrumb: {
          label: 'Review'
        }
      })
      // Software Application
      .state('json-ld-generator.software-application', {
        url: '/software-application',
        templateUrl: 'generators/json-ld-generator/software-application/software-application.template.html',
        title: 'JSON-LD Software Application Generator',
        description: 'Generate JSON-LD for a software application. Include the category, OS, rating and more. Insert the JSON within your HTML to enhance your website\'s SEO.',
        ncyBreadcrumb: {
          label: 'Software Application'
        }
      })
      // Video Information
      .state('json-ld-generator.video', {
        url: '/video',
        templateUrl: 'generators/json-ld-generator/video/video.template.html',
        title: 'JSON-LD Video Generator',
        description: 'Generate JSON-LD for a video file. Copy the JSON into your HTML to improve your website\'s SEO.',
        ncyBreadcrumb: {
          label: 'Video'
        }
      });
  }]);
})();
