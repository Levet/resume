resume.controller('ContactCtrl', function ($scope, $modal){
	$scope.contact = function(){
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: '/partials/modal.html',
			controller: 'ModalCtrl',
			size: 'md'
		})
	}
})