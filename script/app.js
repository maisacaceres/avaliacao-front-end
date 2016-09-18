angular.module('maisaApp', ['md.data.table', 'ngMaterial'])

  .config(['$mdThemingProvider', function ($mdThemingProvider) {
    'use strict';

    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('blue');
  }]);
