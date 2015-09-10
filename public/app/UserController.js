(function(){
  'use strict';

  angular
    .module('userCtrl', ['userService'])
    .controller('UserController', UserController);

  UserController.$inject = ['User'];

  function UserController(User){
    var vm = this;

// set processing variable to show loaded items
    vm.processing = true;

    vm.getUser = function(){
      vm.processing = true;
      vm.allUsers = User.all();
      console.log(vm.allUsers);

    }

    vm.getUser();
  };


})();
