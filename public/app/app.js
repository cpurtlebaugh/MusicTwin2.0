(function(){
  'use strict';

  angular
  .module('app', ['ui.router', 'authService', 'userService', 'userCtrl'])
  .config(function($httpProvider){

    $httpProvider.interceptors.push('AuthInterceptor');


  })

  .run(function(Auth, User, $state){
    Auth.loginToken().then(function(user){
      console.log(user);
      if(user){
        $state.go('welcome');
      } else {
        $state.go('home');
      }
    });
  });

})();
