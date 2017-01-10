'use strict';

module.exports = PokemonRouteConfig;

/* @ngInject */
function PokemonRouteConfig($routeProvider) {
    $routeProvider.when('/pokemon/:id', {
        template: '<ask-pokemon pokemon-id="$resolve.pokemonId"></ask-pokemon>',
        resolve: {
            pokemonId: pokemonIdResolver
        }
    });
}

function pokemonIdResolver($route) {
    return $route.current.params.id;
}