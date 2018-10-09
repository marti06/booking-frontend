(function() {

  'use strict';

  angular
    .module('booking')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        redirectTo: '/explore'
      })
      .when('/explore', {
        templateUrl: 'static/partials/explore.html',
        //controller: 'indexController',
        requireAuthentication: false,
        titlePage: 'Booking Index Page'
      })
      .when('/unplanned', {
          templateUrl: 'static/partials/unplanned/unplanned.html',
          //controller: 'UnplannedController',
          requireAuthentication: false,
          titlePage: 'Booking Index Page'
      })
      .otherwise({
        templateUrl: '/partials/page404/page404.html',
        requireAuthentication: false,
        titlePage: 'Page Not Found'
      });
  }

})();