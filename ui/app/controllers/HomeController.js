;
(function() {
        var app = angular.module('app')
        app.controller('HomeController', ['$scope', '$http', 'YelpAPIService', HomeController])

        function HomeController($scope, $http, YelpAPIService) {

            $scope.searchText = '';
            YelpAPIService.authenticate().then(function(response) {
                YelpAPIService.getRestaurants('', 'san Francisco, ca', response.token)
                    .then(function(response) {
                        $scope.restaurants = response;
                        console.log(response);
                    }, function(response) {});
            })
        };
    }
})();
