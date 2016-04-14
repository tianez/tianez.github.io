'use strict';
var AppDispatcher = require('./AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'config';

var _todos = {
    transition: 'example',
    msg: [],
    loading: 1,
    title: '王的理想乡'
};

var ConfigStore = assign({}, EventEmitter.prototype, {

    getAll: function() {
        return _todos;
    },

    get: function(id) {
        return _todos[id];
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

module.exports = ConfigStore;

// Register callback to handle all updates
AppDispatcher.register(function(action) {
    var text;
    switch (action.actionType) {
        case 'init':
            init(action.data);
            ConfigStore.emitChange();
            break;
        case 'toggle':
            toggle(action.id);
            ConfigStore.emitChange();
            break;
        case 'toggleBack':
            if (_todos[action.id] == 'example') {
                toggleBack(action.id);
                ConfigStore.emitChange();
            }
            break;
        case 'msg':
            update('msg', action.text);
            ConfigStore.emitChange();
            break;
        case 'update':
            update(action.id, action.text);
            ConfigStore.emitChange();
            break;
        case 'updateText':
            text = action.text.trim();
            if (text !== '') {
                update(action.id, text);
                ConfigStore.emitChange();
            }
            break;
        case 'login':
            login(action.user);
            ConfigStore.emitChange();
            break;
        default:
            // no op
    }
});

function init(data) {
    _todos[init] = data;
}

function toggle(id) {
    if (_todos[id] == 'example') {
        var updates = 'example2';
    } else {
        var updates = 'example';
    }
    _todos[id] = updates;
}

function toggleBack(id) {
    _todos[id] = 'example2';
}

function update(id, updates) {
    _todos[id] = updates;
}

function login(user) {
    _todos['user'] = user;
}