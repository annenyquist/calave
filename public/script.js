// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var calaveApp = angular.module('calaveApp', ['ngRoute']);

// configure our routes
calaveApp.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })
        .when('/concepts', {
            templateUrl : 'pages/concepts.html',
            controller  : 'conceptsController'
        })
        .when('/research', {
            templateUrl : 'pages/research.html',
            controller  : 'researchController'
        });

        $locationProvider.html5Mode(true);

});

// create the controller and inject Angular's $scope
calaveApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

calaveApp.controller('aboutController', function($scope) {
});

calaveApp.controller('contactController', function($scope) {
});

calaveApp.controller('conceptsController', function($scope) {
});

calaveApp.controller('researchController',
                     function($scope, $location, $anchorScroll) {
  angular.element(document).ready(function() {
    var fragmentIndex = $location.$$url.indexOf("#");
    if (fragmentIndex >= 0) {
      var fragment = $location.$$url.substring(fragmentIndex + 1)
      $location.hash(fragment);
    }
    $anchorScroll();
  });

   $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }
});
