(function(){
  'use strict';

  angular
  .module('app', ['ui.router', 'authService', 'userService'])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){


    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: 'views/welcome.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })

    $urlRouterProvider.otherwise('/');

  }]);

})();
