;
(function() {
    // create the angular app
    var app = angular.module('app', [
        'ngRoute',
        'ui.bootstrap',
        'ui.select'
    ])
    var routes = {
        home: {
            templateUrl: 'home.html',
            controller: 'HomeController'
        },
        default: {
            redirectTo: '/'
        }
    }

    function config($httpProvider, $routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $httpProvider.interceptors.push(function() {
            return {
                request: function(config) {
                    var path = config.url
                    if (config.url.substr(0, 1) != '/') {
                        path = '/' + config.url
                    }
                    return config
                }
            }
        })
        $routeProvider
            .when('/', routes.home)
            .otherwise(routes.home)
    }
    app.config(['$httpProvider', '$routeProvider', '$locationProvider', config])
})();
