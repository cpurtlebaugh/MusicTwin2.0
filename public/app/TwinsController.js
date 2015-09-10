(function(){
  'use strict';

  angular
    .module('twinCtrl', ['userService'])
    .controller('TwinController', TwinController);

  TwinController.$inject = ['User', '$state'];

  function TwinController(){
        // vm.allUsers = User.all();
    // console.log(vm.allUsers);
    // console.log('i am following the all use call');

  }

})();

