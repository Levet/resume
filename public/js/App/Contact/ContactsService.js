(function(){
	angular.module('resume').factory('ContactsService', ['$http', function($http){
		var ContactsService = {};

		ContactsService.post = function(data){
			return $http
			.post('/contact', data)
			.then(function(response){
				return response;
			});
		};

		return ContactsService;
	}]);
}());