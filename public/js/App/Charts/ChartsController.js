(function(){
	'use strict';

	angular.module('resume').controller('ChartsController', ['$scope', 'ChartsService', function($scope, ChartsService){

		$scope.pieChartData = [55, 165, 99, 234, 35];
		$scope.barChartData = [55, 165, 99, 234, 35];
		
	}]);

}());