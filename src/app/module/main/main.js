/*jslint devel:false browser:true */
/*global angular:false */
(function (angular) {
	'use strict';

	var module = angular.module('ant-main', [
		'ant-chart-candlestick',
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
		$scope.chartData = {};
		
		oanda.getCandles('AUD_USD', 'D', 20).then(function (data) {
			$scope.chartData = data;
		});

	}]);
}(angular));