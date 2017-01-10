'use strict';

var angular = require('angular');

module.exports = angular.module('angular.starter.kit.common.utilities.services', [])
    .factory('ApiService', require('./ApiService.factory'))
    .name;
