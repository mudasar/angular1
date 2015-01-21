/**
 * Created by mudasar on 20/01/2015.
 */
(function(){
  'use strict';

  var app = angular.module("angular1App").config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "views/main.html"
      })
      .state('about',{
        url: '/about',
        templateUrl:'views/about.html'
      })
      .state('contact',{url:'/contact',templateUrl:'views/contact.html'})
      .state('register',{url:'/register',templateUrl:'views/register.html', controller:"RegisterCtrl"})
      .state('login',{url:'/login',templateUrl:'views/login.html'})

    });


})();
