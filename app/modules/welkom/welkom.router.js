'use strict';

(function () {



  angular.module('voorbeeldApp.welkom').config(function ($urlRouterProvider) {

    $stateProvider.state('welkom', {
      url: "/welkom",
      templateUrl: "modules/welkom/welkom.html",
      controller: 'WelkomController'
    });

    
  });
})();


