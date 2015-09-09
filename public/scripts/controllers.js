angular.module('reviewApp.controllers', [])
.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
	$scope.heading = "Apcera, Heroku, and Pusher";
	$scope.saveReview = function(Review){};
	//new review modal
	$scope.promptNew = function(Review) {
		var promise = modals.open(
			"prompt", {
				message: "Give me a title for your Review",
				placeholder: "Apcera was great because ..."
			}
			);
		promise.then(function handleResolve(response) {
			console.log('prompt submitted with [%s]', response);
		});
	};
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
	// $scope.createReview = function () {
	// 	Review.save($scope.newReview);
	// 	$scope.reviews.push($scope.newReview);
	// 	$scope.newReview = {};
	// }
}]);
// .controller('ModalCtrl', ['$scope', 'Review', 'modals', function($scope, Review, modals) {
// 	$scope.message = (modals.params().message || "Write a review");
// 	$scope.form = {
// 		input: (modals.params(placeholder || ""))
// 	};
// 	$scope.newReview = function () {
// 		Review.save($scope.newReview);
// 		$scope.reviews.push($scope.newReview);
// 		$scope.newReview = {};
// 	}
// }]);