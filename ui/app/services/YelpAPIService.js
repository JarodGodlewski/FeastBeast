;(function () {
  var app = angular.module('app')
  app.service('YelpAPIService', [`$http`, '$q', YelpAPIService])

  function YelpAPIService($http, $q) {

    var appID = "8ZGHv8C-Uzm1MWeLSWDa2Q";
    var appSecret = "rZnG2bccUmSJVBUiPMiUnviBl44c2O5R4Rrn0uZmVByHJ1soX6ixwvPndFJlcKQ4";
    var grantType = "client_credentials";

    this.authenticate = function () {
      var data = $.param({
          grant_type: grantType,
          client_id: appID,
          client_secret: app
      });
      var config = {
          headers : {
               'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
          }
      }
      $http.post('https://api.yelp.com/oauth2/token', data, config)
      .success(function (data, status, headers, config) {
          // $scope.PostDataResponse = data;
          console.log(data);
      })
      .error(function (data, status, header, config) {
          console.log(data);
      });

    }

  }
})();
