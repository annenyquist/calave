// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var calaveApp = angular.module('calaveApp', ['ngRoute']);

// configure our routes
calaveApp.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/introduction.html',
            controller  : 'mainController'
        })

        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })
        .when('/design', {
            templateUrl : 'pages/design.html',
            controller  : 'designController'
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

calaveApp.controller('designController', function($scope) {
});

calaveApp.controller('researchController',
                     function($scope, $location, $anchorScroll) {
  angular.element(document).ready(function() {
    var fragmentIndex = $location.$$url.indexOf('#');
    if (fragmentIndex >= 0) {
      var fragment = $location.$$url.substring(fragmentIndex + 1);
      $location.hash(fragment);
    }
    $anchorScroll();
  });

   $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }
});

function show(icon) {
  var popupId = icon.parentNode.id.replace(/icon/i, 'popup');
  document.getElementById(popupId).style.display = 'block';
}

function hide(icon) {
  var popupId = icon.parentNode.id.replace(/icon/i, 'popup');
  document.getElementById(popupId).style.display = 'none';
}
