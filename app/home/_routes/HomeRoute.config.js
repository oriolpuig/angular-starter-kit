'use strict';

module.exports = HomeRouteConfig;

/* @ngInject */
function HomeRouteConfig($routeProvider) {
    $routeProvider.when('/home', {
        template: '<ask-home></ask-home>'
    });
}
