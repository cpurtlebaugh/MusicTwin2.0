(function(){
  'use strict';

  angular
    .module('authService', [])

// auth factory for handling tokens
    .factory('Auth', function($window){
      var authTokenFactory = {};

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

// log a user out by clearing the token
      authTokenFactory.logout = function(){
        AuthToken.setToken();
      };

      authTokenFactory.isLoggedIn = function(){
        if(AuthToken.getToken())
          return true;
        else
          return false;
      };

      authTokenFactory.getToken = function(){
      if(AuthToken.getToken())
         return $http.get('/api/me');
       else
        return $q.reject({message: 'User has no token'});
      };

      return AuthFactory;

    })

    .factory('AuthInterceptor', function($http, $q, AuthToken){
      var interceptorFactory = {};

      interceptorFactory.request = function(config){
        var token = AuthToken.getToken();

        if(token)
          config.headers['x-access-token'] = token;

        return config;
      };

      interceptorFactory.responseError = function(response){
        if(response.status == 403){
          AuthToken.setToken();
          $location.path('/login');
        }

        return $q.reject(response);
      }

      return interceptorFactory;
    });

})();