(function(){
	'use strict';

	angular.module('resume').controller('ContactCtrl', function ($scope, $modal){
		$scope.contact = function(){
			var modalInstance = $modal.open({
				animation: true,
				templateUrl: '/js/App/Modal/Modal.html',
				controller: 'ModalController',
				size: 'md'
			});
		};
	});
}());