'use strict';

var angular = require('angular');

module.exports = angular.module('angular.starter.kit', [
    require('./constants'),
    require('./common'),
    require('./home'),
    require('./pokemon'),
    require('angular-route')
])
    .config(function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/home',
        });
    });
