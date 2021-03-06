(function(){
  'use strict';

  angular
    .module('userService', [])
    .factory('User', function($http){

      var userFactory = {};

//
    userFactory.user = {};

// get a single user
    userFactory.get = function(id){
      return $http.get('/api/users/' + id);
    };

// get all users
    userFactory.all = function(){
      return $http.get('/api/users/');
    };

// create / post a user
    userFactory.create = function(userData){
      return $http.post('/api/users', userData);
    };

// update a user
    userFactory.update = function(id, userData){
      return $http.put('/api/users/' + id, userData);
    };

// delete a user
    userFactory.delete = function(id){
      return $http.delete('/api/users/' + id);
    };

// return the entire user factory obj
  return userFactory;

  });


})();
