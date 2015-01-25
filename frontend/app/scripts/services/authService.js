/**
 * Created by mudasar on 22/01/2015.
 */
'use strict';

angular.module('angular1App')
  .factory('authService', ['$http', '$q',
    '$window',function ($http,$q,$window) {
    // AngularJS will instantiate a singleton by calling "new" on this function
var serviceBase = 'http://admin.iproblem.com/';
      var storage = $window.localStorage;
      var cachedToken;
    var authServiceFactory = {};

      var _authentication = {
        isAuth: false,
        userName : ""
      };

      var _login = function (loginData) {

        var data = "grant_type=password&username=" +
          loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.post(serviceBase + 'token', data, { headers:
        { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

          storage.set('authorizationData',
            { token: response.access_token, userName: loginData.userName });

          _authentication.isAuth = true;
          _authentication.userName = loginData.userName;

          deferred.resolve(response);

        }).error(function (err, status) {
          _logOut();
          deferred.reject(err);
        });

        return deferred.promise;
      };

      var _logOut = function () {

        storage.remove('authorizationData');

        $http.post(serviceBase + 'ap/Account/Logout').success(function(res){
          console.log(res);
        }).error(function(err,status){
          console.log(err);
        });

        _authentication.isAuth = false;
        _authentication.userName = "";
      };

      var _register = function(regData){

      };


    return {
      setToken: function (token) {
        cachedToken = token;
        storage.setItem('authorizationData', token);
      },
      getToken: function () {
        if (!cachedToken) {
          cachedToken = storage.getItem('authorizationData');
        }
        return cachedToken;
      },
      isAuthenticated: function () {
        return !!this.getToken();
      },

      login: _login,
      logout: _logOut,
      register: _register
    };
  }]);

