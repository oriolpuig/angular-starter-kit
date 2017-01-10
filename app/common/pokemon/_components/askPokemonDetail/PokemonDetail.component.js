 'use strict';

module.exports = {
    template: require('./PokemonDetail.tpl.html'),
    controller: PokemonDetailController,
    bindings: {
        pokemon: '<',
    }
};

/* @ngInject */
function PokemonDetailController() {
    var ctrl = this;
    ctrl.Title = 'Pokemon Detail component';
}