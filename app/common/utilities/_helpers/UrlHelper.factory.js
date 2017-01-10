'use strict';
module.exports = UrlHelperFactory;

/* @ngInject */
function UrlHelperFactory() {
    var UrlHelper = {
        getParameterFromUrlByEntity: getParameterFromUrlByEntity
    };

    return UrlHelper;

    function getParameterFromUrlByEntity(url, entity, splittedBy) {
        if (!url || typeof url !== 'string') { return ''; }
        if (!entity || typeof entity !== 'string') { return ''; }
        if (!splittedBy || typeof splittedBy !== 'string') { splittedBy = '/'; }

        var splitUrl = url.split(splittedBy);
        var indexOf = splitUrl.indexOf(entity);
        if (indexOf > -1) {
            return splitUrl[indexOf + 1];
        }
        return '';
    }
}