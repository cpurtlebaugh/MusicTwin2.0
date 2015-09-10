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
  $rootScope.$on('$stateChangeStart', function(event, toRoute){
    if(toRoute.reqAuth && angular.equals({}, User.user)){
      event.preventDefault();
      console.log(toRoute);
      $state.go('login');
    }
  });


// function to handle user login
    vm.login = function(){
      Auth.login(vm.username, vm.password)
        .then(function(res){
          User.user = res.data.user;
          console.log(res.data)
          console.log(User.user);
          return $state.go('welcome');
        }, function() {
          return $state.reload();
        });
    };

  };

})();
