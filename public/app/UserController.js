(function(){
  'use strict';

  angular
    .module('userCtrl', ['userService'])
    .controller('UserController', UserController);

  UserController.$inject = ['User'];

  function UserController(User){
    vm = this;

// set processing variable to show loaded items
    vm.processing = true;

    vm.getUser = function(id){
      vm.processing = true;
      User.find(id)
        .success(function(data){
          console.log('i am data from the user controller');
        })

    }
  };


})();
