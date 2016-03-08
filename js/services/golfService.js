app.service("golfService", function(Firebase){
	this.getCourses = function(){
		return new Firebase("https://golftrack.firebaseio.com/courses");
	};
	this.getCourse = function(courseId) {
		return new Firebase("https://golftrack.firebaseio.com/courses/" + courseId)
	}
})