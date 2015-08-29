angular.module('reviewApp',['ngRoute','ngResource', 'reviewApp.controllers'])
	.config(['$routeProvider', 
		function($routeProvider){
			when('/', {})
		}]);
