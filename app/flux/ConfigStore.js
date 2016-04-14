'use strict';
var AppDispatcher = require('./AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'config';

var _todos = {
    transition: 'example',
    msg: 'nihaoadeasds23',
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
    
    getMsg: function() {
        let msg = _todos['msg']
        if(_todos['msg']!=''){
            _todos['msg'] = ''
        }
        return msg
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
    if (_todos[action.id] == action.text) {
        return
    }
    switch (action.actionType) {
        case 'init':
            init(action.data);
            ConfigStore.emitChange();
            break;
        case 'updateText':
            text = action.text.trim();
            if (text !== '') {
                update(action.id, text);
                ConfigStore.emitChange();
            }
            break;
        default:
            _todos[action.id] = action.text;
            ConfigStore.emitChange();
    }
});

function init(data) {
    _todos[init] = data;
}