(function(){
  'use strict'

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = [];

  function MainController(){
    var vm = this;

    // get info to check if logged in

    vm.loggedIn = Auth.isLoggedIn();

  }

})();


