'use strict';

/**
 * @ngdoc function
 * @name angular1App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angular1App
 */
angular.module('angular1App')
  .controller('LoginCtrl', function ($scope,authService, alert) {
    $scope.submit = function(){
      var user = $scope.user;
      console.log(user);
      authService.login({userName:user.email, password:user.password});
      alert('success','Ok!','You are now loggedin');

    };

  });
