'use strict';

module.exports = {
    template: require('./Pokemon.tpl.html'),
    controller: PokemonController,
    bindings: {
        pokemonId: '<',
    }
};

/* @ngInject */
function PokemonController(PokemonService) {
    var ctrl = this;

    ctrl.$onInit = function () {
        ctrl.Title = 'Pokemon';
        ctrl.pokemon = {};

        if (ctrl.pokemonId) {
            PokemonService.getPokemon(ctrl.pokemonId)
                .then(function (pokemon) {
                    ctrl.pokemon = pokemon;
                });
        }
    };
}
