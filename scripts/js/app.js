/**
 * BigFlix - main application script file
 */

(function() {
	'use strict';

	angular
		.module('bigFlix', ['ui.router', 'ngAnimate', 'common-elements', 'bigFlix-home', 'bigFlix-movies'])

		//	UI Routing
		.config(function ($urlRouterProvider, $stateProvider){
			$urlRouterProvider.otherwise('/home');
			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'views/home.html',
					controller: 'HomeController'
				})
				.state('movies', {
					url: '/movies',
					templateUrl: 'views/movieList.html',
					controller: 'MovieController'
				})
				.state('movieInfo', {
					url: '/movie/{id:[0-9]{1,4}}',
					templateUrl: 'views/movieInfo.html',
					controller: 'MovieController'
				})
				.state('newMovie', {
					url: '/newMovie',
					templateUrl: 'views/addMovie.html',
					controller: 'MovieController'
				});		
		});
})();