resume.controller('ModalController', function ($scope, $modalInstance, ContactsService){
	$scope.close = function (){
    	$modalInstance.close();
  	};

  	$scope.save = function (){
  		console.log('apple')
  		if($scope.phone || $scope.email){
	  		ContactsService.post({
	  			phone: $scope.phone,
	  			email: $scope.email,
	  			message: $scope.message
	  		}).then(function(response){
	  			if(response.data.status === 'success'){
	  				$scope.success = true;
	  				setTimeout(function(){
	  					$scope.close();
	  				}, 1000)
	  			} else {
	  				$scope.error = true;
	  				$scope.errMsg = "An error occured, please try again!";
	  			}
	  		})
	  	} else {
	  		$scope.error = true;
	  		$scope.errMsg = "I need a contact method if you want to speak with me!";
	  	}
  	}
})