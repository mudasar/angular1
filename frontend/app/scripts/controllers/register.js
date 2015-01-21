'use strict';

/**
 * @ngdoc function
 * @name angular1App.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angular1App
 */
angular.module('angular1App')
  .controller('RegisterCtrl', function ($scope,$rootScope, $http, alert) {

    var url = 'http://localhost:3000/register';
    var user = {firstName:"ali", lastName:'wajdan', email:'aliwajdan@gmail.com', password:'123'};
    $scope.submit = function () {

      $http.post(url, user)
        .success(function (resp) {
          alert('success','Ok!','You are now registered');
        })
        .error(function (resp) {
          alert('warning','Opps!','Could not register');
        });
    }

  });
