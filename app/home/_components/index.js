'use strict';

var angular = require('angular');

module.exports = angular.module('angular.starter.kit.home.components', [])
    .component('askHome', require('./askHome/Home.component'))
    .name;