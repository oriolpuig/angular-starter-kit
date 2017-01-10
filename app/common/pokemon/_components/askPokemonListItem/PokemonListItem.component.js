'use strict';

module.exports = {
    template: require('./PokemonListItem.tpl.html'),
    controller: PokemonListItemController,
    require: {
        'parent': '^askPokemonList',
    },
    bindings: {
        pokemonName: '=',
        pokemonUrl: '='
    }
};

/* @ngInject */
function PokemonListItemController(PokemonService, $location) {
    /*jshint camelcase: false */
    var ctrl = this;

    ctrl.onItemClick = function () {
        if (!this.pokemon) { return false; }
        PokemonService.setCurrentPokemon(this.pokemon);
        var pokemonId = this.pokemon.id;
        $location.path('/pokemon/' + pokemonId);
    };

    ctrl.$onInit = function () {
        ctrl.pokemon = {};
        ctrl.pokemon.sprites = {};
        ctrl.pokemon.sprites.front_default = '/assets/img/PokemonSymbol.svg';
        ctrl.pokemon.id = PokemonService.getPokemonIdFromUrl(ctrl.pokemonUrl);

        // ctrl.pokemon = require('./mock_pokemon.json');
        // console.log(ctrl.pokemon);
        // PokemonService.getPokemon(ctrl.pokemonUrl)
        //     .then(function (data) {
        //         ctrl.pokemon = data;
        //         console.log(data);
        //     });
    };
}