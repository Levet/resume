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
})