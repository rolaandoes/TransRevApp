angular.module('reviewApp.controllers', [])
.controller('MainCtrl', ['$scope', function($scope){
	$scope.heading = "Uber, LYft, and Public Transports";
	$scope.reviews = 'This is how I feel about Uber';
	$scope.saveReview = function(Review){
		if (!localStorage.reviews){
			localStorage.reviews = JSON.stringify([]);
		}
		//get existing from localStorage
		var allReviews = JSON.parse(localStorage.reviews);
		allReviews.push(review);
		localStorage.reviews = JSON.stringify(allReviews)
	};
}])	
.controller('ReviewsCtrl', ['$scope', function($scope){
	if (!localStorage.reviews){
		$scope.posts = [];
	} else {
		$scope.posts = JSON.parse(localStorage.reviews);
	}
}]);