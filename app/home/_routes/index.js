'use strict';

var angular = require('angular');

module.exports = angular.module('angular.starter.kit.home.routes', [
	require('angular-route'),
])
	.config(require('./HomeRoute.config'))
	.name;