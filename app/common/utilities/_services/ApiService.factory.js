'use strict';
module.exports = ApiServiceFactory;

/* @ngInject */
function ApiServiceFactory(GLOBAL_SETTINGS) {
    var ApiService = {
        getApiUrl: getApiUrl,
        getApiKey: getApiKey,
    };

    return ApiService;

    function getApiKey() {
        if (!GLOBAL_SETTINGS.API.API_KEY) {
            throw new Error('No API_KEY.');
        }
        return 'apikey=' + GLOBAL_SETTINGS.API.API_KEY;
    }

    function getApiUrl() {
        if (!GLOBAL_SETTINGS.API.API_BASE_URL) {
            throw new Error('No API_BASE_URL.');
        }

        if (!GLOBAL_SETTINGS.API.API_VERSION) {
            throw new Error('No API_VERSION.');
        }

        return GLOBAL_SETTINGS.API.API_BASE_URL + GLOBAL_SETTINGS.API.API_VERSION + '/';
    }
}