;
(function() {
    var app = angular.module('app')
    app.service('YelpAPIService', [`$http`, '$q', YelpAPIService])

    function YelpAPIService($http, $q) {

        this.getRestaurants = function(term, location, token) {

            var config = {
                params: {
                    location: location,
                    token: token
                }
            }

            return $q(function(resolve, reject) {
                $http.get("https://feastbeastapi.herokuapp.com/api/yelp/search", config)
                    .then(function(response) {
                        resolve(response.data);
                    }, function(response) {
                        console.log(response);
                        reject(response.data);
                    })
            });
        }

        this.authenticate = function() {
            return $q(function(resolve, reject) {
                $http.get("https://feastbeastapi.herokuapp.com/api/yelp/authenticate")
                    .then(function(response) {
                        resolve(response.data);
                    }, function(response) {
                        console.log(response);
                        reject(response.data);
                    })
            });
        }
    }
})();
