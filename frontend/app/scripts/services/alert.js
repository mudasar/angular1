'use strict';

/**
 * @ngdoc service
 * @name angular1App.alert
 * @description
 * # alert
 * Service in the angular1App.
 */
angular.module('angular1App')
  .service('alert', function ($rootScope, $timeout) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var alertTimeout;
    return function(type, title,message, timeout){
      $rootScope.alert= {
        title:title,
        hasBeenShown:true,
        show: true,
        type:type,
        message: message
      };
      $timeout.cancel(alertTimeout);
      alertTimeout = $timeout(function(){
        $rootScope.alert.show = false
      },timeout || 2000);
    };
  });
