'use strict';

module.exports = PokemonServiceFactory;

/* @ngInject */
function PokemonServiceFactory(PokemonState, PokemonRemote, UrlHelper, $q) {
    var PokemonService = {
        getCurrentPokemon: getCurrentPokemon,
        setCurrentPokemon: setCurrentPokemon,
        getPokemon: getPokemon,
        getPokemons: getPokemons,
        getPokemonIdFromUrl: getPokemonIdFromUrl,
    };

    return PokemonService;

    function getCurrentPokemon() {
        return PokemonState.current;
    }

    function setCurrentPokemon(pokemon) {
        PokemonState.current = pokemon;
    }

    function getPokemon(pokemonId) {
        if (PokemonState.current) {
            return $q.when(PokemonState.current);
        }

        return PokemonRemote.getPokemon(pokemonId)
            .then(function (data) {
                return data;
            });
    }

    function getPokemons() {
        if (PokemonState.list.length > 0) {
            $q.when(PokemonState.list);
        }
        return PokemonRemote.getPokemons()
            .then(function (data) {
                PokemonState.list = data.results;
                return data;
            });
    }

    function getPokemonIdFromUrl(url) {
        return UrlHelper.getParameterFromUrlByEntity(url, 'pokemon');
    }
}
