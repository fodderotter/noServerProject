var app = angular.module("golfApp", ["ui.router", "firebase", "ui.grid"]);
app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");
	$stateProvider
	.state("home", {
		templateUrl:"templates/home.html",
		url:"/",
		controller:"homeCtrl",
		// resolve:{
		// 	homeRef: function(golfService){
		// 		return golfService.
		// 	}
		// }
	})
	.state("courses", {
		templateUrl:"templates/courses.html",
		url:"/courses",
		controller:"coursesCtrl",
		resolve: {
			coursesRef: function(golfService) {
				return golfService.getCourses();
			}
		}
	})
	.state("course", {
		templateUrl:"templates/course.html",
		url:"/courses/:id",
		controller:"courseCtrl",
		resolve: {
			coursesRef: function(golfService) {
				return golfService.getCourses();
			},
			courseRef: function(golfService, $stateParams){
				return golfService.getCourse($stateParams.id);
			}
			
		}
	})
});