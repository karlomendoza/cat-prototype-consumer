angular.module('find', [])
.controller('Find', function($scope, $http) {
	
	$scope.findNews = function(newsId){
		$http.get('http://localhost:8090/news/find/' +newsId ).
        then(function(response) {
            $scope.news = response.data;
        });
	}
    
});
angular.module('findAll', [])
.controller('FindAll', function($scope, $http) {
    $http.get('http://localhost:8090/news').
        then(function(response) {
            $scope.news = response.data;
        });
});

angular.module('create', [])
.controller('Create', function($scope, $http) {
	
	$scope.createNews = function(author, news){
		$http.get('http://localhost:8090/news/create/' + author +"/" + news).
        then(function(response) {
            $scope.news = response.data;
        });
	}
});