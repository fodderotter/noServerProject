app.controller("homeCtrl", function($scope, golfService, $firebaseArray,$firebaseObject, $state){
	$scope.submit = function(){
		var ref = new Firebase("https://golftrack.firebaseio.com");
		ref.createUser({
			email:$scope.username,
			password:$scope.password
		}).then(function(response){
			alert("You may now log in");
		})
	}
	$scope.login = function(){
		var ref = new Firebase("https://golftrack.firebaseio.com");
		ref.authWithPassword({
  			email    : $scope.username,
  			password : $scope.password
		}, function(error, authData) {
  			if (error) {
    			alert("Login Failed!", error);
  			} else {
    			alert("Login successful");
    			$state.go("courses");
  			}
		})
	}
})