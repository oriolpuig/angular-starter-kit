'use strict';
module.exports = PokemonRemoteFactory;

/* @ngInject */
function PokemonRemoteFactory($http, GLOBAL_SETTINGS, ApiService) {
    var PokemonRemote = {
        getPokemon: getPokemon,
        getPokemons: getPokemons,
    };

    return PokemonRemote;

    function getPokemon(pokemonId) {
        if (!pokemonId && typeof pokemonId !== 'number') {
            throw new Error('No pokemonId.');
        }
        var url = ApiService.getApiUrl() + 'pokemon/' + pokemonId;

        return $http.get(url)
            .then(function (data) {
                return data.data;
            });
    }

    function getPokemons() {
        var url = ApiService.getApiUrl() + 'pokemon/';
        return $http.get(url)
            .then(function (data) {
                return data.data;
            });
    }
}