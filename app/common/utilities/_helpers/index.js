'use strict';

var angular = require('angular');

module.exports = angular.module('angular.starter.kit.common.utilities.helpers', [])
    .factory('UrlHelper', require('./UrlHelper.factory'))
    .name;