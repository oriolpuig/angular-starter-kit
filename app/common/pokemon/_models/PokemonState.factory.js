'use strict';

module.exports = PokemonStateFactory;

/* @ngInject */
function PokemonStateFactory() {
    var PokemonState = {
        current: null,
        list: [],
    };

    return PokemonState;
}
