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
	module.controller('ConnectCtrl', ['$scope', 'oanda', function ($scope, oanda) {
		$scope.message = '';
		$scope.error = '';

		$scope.accounts = null;
		// fetch persisted mode / api key if available
		$scope.accountMode = oanda.getMode();
		$scope.apiKey = oanda.getApiKey();

		$scope.connect = function () {
			$scope.message = 'connecting...';
			$scope.error = '';

			// fetch the accounts data 
			oanda.fetchAccounts($scope.accountMode, $scope.apiKey).then(function (accounts) {
				$scope.accounts = accounts;
			}, function (reason) {
				$scope.error = reason;
			})['finally'](function () {
				$scope.message = '';
			});
		};

		$scope.isLive = function () {
			return $scope.accountMode.toLowerCase() === 'live';
		};

		$scope.isPractice = function () {
			return !$scope.isLive();
		};

		$scope.setLive = function () {
			$scope.accountMode = 'Live';
		};

		$scope.setPractice = function () {
			$scope.accountMode = 'Practice';
		};
	}]);

}(angular));