;
(function() {
    var app = angular.module('app')
    app.controller('HomeController', ['$scope', '$http', 'YelpAPIService', HomeController])

    function HomeController($scope, $http, YelpAPIService) {

        var x = document.getElementById("demo");
        $scope.loading = true;
        $scope.getLocation = function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    $scope.latLong = 'cll=' + position.coords.latitude + ',' + position.coords.longitude;
                    console.log($scope.latLong);
                    $scope.getData();
                }, function() {
                    console.log('woah')
                });

            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }
        $scope.getLocation();
        $scope.getData = function() {
            $scope.searchText = '';
            YelpAPIService.authenticate().then(function(response) {
                YelpAPIService.getRestaurants('', $scope.latLong, response.token)
                    .then(function(response) {
                        console.log(response);
                        $scope.loading = false;
                        $scope.restaurants = response.businesses;
                    }, function(response) {});
            })
        }
    };
})();
