'use strict';

module.exports = {
    template: require('./PokemonList.tpl.html'),
    controller: PokemonListController,
};

/* @ngInject */
function PokemonListController() {
    var ctrl = this;
    ctrl.Title = 'Pokemon List component';
    ctrl.pokemons = [];
    ctrl.count = 0;
    ctrl.previous = '';
    ctrl.next = '';

    ctrl.data = require('./mock_pokemon.json');
    ctrl.pokemons = ctrl.data.results;
    ctrl.count = ctrl.data.count;
    ctrl.previous = ctrl.data.previous;
    ctrl.next = ctrl.data.next;
    // console.log(ctrl.pokemons);
    // PokemonService.getPokemons()
    //     .then(function (data) {
    //         ctrl.count = data.count;
    //         ctrl.next = data.next;
    //         ctrl.previous = data.previous;
    //         ctrl.pokemons = data.results;
    //     });
}