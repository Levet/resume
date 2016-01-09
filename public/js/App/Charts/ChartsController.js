(function(){
	'use strict';

	angular.module('resume').controller('ChartsController', ['$scope', 'ChartsService', function($scope, ChartsService){

		$scope.pieChartData = [55, 165, 99, 234, 35];
		$scope.lineChartData = [[{d: 0, c: 93.24}, {d: 10, c: 195.35}, {d: 20, c: 56}, {d: 30, c: 121}, {d: 40, c: Math.random()*200}, {d: 50, c: Math.random()*200}, {d: 60, c: Math.random()*200}, {d: 70, c: Math.random()*200}, {d: 80, c: Math.random()*200}, {d: 90, c: Math.random()*200 }, {d: 100, c: Math.random()*200}]];
		$scope.barChartData = [55, 165, 99, 234, 35];

		/*ChartsService.stocks()
		.then(function(response){
			$scope.lineChartData = response.data.dataset.data;
			console.log($scope.lineChartData)
		})*/
		
	}])

}())