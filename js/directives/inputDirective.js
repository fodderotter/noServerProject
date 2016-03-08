app.directive("inputDirective", function() {
	return{
		restrict:"E",
		template:"<input placeholder='username' type='text' ng-model='username'> <input placeholder='password' type='password' ng-model='password'> <button type='submit' id='go' ng-click='login()'>go</button>"
	}
});