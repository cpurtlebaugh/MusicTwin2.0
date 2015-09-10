(function(){
  'use strict';

  angular
  .module('app', ['ui.router', 'authService', 'userService', 'twinService', 'userCtrl'])
  .config(function($httpProvider){

    $httpProvider.interceptors.push('AuthInterceptor');


  })

  .run(function(Auth, User, $state){
    Auth.loginToken().then(function(user){
      if(user){
        User.user = user;
        $state.go('welcome');
      } else {
        User.user = {};
        $state.go('home');
      }
    });
  });

})();
