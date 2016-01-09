(function(){
	angular.module('resume').factory('ChartsService', ['$http', function($http){
		var ChartsService = {};

		ChartsService.stocks = function(){
			return $http
			.get('https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?start_date=2014-07-27&end_date=2015-07-27&column_index=4&api_key=bdLZ1oFvnTSoRyZAFd_K')
			.then(function(response){
				return response;
			})
		}

		return ChartsService;
	}])
}())