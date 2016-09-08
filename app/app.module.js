(function () {
  'use strict';

  // Root module.
  var app = angular.module('app',
    [
      'app.core',
      'app.generators',
      'app.pages'
    ]);

  // Configure the routes.
  app.config([
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    '$urlMatcherFactoryProvider',
    '$animateProvider',
    'AnalyticsProvider',
    'UIRouterMetatagsProvider',
    
    function(
      $locationProvider, 
      $stateProvider, 
      $urlRouterProvider, 
      $urlMatcherFactoryProvider, 
      $animateProvider, 
      AnalyticsProvider,
      UIRouterMetatagsProvider) {
        $locationProvider.html5Mode(true);

        // Set Google Analytics account.
        AnalyticsProvider.setAccount({
          tracker: 'UA-47682022-1',
          trackEvent: true
        });

        // If no state is found, go to 404 error page.
        $urlRouterProvider.otherwise(function($injector, $location){
          var state = $injector.get('$state');
          state.go('error-404');
          return $location.path();
        });

        // Disable strict mode so the URL works with or without a trailing slash.
        $urlMatcherFactoryProvider.strictMode(false);

        // Set the states.
        $stateProvider
          .state('dashboard', {
            url: '/',
            templateUrl: 'pages/dashboard/dashboard.template.html',
            title: 'Dashboard',
            ncyBreadcrumb: {
              label: 'Dashboard'
            },
            metaTags: {
              title: 'The Ultimate Website Code Generator',
              description: 'The ultimate web code generator. Generate HTML5, CSS3, Microdata, JSON-LD, Twitter Cards, Open Graph and more! No coding skills required.'
            }
          })
          .state('css-generator', {
            url: '/css-generator',
            templateUrl: 'generators/css-generator/css-generator.template.html',
            title: 'The Ultimate CSS Generator',
            ncyBreadcrumb: {
              label: 'CSS Generator'
            },
            metaTags: {
              title: 'The Ultimate CSS Generator',
              description: 'The ultimate CSS generator. Learn CSS3 with our generators and preview your results! And you don\'t even need CSS experience to start.'
            }
          })
          .state('html-generator', {
            url: '/html-generator',
            templateUrl: 'generators/html-generator/html-generator.template.html',
            title: 'The Ultimate HTML Generator',
            ncyBreadcrumb: {
              label: 'HTML Generator'
            },
            metaTags: {
              title: 'The Ultimate HTML Generator',
              description: 'The ultimate HTML generator. Learn HTML with our tools to preview various elements, tags, attributes and more. No HTML experience required. Get started now!'
            }
          })
          .state('microdata-generator', {
            url: '/microdata-generator',
            templateUrl: 'generators/microdata-generator/microdata-generator.template.html',
            title: 'The Ultimate Microdata Generator (Schema.org)',
            ncyBreadcrumb: {
              label: 'Microdata Generator'
            },
            metaTags: {
              title: 'The Ultimate Microdata Generator (Schema.org)',
              description: 'The ultimate Microdata (schema.org) generator. Structure your content using Microdata to help search engines process your pages to improve your website\'s SEO.'
            }
          })
          .state('json-ld-generator', {
            url: '/json-ld-generator',
            templateUrl: 'generators/json-ld-generator/json-ld-generator.template.html',
            title: 'The Ultimate JSON-LD Generator (Schema.org)',
            ncyBreadcrumb: {
              label: 'JSON-LD Generator'
            },
            metaTags: {
              title: 'The Ultimate JSON-LD Generator (Schema.org)',
              description: 'The ultimate JSON-LD (schema.org) generator. Provide a better browsing experience for your users with JSON-LD (Linked Data) and improve your website\'s SEO.'
            }
          })
          .state('meta-tags-generator', {
            url: '/meta-tags-generator',
            templateUrl: 'generators/meta-tags-generator/meta-tags-generator.template.html',
            title: 'Meta Tags Generator',
            ncyBreadcrumb: {
              label: 'Meta Tags Generator'
            },
            metaTags: {
              title: 'The Ultimate Meta Tags Generator',
              description: 'The ultimate Meta Tags generator. Generate the basic and only useful meta tags for your website. Take it further with Twitter Cards and Open Graph meta tags.'
            }
          })
          .state('open-graph-generator', {
            url: '/open-graph-generator',
            templateUrl: 'generators/open-graph-generator/open-graph-generator.template.html',
            title: 'The Ultimate Open Graph Generator',
            ncyBreadcrumb: {
              label: 'Open Graph Generator'
            },
            metaTags: {
              title: 'The Ultimate Open Graph Generator',
              description: 'The ultimate Open Graph generator. Attract more visitors to your website when it\'s shared on Facebook, Pinterest, LinkedIn and Google Plus. Get started now!'
            }
          })
          .state('twitter-card-generator', {
            url: '/twitter-card-generator',
            templateUrl: 'generators/twitter-card-generator/twitter-card-generator.template.html',
            title: 'The Ultimate Twitter Card Generator',
            ncyBreadcrumb: {
              label: 'Twitter Card Generator'
            },
            metaTags: {
              title: 'The Ultimate Twitter Card Generator',
              description: 'The ultimate Twitter Card generator. Drive more traffic to your website when it\'s shared on Twitter by attaching photos, videos and media to your Tweets.'
            }
          })
          .state('sitemap', {
            url: '/sitemap',
            templateUrl: 'pages/sitemap/sitemap.template.html',
            title: 'Sitemap',
            ncyBreadcrumb: {
              label: 'Sitemap'
            },
            metaTags: {
              title: 'Sitemap'
            }
          })
          .state('contact', {
            url: '/contact',
            templateUrl: 'pages/contact/contact.template.html',
            title: 'Contact',
            ncyBreadcrumb: {
              label: 'Contact'
            },
            metaTags: {
              title: 'Contact'
            }
          })
          .state('error-404', {
            templateUrl: 'pages/error/404.template.html',
            title: 'Page Not Found (404)',
            ncyBreadcrumb: {
              label: 'Page Not Found (404)'
            },
            metaTags: {
              title: 'Page Not Found (404)'
            }
          });

        UIRouterMetatagsProvider
          .setTitleSuffix(' | Web Code Tools')
          .setDefaultTitle('The Ultimate Website Code Generator')
          .setDefaultDescription('Test description');

        // Perform animations only on elements that successfully match the filter expression
        // to improve performance.
        $animateProvider.classNameFilter(/angular-animate/);
  }])
  
  .run(['$rootScope', 'MetaTags', function($rootScope, MetaTags) {
    $rootScope.MetaTags = MetaTags;
  }]);

  // Returns trusted HTML.
  // Source: http://stackoverflow.com/questions/15754515/how-to-render-html-with-angular-templates
  app.filter('rawHtml', ['$sce', function($sce){
    return function(val) {
      return $sce.trustAsHtml(val);
    };
  }]);
})();
