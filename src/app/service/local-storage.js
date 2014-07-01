/*jslint devel:false browser:true */
/*global angular:false */
(function (angular) {
	'use strict';

	var module = angular.module('ant-local-storage', []);

	function supports_html5_storage(w) {
		try {
			return w.hasOwnProperty('localStorage') && w.localStorage !== null;
		} catch (e) {
			return false;
		}
	}

	module.factory('localStorage', ['$window', function ($window) {
		// is there local storage support?
		if (supports_html5_storage($window)) {
			return {
				supported: function () { return true; },
				get: function (key) {
					var d = $window.localStorage.getItem(key);
					return JSON.parse(d);
				},
				set: function (key, data) {
					$window.localStorage.setItem(key, JSON.stringify(data));
				},
				remove: function (key) {
					$window.localStorage.removeItem(key);
				},
				clearAll : function () {
					$window.localStorage.clear();
				}
			};
		}

		// not supported
		return {
			supported: function () { return false; },
			get: function (key) { return null; },
			set: function (key, data) {},
			remove: function (key) {},
			clearAll : function () {}
		};
	}]);
}(angular));