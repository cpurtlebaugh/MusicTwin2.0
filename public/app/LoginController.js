(function(){
  'use strict';

  angular
    .module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['Auth', 'User', '$state', '$rootScope'];

  function LoginController(Auth, User, $state, $rootScope){

    var vm = this;

// get info if a person is logged in
    // vm.loggedIn = Auth.isLoggedIn();

// check to see if a user is logged in (every request)
  $rootScope.$on('$routeChangeStart', function(){
    // vm.loggedIn = Auth.isLoggedIn();
    // Auth.getUser()
    //   .then(function(res){
    //     console.log("i am inside the rootScope");
    //     vm.user = res.data;
    //   });
  });

// function to handle user login
    vm.login = function(){
      Auth.login(vm.username, vm.password)
        .then(function(res){
          console.log(res.data);
          User.user = res.data.user;
          console.log(User.user);
          return $state.go('welcome');
        }, function() {
          return $state.reload();
        });
    };

// function to handle user logout
    vm.logout = function(){
      Auth.logout(v)
    // reset all user info
      vm.user = {};
      User.user = {};
      return $state.go('welcome');
    };

    // vm.signup = function(){

    // }

  };

})();
