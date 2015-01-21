'use strict';

/**
 * @ngdoc function
 * @name angular1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angular1App
 */
angular.module('angular1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
