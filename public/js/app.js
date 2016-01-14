var resume = angular.module('resume', [
    'ui.router',
    'ngAnimate',
    'ui.bootstrap'
]);


resume.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");

	$stateProvider
    .state('resume', {
        url: '/',
        templateUrl: '/js/App/Resume/Resume.html',
        controller: 'ResumeCtrl'
    })
    .state('charts', {
        url: '/charts',
        templateUrl: '/js/App/Charts/Charts.html',
        controller: 'ChartsController'
    })
    .state('samples', {
        url: '/samples',
        templateUrl: '/js/App/Samples/Samples.html',
        controller: 'SamplesController'
    }).state('projects', {
        url: '/projects',
        templateUrl: '/js/App/Projects/Projects.html',
    })
})