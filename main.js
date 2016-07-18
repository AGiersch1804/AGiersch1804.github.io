angular
    .module('agApp', ['ngMaterial'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('orange')
            .accentPalette('cyan')
            .warnPalette('red')
            .backgroundPalette('grey');
    });