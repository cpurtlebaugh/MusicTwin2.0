(function(){
  'use strict';

  angular
    .module('app')
    .config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: 'views/welcome.html',
        controller: 'UserController',
        controllerAs: 'vm',
        reqAuth: true
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        reqAuth: false
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'UserController',
        controllerAs: 'vm',
        reqAuth: false
      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        reqAuth: false
      })

   $urlRouterProvider.otherwise('/');
  }


})();
