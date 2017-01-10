'use strict';

var angular = require('angular');

module.exports = angular.module('angular.starter.kit.common', [
    require('./pokemon'),
    require('./utilities'),
])
    .name;