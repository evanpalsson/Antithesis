/*jslint devel:false browser:true */
/*global angular:false */
(function (angular) {
	'use strict';

	var module = angular.module('ant-connect', [
		'ngRoute'
	]);

	// register our basic routes
	module.config(['$routeProvider', function ($routeProvider) {
		// default route
		$routeProvider.when('/connect', {
			templateUrl: 'app/module/connect/connect.html',
			controller: 'ConnectCtrl'
		});
	}]);

	// define the connect / sign in controller
	module.controller('ConnectCtrl', ['$scope', function ($scope) {
		$scope.test = "Woot! AngularJS running.";
	}]);

}(angular));