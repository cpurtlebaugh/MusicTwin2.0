(function(){
  'use strict';

  angular
  .module('app', ["ui.router"])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){


    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('/login', {
        url: '/login',
        templateUrl: 'views/login.html'
        // controller: '',
        // controllerAs: 'vm'
      })

    $urlRouterProvider.otherwise('/');

  }]);

})();
