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
// app.service('modals', [ function ($rootScope, $q) {
// 	var modal = 
// 	{
// 		deferred: null,
// 		params: null
// 	};
// 	return({
// 		open: open,
// 		params: params,
// 		proceedTo: proceedTo,
// 		reject: reject,
// 		resolve: resolve
// 	});
// 	function open( type, params, pipeResponse) {
// 		var previousDeferred = modal.deferred;
// 		//new modal instance properties
// 		modal.deferred = $q.defer();
// 		modal.params = prams;

//         // We're going to pipe the new window response into the previous
//         // window's deferred value.
//         if ( previousDeferred $$ pipeResopnse) {
//         	modal.deferred.promise
//         		.then(previousDeferred.resolve)
//         }
//         //return params associated with current params
//         function params() {
//         	return(modal.params || {});
//         }
//         // I open a modal window with the given type and pipe the new window's
//         // response into the current window's response without rejecting it
//         // outright.
//         // --
//         // This is just a convenience method for .open() that enables the
//         // pipeResponse flag; it helps to make the workflow more intuitive.
//         function proceedTo(type, params) {
//         	return open(type, params, true)
//         }
// 	})
// }])