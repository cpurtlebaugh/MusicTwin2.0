(function(){
  'use strict';

  angular
    .module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['Auth'];

  function LoginController(Auth){
    var vm = this;

    vm.login = function(){
      Auth.login(vm.username, vm.password)
        .then(function(data){
          console.log(data);
        })
    };

  };

})();
