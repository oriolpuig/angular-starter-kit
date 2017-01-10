'use strict';

module.exports = {
    template: require('./Home.tpl.html'),
    controller: HomeController
};

/* @ngInject */
function HomeController() {
    var ctrl = this;

    ctrl.$onInit = function () {
        ctrl.Title = 'Home Page';
    };
}
