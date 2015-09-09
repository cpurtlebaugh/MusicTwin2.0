(function(){
  'use strict';

  angular
    .module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['Auth', '$state'];

  function LoginController(Auth, $state){
    var vm = this;

    vm.login = function(){
      Auth.login(vm.username, vm.password)
        .then(function(data){
          console.log(data);
        if(Auth.isLoggedIn())
          return $state.go('home');
        else
          return $state.reload();
        })
    };

  };

})();
