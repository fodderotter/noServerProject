app.controller("coursesCtrl", function($scope, golfService, $firebaseArray, coursesRef,$firebaseObject){
	$scope.courses = $firebaseArray(coursesRef);
	// $scope.course = $firebaseArray(courseRef);
	
	$scope.addCourse = function(){
		// var pic = $scope.coursePic
		console.log($scope.courses);
		$scope.courses.$add({
			courseName: $scope.courseName,
			coursePar: $scope.coursePar
		});
		$scope.courseName=null;
		$scope.coursePar=null;
	}
	$scope.deleteCourse = function(index){
		$scope.courses.$remove(index);
	}
})


			// hole1: 0,
			// hole2: 0,
			// hole3: 0,
			// hole4: 0,
			// hole5: 0,
			// hole6: 0,
			// hole7: 0,
			// hole8: 0,
			// hole9: 0,
			// hole10: 0,
			// hole11: 0,
			// hole12: 0,
			// hole13: 0,
			// hole14: 0,
			// hole15: 0,
			// hole16: 0,
			// hole17: 0,
			// hole18: 0


		// upload.base64DataUrl().then(function(base64Urls) {
  // 		$scope.courses.push({
  //           images : base64Urls,
  //       });
		// $scope.coursePic=null;