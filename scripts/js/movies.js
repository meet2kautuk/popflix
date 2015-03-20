(function(){
	var dataUrls = {
			movies: 'http://localhost:3030/movies'
		},
		allMovies = [],
		bigFlixMovies = angular.module('bigFlix-movies', [])
			.service('dataService', function ($http, $log){
				this.getMovies = function () {
					return $http.get(dataUrls.movies);
				};
				this.getMovieById = function (id) {
					return $http.get(dataUrls.movies + "/" + id);
				};
			})
			.controller('MovieController', function($scope, $log, dataService, $stateParams, $state){
				$scope.movies = allMovies || [];
				$scope.pageClass = 'page-movies';
				function init() {
					if(allMovies.length === 0){
						dataService.getMovies().then(loadMovies);
					}
					$scope.addMovie = function () {
						if(!$scope.newMovie){
							return;
						}
						$log.log('movie added!!');
						$scope.newMovie.id = Object.keys($scope.movies).length + 1;
						//$scope.movies.push($scope.newMovie);
						$scope.movies[$scope.newMovie.id] = $scope.newMovie;
						allMovies = $scope.movies;
						$state.go('movies');
					};
					$log.info('$stateParams.id = ', $stateParams.id);
					if($stateParams.id){
						dataService.getMovieById($stateParams.id).then(loadMovieInfo);
					}
				}
				function loadMovies(movies) {
					//	load movie list into UI
					$scope.movies = allMovies = movies.data;
				}
				function loadMovieInfo(movie) {
					$log.log('Movie: ', movie);
					//	load movie list into UI
					$scope.movie = movie.data;
				}
				init();
			});
		/*
		.controller('MovieListController', function($http, $scope, $log){
			$scope.movies = $scope.movies || [];
			function init() {
				if($scope.movies.length === 0){
					$http.get('http://localhost:3030/movies').success(function(data) {
						$scope.movies = data;
					});
				}

				$scope.addMovie = function () {
					if(!$scope.newMovie){
						return;
					}
					$log.info('movie added!!');
					$scope.newMovie.id = $scope.movies.length + 1;
					$scope.movies.push($scope.newMovie);
				}
			}
			init();
		});
		*/
})();