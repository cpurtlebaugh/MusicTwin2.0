(function(){
  'use strict';

  angular
  .module('app', ['ui.router', 'authService', 'userService', 'userCtrl'])
  .config(function($httpProvider){

    $httpProvider.interceptors.push('AuthInterceptor');
    console.log($httpProvider.interceptors);

  });

})();
