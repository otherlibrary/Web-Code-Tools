(function () {
  'use strict';

  var openGraphGenerator = angular.module('app.generators.openGraph', []);

  openGraphGenerator.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      // Article
      .state('open-graph-generator.article', {
        url: '/article',
        templateUrl: 'generators/open-graph-generator/article/article.template.html',
        title: 'Open Graph Article Generator',
        ncyBreadcrumb: {
          label: 'Article'
        },
        metaTags: {
          title: 'Open Graph Article Generator'
        }
      })
      // Book
      .state('open-graph-generator.book', {
        url: '/book',
        templateUrl: 'generators/open-graph-generator/book/book.template.html',
        title: 'Open Graph Book Generator',
        ncyBreadcrumb: {
          label: 'Book'
        },
        metaTags: {
          title: 'Open Graph Book Generator'
        }
      })
      // Book Author
      .state('open-graph-generator.book-author', {
        url: '/book-author',
        templateUrl: 'generators/open-graph-generator/book-author/book-author.template.html',
        title: 'Open Graph Book Author Generator',
        ncyBreadcrumb: {
          label: 'Book Author'
        },
        metaTags: {
          title: 'Open Graph Book Author Generator'
        }
      })
      // Book Genre
      .state('open-graph-generator.book-genre', {
        url: '/book-genre',
        templateUrl: 'generators/open-graph-generator/book-genre/book-genre.template.html',
        title: 'Open Graph Book Genre Generator',
        ncyBreadcrumb: {
          label: 'Book Genre'
        },
        metaTags: {
          title: 'Open Graph Book Genre Generator'
        }
      })
      // Business
      .state('open-graph-generator.business', {
        url: '/business',
        templateUrl: 'generators/open-graph-generator/business/business.template.html',
        title: 'Open Graph Business Generator',
        ncyBreadcrumb: {
          label: 'Business'
        },
        metaTags: {
          title: 'Open Graph Business Generator'
        }
      })
      // Fitness Course
      .state('open-graph-generator.fitness-course', {
        url: '/fitness-course',
        templateUrl: 'generators/open-graph-generator/fitness-course/fitness-course.template.html',
        title: 'Open Graph Fitness Course Generator',
        ncyBreadcrumb: {
          label: 'Fitness Course'
        },
        metaTags: {
          title: 'Open Graph Fitness Course Generator'
        }
      })
      // Game Achievement
      .state('open-graph-generator.game-achievement', {
        url: '/game-achievement',
        templateUrl: 'generators/open-graph-generator/game-achievement/game-achievement.template.html',
        title: 'Open Graph Game Achievement Generator',
        ncyBreadcrumb: {
          label: 'Game Achievement'
        },
        metaTags: {
          title: 'Open Graph Game Achievement Generator'
        }
      })
      // Music Album
      .state('open-graph-generator.music-album', {
        url: '/music-album',
        templateUrl: 'generators/open-graph-generator/music-album/music-album.template.html',
        title: 'Open Graph Music Album Generator',
        ncyBreadcrumb: {
          label: 'Music Album'
        },
        metaTags: {
          title: 'Open Graph Music Album Generator'
        }
      })
      // Music Playlist
      .state('open-graph-generator.music-playlist', {
        url: '/music-playlist',
        templateUrl: 'generators/open-graph-generator/music-playlist/music-playlist.template.html',
        title: 'Open Graph Music Playlist Generator',
        ncyBreadcrumb: {
          label: 'Music Playlist'
        },
        metaTags: {
          title: 'Open Graph Music Playlist Generator'
        }
      })
      // Music Radio Station
      .state('open-graph-generator.music-radio-station', {
        url: '/music-radio-station',
        templateUrl: 'generators/open-graph-generator/music-radio-station/music-radio-station.template.html',
        title: 'Open Graph Music Radio Station Generator',
        ncyBreadcrumb: {
          label: 'Music Radio Station'
        },
        metaTags: {
          title: 'Open Graph Music Radio Station Generator'
        }
      })
      // Music Song
      .state('open-graph-generator.music-song', {
        url: '/music-song',
        templateUrl: 'generators/open-graph-generator/music-song/music-song.template.html',
        title: 'Open Graph Music Song Generator',
        ncyBreadcrumb: {
          label: 'Music Song'
        },
        metaTags: {
          title: 'Open Graph Music Song Generator'
        }
      })
      // Place
      .state('open-graph-generator.place', {
        url: '/place',
        templateUrl: 'generators/open-graph-generator/place/place.template.html',
        title: 'Open Graph Place Generator',
        ncyBreadcrumb: {
          label: 'Place'
        },
        metaTags: {
          title: 'Open Graph Place Generator'
        }
      })
      // Product
      .state('open-graph-generator.product', {
        url: '/product',
        templateUrl: 'generators/open-graph-generator/product/product.template.html',
        title: 'Open Graph Product Generator',
        ncyBreadcrumb: {
          label: 'Product'
        },
        metaTags: {
          title: 'Open Graph Product Generator'
        }
      })
      // Product Group
      .state('open-graph-generator.product-group', {
        url: '/product-group',
        templateUrl: 'generators/open-graph-generator/product-group/product-group.template.html',
        title: 'Open Graph Product Group Generator',
        ncyBreadcrumb: {
          label: 'Product Group'
        },
        metaTags: {
          title: 'Open Graph Product Group Generator'
        }
      })
      // Product Item
      .state('open-graph-generator.product-item', {
        url: '/product-item',
        templateUrl: 'generators/open-graph-generator/product-item/product-item.template.html',
        title: 'Open Graph Product Item Generator',
        ncyBreadcrumb: {
          label: 'Product Item'
        },
        metaTags: {
          title: 'Open Graph Product Item Generator'
        }
      })
      // Profile
      .state('open-graph-generator.profile', {
        url: '/profile',
        templateUrl: 'generators/open-graph-generator/profile/profile.template.html',
        title: 'Open Graph Profile Generator',
        ncyBreadcrumb: {
          label: 'Profile'
        },
        metaTags: {
          title: 'Open Graph Profile Generator'
        }
      })
      // Restaurant
      .state('open-graph-generator.restaurant', {
        url: '/restaurant',
        templateUrl: 'generators/open-graph-generator/restaurant/restaurant.template.html',
        title: 'Open Graph Restaurant Generator',
        ncyBreadcrumb: {
          label: 'Restaurant'
        },
        metaTags: {
          title: 'Open Graph Restaurant Generator'
        }
      })
      // Restaurant Menu
      .state('open-graph-generator.restaurant-menu', {
        url: '/restaurant-menu',
        templateUrl: 'generators/open-graph-generator/restaurant-menu/restaurant-menu.template.html',
        title: 'Open Graph Restaurant Menu Generator',
        ncyBreadcrumb: {
          label: 'Restaurant Menu'
        },
        metaTags: {
          title: 'Open Graph Restaurant Menu Generator'
        }
      })
      // Restaurant Menu Item
      .state('open-graph-generator.restaurant-menu-item', {
        url: '/restaurant-menu-item',
        templateUrl: 'generators/open-graph-generator/restaurant-menu-item/restaurant-menu-item.template.html',
        title: 'Open Graph Restaurant Menu Item Generator',
        ncyBreadcrumb: {
          label: 'Restaurant Menu Item'
        },
        metaTags: {
          title: 'Open Graph Restaurant Menu Item Generator'
        }
      })
      // Restaurant Menu Section
      .state('open-graph-generator.restaurant-menu-section', {
        url: '/restaurant-menu-section',
        templateUrl: 'generators/open-graph-generator/restaurant-menu-section/restaurant-menu-section.template.html',
        title: 'Open Graph Restaurant Menu Section Generator',
        ncyBreadcrumb: {
          label: 'Restaurant Menu Section'
        },
        metaTags: {
          title: 'Open Graph Restaurant Menu Section Generator'
        }
      })
      // Video (Generic)
      .state('open-graph-generator.video-other', {
        url: '/video',
        templateUrl: 'generators/open-graph-generator/video/video.template.html',
        title: 'Open Graph Video (Generic) Generator',
        ncyBreadcrumb: {
          label: 'Video (Generic)'
        },
        metaTags: {
          title: 'Open Graph Video (Generic) Generator'
        }
      })
      // Video Episode
      .state('open-graph-generator.video-episode', {
        url: '/video-episode',
        templateUrl: 'generators/open-graph-generator/video-episode/video-episode.template.html',
        title: 'Open Graph Video Episode Generator',
        ncyBreadcrumb: {
          label: 'Video Episode'
        },
        metaTags: {
          title: 'Open Graph Video Episode Generator'
        }
      })
      // Video Movie
      .state('open-graph-generator.video-movie', {
        url: '/video-movie',
        templateUrl: 'generators/open-graph-generator/video-movie/video-movie.template.html',
        title: 'Open Graph Video Movie Generator',
        ncyBreadcrumb: {
          label: 'Video Movie'
        },
        metaTags: {
          title: 'Open Graph Video Movie Generator'
        }
      })
      // Video TV Show
      .state('open-graph-generator.video-tv-show', {
        url: '/video-tv-show',
        templateUrl: 'generators/open-graph-generator/video-tv-show/video-tv-show.template.html',
        title: 'Open Graph Video TV Show Generator',
        ncyBreadcrumb: {
          label: 'Video TV Show'
        },
        metaTags: {
          title: 'Open Graph Video TV Show Generator'
        }
      });
  }]);
})();
