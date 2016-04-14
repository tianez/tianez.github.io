'use strict';
var AppDispatcher = require('./AppDispatcher');

var ConfigActions = {

    init: function(data) {
        AppDispatcher.dispatch({
            actionType: 'init',
            data: data
        });
    },

    login: function(user) {
        AppDispatcher.dispatch({
            actionType: 'login',
            user: user
        });
    },

    msg: function(text) {
        AppDispatcher.dispatch({
            actionType: 'msg',
            text: text
        });
    },

    update: function(id, text) {
        AppDispatcher.dispatch({
            actionType: 'update',
            id: id,
            text: text
        });
    },

    updateText: function(id, text) {
        AppDispatcher.dispatch({
            actionType: 'updateText',
            id: id,
            text: text
        });
    },

    toggle: function(id) {
        AppDispatcher.dispatch({
            actionType: 'toggle',
            id: id
        });
    },

    toggleBack: function(id) {
        AppDispatcher.dispatch({
            actionType: 'toggleBack',
            id: id
        });
    }

};

module.exports = ConfigActions;