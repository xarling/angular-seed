'use strict';


(function () {

  var app = angular.module('voorbeeldApp', ['ngResource', 'ui.router', 'voorbeeldApp.welkom', 'ngMessages', 'ui.bootstrap']);


  app.config(function ($urlRouterProvider, $locationProvider, $provide, $stateProvider) {

    $urlRouterProvider.otherwise("/welkom");

    $stateProvider.state('welkom', {
      url: "/welkom",
      templateUrl: "modules/welkom/welkom.html",
      controller: 'WelkomController'
    });

    //$locationProvider.html5Mode(true);



    moment.locale("nl");
  });



  app.run(function () {
    

  });


})();
