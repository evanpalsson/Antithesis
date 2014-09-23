/*jslint devel:false browser:true */
/*global angular:false */
(function (angular) {
	'use strict';

	var module = angular.module('ant-chart-candlestick', []);

	module.directive('candlestickChart', function () {
		return {
			restrict: 'E',
			templateUrl: 'app/directive/chart/candlestick.html',
			scope: {
				source: '='		// source of chart data
			}
		};
	});

}(angular));