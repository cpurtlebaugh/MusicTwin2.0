(function(){
  'use strict'

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['User', '$state', 'Auth', 'Twins'];

  function MainController(User, $state, Auth, Twins){
    var vm = this;

    vm.user = User.user;

    vm.isUser = function(){
     return !angular.equals({}, User.user);
    }

    vm.twins = function(){
      console.log(Twins.getTwins());
      Twins.getTwins();
    }

    vm.logout = function(){
      Auth.logout()
    // reset all user info
      vm.user = {};
      User.user = {};
      return $state.go('home');
      console.log(User.user);
    };

  };
})();


