'use strict';

var angular = require('angular');

module.exports = angular.module('angular.starter.kit.pokemon.components', [])
    .component('askPokemon', require('./askPokemon/Pokemon.component'))
    .name;