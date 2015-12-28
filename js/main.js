var app = angular.module('agApp', ['ngMaterial']);

app.controller('agController', function ($scope) {
    console.log('IM RUNNING');

    $scope.schoolStuff = [{
        'subject': 'Math',
        'classes': [
            'Algebra',
            'Linear Algebra Part 1',
            'Linear Algebra Part 2',
            'Calculus Part 1',
            'Calculus Part 2',
            'Statistics Part 1'
        ]
    }, {
        'subject': 'Computer Science',
        'classes': [
            'Object Oriented Programming',
            'Functional Programming',
            'Data Abstraction',
            'Computational Logic'
        ]
    }];

});

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('orange')
        .accentPalette('blue');
});