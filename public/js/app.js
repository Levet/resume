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
        templateUrl: '/partials/resume.html',
        controller: 'ResumeCtrl'
    })
    .state('charts', {
        url: '/charts',
        templateUrl: '/js/App/Charts/charts.html',
        controller: 'ChartsController'
    })
    .state('samples', {
        url: '/samples',
        templateUrl: '/js/App/Samples/samples.html',
        controller: 'SamplesController'
    })
})