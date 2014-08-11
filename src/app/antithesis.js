/*
** Antithesis - https://github.com/AshleyRoll/Antithesis
*/

/*jslint devel:false browser:true */
/*global angular:false */
(function (angular) {
	'use strict';

	var module = angular.module('antithesisApp', [
		'ngRoute',
		'ant-connect',
		'ant-main',
		'ant-oanda'
	]);

	// register our basic routes
	module.config(['$routeProvider', function ($routeProvider) {
		// default route
		$routeProvider.otherwise({
			redirectTo: '/connect'
		});
	}]);

}(angular));