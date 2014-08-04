var uiRouter = angular.module("uiRouter", ['uiControllers', 'ui.bootstrap', 'ngRoute', 'ui.router']);

uiRouter.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise("/home");
  	$stateProvider
    	.state('home', {
      		url: "/home",
      		templateUrl: "partials/home",
      		controller: 'homeCtrl'
    	})
    	.state('home.list', {
      		url: "/list",
      		templateUrl: "partials/home-list",
      		controller: 'listCtrl'
    	})
    	.state('home.paragraph', {
      		url: "/paragraph",
      		templateUrl: "partials/home-paragraph",
      		controller: 'paraCtrl'
    	})
    	.state('about', {
      		url: "/about",
      		views: {
      			"": {
      				templateUrl: 'partials/about',
      				controller: 'aboutCtrl' 
      			},
      			"columnOne@about": {
      				templateUrl: "partials/about-columnOne",
      				controller: 'columnOneCtrl'
      			},
      			"columnTwo@about": {
      				templateUrl: "partials/about-columnTwo",
      				controller: 'columnTwoCtrl'
      			}
      		}
    	});
    
});