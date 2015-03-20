(function() {
	'use strict';
	angular
		.module('bigFlix-home', [])
		.controller('HomeController', function($scope){
			$scope.message = 'An Angular based movie gallery sample';
			$scope.pageClass = 'page-home';
		});
})();