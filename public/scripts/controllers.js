var app = angular.module('reviewApp.controllers', []);
app.controller('MainCtrl', ['$scope', function($scope){
	$scope.heading = "Uber, LYft, and Public Transports";
	$scope.reviews = 'This is how I feel about Uber';
	$scope.saveReview = function(Review){};
}])	
.controller('LoginCtrl', function($scope, $auth) {
	$scope.authenticate = function(provider) {
		$auth.authenticate(provider);
	};
});
// .controller('HomePageCtrl', ['$scope', function($scope){
// 	if (!localStorage.reviews){
// 		$scope.posts = [];
// 	} else {
// 		$scope.posts = JSON.parse(localStorage.reviews);
// 	}
// }]);
// .controller('ReviewsCtrl', ['$scope', 'Review', function($scope, Review){
// 	$scope.title = 'this is working';
// 	$scope.reviews = Review.query();
// }]);