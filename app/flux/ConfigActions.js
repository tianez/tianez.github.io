'use strict';
var AppDispatcher = require('./AppDispatcher');

var ConfigActions = {

    init: function(data) {
        AppDispatcher.dispatch({
            actionType: 'init',
            data: data
        });
    },

    update: function(id, text) {
        AppDispatcher.dispatch({
            id: id,
            text: text
        });
    }
};

module.exports = ConfigActions;