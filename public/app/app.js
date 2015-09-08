(function(){
  'use strict';

  angular
  .module('app', ["ui.router"])
  .config(['$stateProvider', 'urlRouterProvider',
    function($stateProvider, urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'public/views/index.html'
      })
      .state('/login', {
        url: '/login',
        templateUrl: 'public/views/home.html',
        controller: 'mainController'
      })
  }]);

})();
