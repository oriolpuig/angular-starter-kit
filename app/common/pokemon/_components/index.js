'use strict';

var angular = require('angular');
module.exports = angular.module('angular.starter.kit.common.pokemon.components', [])
    .component('askPokemonDetail', require('./askPokemonDetail/PokemonDetail.component'))
    .component('askPokemonList', require('./askPokemonList/PokemonList.component'))
    .component('askPokemonListItem', require('./askPokemonListItem/PokemonListItem.component'))
    .name;
