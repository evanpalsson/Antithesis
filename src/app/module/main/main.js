/*jslint devel:false browser:true */
/*global angular:false */
(function (angular) {
	'use strict';

	var module = angular.module('ant-main', [
		'ngRoute'
	]);

	// register our basic routes
	module.config(['$routeProvider', function ($routeProvider) {
		// default route
		$routeProvider.when('/main', {
			templateUrl: 'app/module/main/main.html',
			controller: 'MainCtrl'
		});
	}]);

	// define the connect / sign in controller
	module.controller('MainCtrl', ['$scope', '$location', 'oanda', function ($scope, $location, oanda) {
	}]);
}(angular));