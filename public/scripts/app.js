var app = angular.module('reviewApp',['ngRoute','ngResource', 'reviewApp.controllers', 'satellizer']).confing(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvder) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/templates/homePage.html',
		controller: 'MainCtrl'
	});
	$locationProvder.html5Mode({
		enabled:true
		requiredBase:false
	});
}]);
app.controller('MainCtrl', ['$scope', function($scope){
	$scope.heading = "Uber, LYft, and Public Transports";
	$scope.review = {};
	$scope.reviews = 'This is how I feel about Uber';
	$scope.saveReview = function(Review){};
}])	;
app.service('Review', ['$resource', function ($resource) {
	return $resource('/api/reviews/:id', {id: @_id}, {
		update: {
			method: 'PUT'
		}
	});
}]);