/*jslint devel:false browser:true */
/*global angular:false */
(function (angular) {
	'use strict';

	var module = angular.module('ant-oanda', [
		'ant-local-storage'
	]),
		config = {		// raw settings used in this module
			live: {
				name: 'Live',
				api: 'https://api-fxtrade.oanda.com',
				stream: 'https://stream-fxtrade.oanda.com'
			},
			practice: {
				name: 'Practice',
				api: 'https://api-fxpractice.oanda.com',
				stream: 'https://stream-fxpractice.oanda.com'
			}
		};

	// The oanda factory generates our interface to the OANDA web services
	// http://developer.oanda.com/docs/
	module.factory('oanda', ['$http', '$q', 'localStorage', function ($http, $q, localStorage) {
		var apiKey = '',
			mode = null,
			account = null,
			t;

		function setMode(newMode) {
			if (newMode !== null && newMode.toLowerCase() === 'live') {
				mode = config.live;
			} else {
				mode = config.practice;
			}
		}

		// configure defaults from storage
		t = localStorage.get('TradingAccount');
		if (t !== null) {
			setMode(t.mode);
			apiKey = t.apiKey;
		} else {
			setMode('Practice');
		}

		function httpGet(relativeUrl) {
			return $http.get(mode.api + relativeUrl, {
				cache: false,
				responseType: 'json',
				headers: {
					'Authorization': 'Bearer ' + apiKey
				}
			}).then(function (response) {
				return response.data;
			}, function (failure) {
				if (failure === null || failure === undefined) {
					return $q.reject('[no information available]');
				}

				if (typeof failure === 'object' && typeof failure.data === 'object' && failure.data !== null) {
					return $q.reject(failure.data.message || '[no message available]');
				}

				return $q.reject(failure);		// don't know what it is
			});
		}

		return {
			getApiKey: function () { return apiKey; },
			getMode: function () { return mode.name; },

			// attempt to connect to the service and retrieve account details
			// returns a promise that resolves accounts on success or failure message
			fetchAccounts: function (newMode, key) {
				setMode(newMode);
				apiKey = key;

				// store the new data
				localStorage.set('TradingAccount', {mode: mode.name, apiKey: apiKey});

				return httpGet('/v1/accounts');
			},

			// configure which account to use for all normal requests.
			selectAccount: function (newAccount) {
				if (newAccount === undefined || newAccount === null) {
					throw new Error('Expected an account');
				}

				account = newAccount;
			},

			// get the current account
			currentAccount: function () { return account; }
		};
	}]);

}(angular));