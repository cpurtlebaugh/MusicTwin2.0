(function(){
  'use strict'

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['User', '$state', 'Auth'];

  function MainController(User, $state, Auth){
    var vm = this;

    vm.user = User.user;

    vm.isUser = function(){
     return !angular.equals({}, User.user);
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


