(function(){
  'use strict';

  angular
    .module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['Auth', '$state', '$rootScope'];

  function LoginController(Auth, $state, $rootScope){
    var vm = this;

// get info if a person is logged in
    vm.loggedIn = Auth.isLoggedIn();

// check to see if a user is logged in (every request)
  $rootScope.$on('$routeChangeStart', function(){
    vm.loggedIn = Auth.isLoggedIn();
    Auth.getUser()
      .then(function(data){
        console.log("i am inside the rootScope");
        vm.user = data.data;
      });
  });

// function to handle user login
    vm.login = function(){
      Auth.login(vm.username, vm.password)
        .then(function(data){
          console.log(data);
        if(Auth.isLoggedIn())
          return $state.go('welcome');
        else
          return $state.reload();
        })
    };

// function to handle user logout
    vm.logout = function(){
      Auth.logout(v)
    // reset all user info
      vm.user = {};
      return $state.go('welcome');
    };

  };

})();
