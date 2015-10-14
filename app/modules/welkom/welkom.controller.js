'use strict';

(function () {

  /**
   *
   * @param $scope
   * @param WelkomService
   * @constructor
   */
  function WelkomController($scope) {

    $scope.vm =  {
      bericht: 'Welkom'

    };

    $scope.init = function() {
      
    };

    $scope.init();

  }

  angular.module('voorbeeldApp.welkom').controller('WelkomController', WelkomController);

})();


