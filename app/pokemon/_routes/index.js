'use strict';

var angular = require('angular');

module.exports = angular.module('angular.starter.kit.pokemon.routes', [
    require('angular-route'),
])
    .config(require('./PokemonRoute.config'))
    .name;