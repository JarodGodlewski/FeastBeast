;(function () {
  var app = angular.module('app')
  app.controller('HomeController', [ '$scope', 'YelpAPIService', HomeController])
  function HomeController($scope, YelpAPIService) {
    var self = this
    YelpAPIService.authenticate();

    $scope.testClick = function() {
      console.log(YelpAPIService.getData());
    };

    $scope.searchButtonSubmitClick = function (){
      // figure out how to get the text form the field
      // build the parameters for the api request with given values from user
      /// make a call to the the yelp api with the parameters

      //make another function to hide everything on the page and show the list
    }

    //funtion for hiding and displaying the search bar
  }
})();
