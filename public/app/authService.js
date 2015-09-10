(function(){
  'use strict';

  angular
    .module('authService', [])

// auth factory for handling tokens
    .factory('AuthToken', function($window){
      var authTokenFactory = {};

// get auth token out of local storage
      authTokenFactory.getToken = function(){
        return $window.localStorage.getItem('token');
      };

// funtion to set token or clear token
      authTokenFactory.setToken = function(token){
        if(token)
          $window.localStorage.setItem('token', token);
        else
          $window.localStorage.removeItem('token');
      };

      return authTokenFactory;
    })

// auth factory for logging in, get info
    .factory('Auth', function($http, $q, AuthToken, User){

// create auth actory obj for logging in
      var AuthFactory = {};

      AuthFactory.login = function(username, password){
        return $http.post('api/authenticate', {
          username: username,
          password: password
        })
        .success(function(data){
          AuthToken.setToken(data.token);
          return data;
        });
      };



      AuthFactory.loginToken = function(){
        var def = $q.defer();
        $http.get('/api/login/token').then(function(res){
          User.user = res.data.user;
          def.resolve(res.data.user);
        })
        return def.promise;
      };




// log a user out by clearing the token
      AuthFactory.logout = function(){
        AuthToken.setToken();
        User.user = {};
        console.log('i am null');
      };

      AuthFactory.isLoggedIn = function(){
        if(AuthToken.getToken())
          return true;
        else
          return false;
      };

      AuthFactory.getUser = function(){
        if(AuthToken.getToken())
          return $http.get('/api/me', {cache: true});
        else
          return $q.reject({message: 'User has no token'});
      };

      return AuthFactory;

    })

    .factory('AuthInterceptor', function($q, $location, AuthToken){
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
