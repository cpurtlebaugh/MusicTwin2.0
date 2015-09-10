(function(){
  'use strict';

  angular
    .module('twinService', [])

// auth factory for handling twins
    .factory('Twins', function(User){
      var TwinsFactory = {};

      TwinsFactory.getTwins = function(){
        var Twins = User.user.twins;
      }

      return TwinsFactory;
    });


})();
