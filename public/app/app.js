(function(){
  'use strict';

  angular
  .module('app', ['ui.router', 'authService', 'userService' ])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){


    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: 'views/welcome.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
      })

    $urlRouterProvider.otherwise('/');

  }]);

})();
