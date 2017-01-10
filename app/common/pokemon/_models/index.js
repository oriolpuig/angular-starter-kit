'use strict';

var angular = require('angular');

module.exports = angular.module('com.desigual.clienteling.common.pokemon.models', [])
	.factory('PokemonState', require('./PokemonState.factory'))
	.name;
