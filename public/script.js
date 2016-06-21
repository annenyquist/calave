// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
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
        .when('/examples', {
            templateUrl : 'pages/examples.html',
            controller  : 'examplesController'
        })
        .when('/writtenwork', {
            templateUrl : 'pages/writtenwork.html',
            controller  : 'writtenworkController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function($scope) {
});

scotchApp.controller('contactController', function($scope) {
});

scotchApp.controller('examplesController', function($scope) {
});

scotchApp.controller('writtenworkController', function($scope) {
});
