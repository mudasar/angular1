'use strict';

/**
 * @ngdoc function
 * @name angular1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angular1App
 */
angular.module('angular1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
