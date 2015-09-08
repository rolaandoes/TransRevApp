angular.module('reviewApp.controllers', [])
.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
	$scope.heading = "Apcera, Heroku, and Pusher";
	$scope.reviews = 'This is how I feel about Uber';
	$scope.saveReview = function(Review){};
}])	
.controller('LoginCtrl', function($scope, $auth) {
	$scope.authenticate = function(provider) {
		$auth.authenticate(provider);
	};
})
// .controller('HomePageCtrl', ['$scope', function($scope){
// 	if (!localStorage.reviews){
// 		$scope.posts = [];
// 	} else {
// 		$scope.posts = JSON.parse(localStorage.reviews);
// 	}
// }]);
.controller('ReviewIndexCtrl', ['$scope', 'Review', function($scope, Review){
	$scope.title = 'this is working';
	$scope.reviews = Review.query();
}]);