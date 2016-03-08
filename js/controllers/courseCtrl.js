app.controller("courseCtrl", function($scope,golfService,$firebaseArray,courseRef,$firebaseObject){
	$scope.course = $firebaseObject(courseRef);
	$scope.scorecard=$firebaseArray(courseRef.child("scores"));
	console.log("scope.scorecard: ", $scope.scorecard);
	$scope.scores=[];
	$scope.game={};
	
	$scope.keepScores=function(){
		for(var i = 0; i < $scope.scorecard.length; i++){
			$scope.scores.push({
				score: $scope.scorecard[i].totalScore,
				date: new Date($scope.scorecard[i].added).toLocaleString()
			})
		}
		console.log("scores:" ,$scope.scores);
	}

	$scope.keepScores();
	function getColor(){
		if($scope.sum > $scope.course.coursePar) {
			document.getElementById('gamescore').style.color = 'red';
		} else {
			document.getElementById('gamescore').style.color = 'green';
		}
	}
	$scope.sum=0;
	var counter = function(){
		$scope.sum=0;
		for(var key in $scope.game){
			$scope.sum += $scope.game[key];
			getColor();
		}
	}
	
	$scope.$watch(function(){
		var watchSum = 0;
		for(var key in $scope.game){
			watchSum += $scope.game[key];
		}
		return watchSum;
	}
	, function(){
		console.log($scope.sum);
		counter();
	}
	);

	$scope.saveScore = function(){
		$scope.game.added=new Date().getTime();
		$scope.game.totalScore=$scope.sum;
		$scope.scorecard.$add($scope.game);
		$scope.game={};
		$scope.sum=0;
		$scope.keepScores();
	}
})










	// $scope.scores=[{
	// 	score: $scope.game.totalScore,
	// 	date: $scope.scorecard.0.added
	// }];
// var total = $scope.holeNum1+$scope.holeNum2+$scope.holeNum3+$scope.holeNum4+$scope.holeNum5+$scope.holeNum6+$scope.holeNum7+$scope.holeNum8+$scope.holeNum9+$scope.holeNum10+$scope.holeNum11+$scope.holeNum12+$scope.holeNum13+$scope.holeNum14+$scope.holeNum15+$scope.holeNum16+$scope.holeNum17+$scope.holeNum18
	// $scope.sum = total;
	// $scope.newScore = $firebaseArray(courseRef.child('score'));
	// $scope.course.$update({
	// 	hole1: $scope.holeNum1
	// })
	// $scope.game = {
	// 	hole1: $scope.holeNum1,
	// 	hole2: $scope.holeNum2,
	// 	hole3: $scope.holeNum3,
	// 	hole4: $scope.holeNum4,
	// 	hole5: $scope.holeNum5,
	// 	hole6: $scope.holeNum6,
	// 	hole7: $scope.holeNum7,
	// 	hole8: $scope.holeNum8,
	// 	hole9: $scope.holeNum9,
	// 	hole10: $scope.holeNum10,
	// 	hole11: $scope.holeNum11,
	// 	hole12: $scope.holeNum12,
	// 	hole13: $scope.holeNum13,
	// 	hole14: $scope.holeNum14,
	// 	hole15: $scope.holeNum15,
	// 	hole16: $scope.holeNum16,
	// 	hole17: $scope.holeNum17,
	// 	hole18: $scope.holeNum18			
	// 	}