'use strict';

var angular = require('angular');
module.exports = angular.module('angular.starter.kit.common.pokemon.services', [])
    .factory('PokemonService', require('./PokemonService.factory'))
    .factory('PokemonRemote', require('./PokemonRemote.factory'))
    .name;
