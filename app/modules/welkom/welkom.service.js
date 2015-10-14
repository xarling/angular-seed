'use strict';

(function() {

  /**
   *
   * @returns {{haalBericht: Function}}
   * @constructor
   */
  var WelkomService = function ($q) {

    /**
     * Haal het bericht
     * @param $q
     * @returns {*}
     */
    var haalBericht = function() {
      //simuleer een asynchroon verzoek
      var defer = $q.defer();
      defer.resolve('Hallo wereld. Het bouwen van koi-gui is begonnen');
      return defer.promise;
    };

    // geef public functies terug
    return {
      haalBericht: haalBericht
    };
  };

  angular.module('voorbeeldApp.welkom').service('WelkomService', WelkomService);

})();
