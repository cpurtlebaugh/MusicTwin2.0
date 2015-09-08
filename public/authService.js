(function(){
  'use strict';

  angular
    .module('authService', [])

// auth factory for handling tokens
    .factory('Auth', function($http, $q, AuthToken){
      var AuthFactory = {};

// get auth token out of local storage
      authTokenFactory.getToken = function(){
        return $window.localStorage.getItem('token');
      };

// funtion to set token or clear token
      authTokenFactory.setToken = function(){
        if(token)
          $window.localStorage.setItem('token', token);
        else
          $window.localStorage.removeItem('token');
      };

      return AuthFactory;
    })

// auth factory for logging in, get info
    .factory('Auth', function($http, $q, AuthToken){

// create auth actory obj for logging in
      var AuthFactory = {};

      authTokenFactory.login = function(username, password){
        return $http.post('api/authenticate', {
          username: username,
          password: password;
        })
        .success(function(data){
          AuthToken.setToken(data.token);
          return data;
        });
      };


    })

})();
