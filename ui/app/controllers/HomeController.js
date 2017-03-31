;(function () {
  var app = angular.module('app')
  app.controller('HomeController', ['$scope', 'YelpAPIService' , HomeController])
  function HomeController($scope, YelpAPIService) {
    $scope.init = function(){
      YelpAPIService.authenticate();
    };
    //function for hiding and displaying the search bar
  }
})();
