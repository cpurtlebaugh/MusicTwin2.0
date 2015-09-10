(function(){
  'use strict';

  angular
    .module('userCtrl', ['userService'])
    .controller('UserController', UserController);

  UserController.$inject = ['User', '$state'];

  function UserController(User, $state){
    var vm = this;

    vm.user = User.user;

// set processing variable to show loaded items
    vm.test = function() {
      console.log('hi');
    }
    vm.register = function(){
        vm.dataLoading = true;
        User.create(vm.userData)
        .then(function(response){
          if(response.success) return $state.go('welcome');
          else return $state.reload();
        vm.userData = {};
        vm.message = data.message
        });
      };



    // vm.allUsers = User.all();
    // console.log(vm.allUsers);
    // console.log('i am following the all use call');

};

})();
