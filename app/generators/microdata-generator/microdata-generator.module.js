(function () {
  'use strict';

  var microdataGeneratorHome = angular.module('app.generators.microdata', []);

  microdataGeneratorHome.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      // Aggregate Offer
      .state('microdata-generator.aggregate-offer', {
        url: '/aggregate-offer',
        templateUrl: 'generators/microdata-generator/aggregate-offer/aggregate-offer.template.html',
        title: 'Microdata Aggregate Offer Generator',
        ncyBreadcrumb: {
          label: 'Aggregate Offer'
        },
        metaTags: {
          title: 'Microdata Aggregate Offer Generator',
          description: 'Generate Microdata for an aggregate offer - a single product with multiple offers. Nest the generated metadata within your HTML to improve your website\'s SEO.'
        }
      })
      // Aggregate Rating
      .state('microdata-generator.aggregate-rating', {
        url: '/aggregate-rating',
        templateUrl: 'generators/microdata-generator/aggregate-rating/aggregate-rating.template.html',
        title: 'Microdata Aggregate Rating Generator',
        ncyBreadcrumb: {
          label: 'Aggregate Rating'
        },
        metaTags: {
          title: 'Microdata Aggregate Rating Generator',
          description: 'Generate Microdata for an aggregate rating - average rating based on many ratings. Nest the generated metadata within your HTML to enhance your website\'s SEO.'
        }
      })
      // Article
      .state('microdata-generator.article', {
        url: '/article',
        templateUrl: 'generators/microdata-generator/article/article.template.html',
        title: 'Microdata Article Generator',
        ncyBreadcrumb: {
          label: 'Article'
        },
        metaTags: {
          title: 'Microdata Article Generator',
          description: 'Generate Microdata for an article, such as a news article or blog post. Copy the generated metadata into your HTML to boost your website\'s SEO.'
        }
      })
      // Event Information
      .state('microdata-generator.event', {
        url: '/event',
        templateUrl: 'generators/microdata-generator/event/event.template.html',
        title: 'Microdata Event Generator',
        ncyBreadcrumb: {
          label: 'Event'
        },
        metaTags: {
          title: 'Microdata Event Generator',
          description: 'Generate Microdata for an event, such as a concert or festival. Copy the generated metadata into your HTML to improve your website\'s SEO.'
        }
      })
      // Music Album
      .state('microdata-generator.music-album', {
        url: '/music-album',
        templateUrl: 'generators/microdata-generator/music-album/music-album.template.html',
        title: 'Microdata Music Album Generator',
        ncyBreadcrumb: {
          label: 'Music Album'
        },
        metaTags: {
          title: 'Microdata Music Album Generator',
          description: 'Generate Microdata for a music album - a group of music tracks. Nest the generated metadata within your HTML to enhance your website\'s SEO.'
        }
      })
      // Music Playlist
      .state('microdata-generator.music-playlist', {
        url: '/music-playlist',
        templateUrl: 'generators/microdata-generator/music-playlist/music-playlist.template.html',
        title: 'Microdata Music Playlist Generator',
        ncyBreadcrumb: {
          label: 'Music Playlist'
        },
        metaTags: {
          title: 'Microdata Music Playlist Generator',
          description: 'Generate Microdata for a music playlist - a group of music tracks in a playlist form. Nest the generated metadata in your HTML to improve your website\'s SEO.'
        }
      })
      // Organization
      .state('microdata-generator.organization', {
        url: '/organization',
        templateUrl: 'generators/microdata-generator/organization/organization.template.html',
        title: 'Microdata Organization Generator',
        ncyBreadcrumb: {
          label: 'Organization'
        },
        metaTags: {
          title: 'Microdata Organization Generator',
          description: 'Generate Microdata for an organization, such as a school, club or business. Copy the generated metadata within your HTML to improve your website\'s SEO.'
        }
      })
      // Person
      .state('microdata-generator.person', {
        url: '/person',
        templateUrl: 'generators/microdata-generator/person/person.template.html',
        title: 'Microdata Person Generator',
        ncyBreadcrumb: {
          label: 'Person'
        },
        metaTags: {
          title: 'Microdata Person Generator',
          description: 'Generate Microdata for a person - yourself, alive, dead or fictional. Insert the generated metadata within your HTML to boost your website\'s SEO.'
        }
      })
      // Product Offer
      .state('microdata-generator.product-offer', {
        url: '/product-offer',
        templateUrl: 'generators/microdata-generator/product-offer/product-offer.template.html',
        title: 'Microdata Product Offer Generator',
        ncyBreadcrumb: {
          label: 'Product Offer'
        },
        metaTags: {
          title: 'Microdata Product Offer Generator',
          description: 'Generate Microdata for any type of product offer, from a spa day to a car rental. Nest the generated metadata within your HTML to boost your website\'s SEO.'
        }
      })
      // Recipe Information
      .state('microdata-generator.recipe', {
        url: '/recipe',
        templateUrl: 'generators/microdata-generator/recipe/recipe.template.html',
        title: 'Microdata Recipe Generator',
        ncyBreadcrumb: {
          label: 'Recipe'
        },
        metaTags: {
          title: 'Microdata Recipe Generator',
          description: 'Generate Microdata for a recipe. Include a photo, prep and cook time, calories and more. Nest the metadata within your HTML to improve your website\'s SEO.'
        }
      })
      // Restaurant
      .state('microdata-generator.restaurant', {
        url: '/restaurant',
        templateUrl: 'generators/microdata-generator/restaurant/restaurant.template.html',
        title: 'Microdata Restaurant Generator',
        ncyBreadcrumb: {
          label: 'Restaurant'
        },
        metaTags: {
          title: 'Microdata Restaurant Generator',
          description: 'Generate Microdata for a restaurant. Include a menu, type of cuisine, address and more. Nest the metadata within your HTML to improve your website\'s SEO.'
        }
      })
      // Review
      .state('microdata-generator.review', {
        url: '/review',
        templateUrl: 'generators/microdata-generator/review/review.template.html',
        title: 'Microdata Review Generator',
        ncyBreadcrumb: {
          label: 'Review'
        },
        metaTags: {
          title: 'Microdata Review Generator',
          description: 'Generate Microdata for a review, such as the review of a movie, item, book or restaurant. Nest the metadata within your HTML to improve your website\'s SEO.'
        }
      })
      // Software Application
      .state('microdata-generator.software-application', {
        url: '/software-application',
        templateUrl: 'generators/microdata-generator/software-application/software-application.template.html',
        title: 'Microdata Software Application Generator',
        ncyBreadcrumb: {
          label: 'Software Application'
        },
        metaTags: {
          title: 'Microdata Software Application Generator',
          description: 'Generate Microdata for a software application. Include the category, OS, rating and more. Nest the metadata within your HTML to enhance your website\'s SEO.'
        }
      })
      // Video Information
      .state('microdata-generator.video', {
        url: '/video',
        templateUrl: 'generators/microdata-generator/video/video.template.html',
        title: 'Microdata Video Generator',
        ncyBreadcrumb: {
          label: 'Video'
        },
        metaTags: {
          title: 'Microdata Video Generator',
          description: 'Generate Microdata for a video file. Copy the metadata into your HTML to improve your website\'s SEO.'
        }
      });
  }]);
})();
