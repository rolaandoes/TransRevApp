var app = angular.module('reviewApp',['ngRoute','ngResource', 'reviewApp.controllers'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/review-index.html',
		controller: 'ReviewIndexCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
	$locationProvider.html5Mode({
		enabled:true,
		requiredBase:false
	});
}]);
// app.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
// 	$scope.heading = "Uber, LYft, and Public Transports";
// 	$scope.reviews = 'This is how I feel about Uber';
// 	$http.get('')
// 	$scope.saveReview = function(Review){};
// }])	
// .controller('LoginCtrl', function($scope, $auth) {
// 	$scope.authenticate = function(provider) {
// 		$auth.authenticate(provider);
// 	};
// });
app.service('Review', ['$resource', function ($resource) {
	return $resource('/api/reviews/:id', {id: '@_id'}, 
	{
		update: {
			method: 'PUT'
		}
	});
}]);