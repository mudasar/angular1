'use strict';

/**
 * @ngdoc directive
 * @name angular1App.directive:sameAs
 * @description
 * # sameAs
 */
angular.module('angular1App')
  .directive('validateEquals', function () {
    return {
      require: 'ngModel',
      //template: '<div></div>',
      //restrict: 'E',
      link: function postLink(scope, element, attrs, ngModelCtrl) {
        function validateEqual(value) {
          var valid = (value === scope.$eval(attrs.validateEquals));
          ngModelCtrl.$setValidity('equal', valid);
          return valid ? value : undefined;
        }

        ngModelCtrl.$parsers.push(validateEqual);
        ngModelCtrl.$formatters.push(validateEqual);
        scope.$watch(attrs.validateEquals, function () {
          ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
        });
      }
    };
  });
