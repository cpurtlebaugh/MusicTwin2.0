(function(){
  'use strict';

  angular
  .module('app', ['ui.router', 'authService', 'userService' ])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){


    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })

    $urlRouterProvider.otherwise('/');

  }]);

})();
