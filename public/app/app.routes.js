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
        authenticate: true
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'UserController',
        controllerAs: 'vm'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })

   $urlRouterProvider.otherwise('/');
  }


})();
