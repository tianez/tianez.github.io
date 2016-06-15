/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _Layout = __webpack_require__(13);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _Index = __webpack_require__(29);

	var _Index2 = _interopRequireDefault(_Index);

	var _Pages = __webpack_require__(30);

	var _Pages2 = _interopRequireDefault(_Pages);

	var _Page = __webpack_require__(31);

	var _Page2 = _interopRequireDefault(_Page);

	var _Add = __webpack_require__(33);

	var _Add2 = _interopRequireDefault(_Add);

	var _List = __webpack_require__(53);

	var _List2 = _interopRequireDefault(_List);

	var _Detail = __webpack_require__(54);

	var _Detail2 = _interopRequireDefault(_Detail);

	var _Login = __webpack_require__(55);

	var _Login2 = _interopRequireDefault(_Login);

	var _Logout = __webpack_require__(56);

	var _Logout2 = _interopRequireDefault(_Logout);

	var _NoMatch = __webpack_require__(57);

	var _NoMatch2 = _interopRequireDefault(_NoMatch);

	var _ApiCloudsIndex = __webpack_require__(58);

	var _ApiCloudsIndex2 = _interopRequireDefault(_ApiCloudsIndex);

	var _ApiClouds = __webpack_require__(59);

	var _ApiClouds2 = _interopRequireDefault(_ApiClouds);

	var _ApiCloud = __webpack_require__(60);

	var _ApiCloud2 = _interopRequireDefault(_ApiCloud);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Router = ReactRouter.Router;
	var Route = ReactRouter.Route;
	var IndexRoute = ReactRouter.IndexRoute;
	var Redirect = ReactRouter.Redirect;
	var hashHistory = ReactRouter.hashHistory;
	var browserHistory = ReactRouter.browserHistory;
	var Link = ReactRouter.Link;

	/**
	 * 路由
	 */


	function redirectToLogin(nextState, replace) {
	    var pathname = nextState.location.pathname;
	    var user = storedb('user').find() ? true : false;
	    if (!user && pathname !== 'login' && pathname !== '/login') {
	        ConfigActions.update('msg', '你还没有登录，请先登录！');
	        replace({
	            pathname: '/login'
	        });
	    } else if (user && (pathname == 'login' || pathname == '/login')) {
	        replace({
	            pathname: '/'
	        });
	    }
	}

	ReactDOM.render(React.createElement(Router, {
	    history: hashHistory
	}, React.createElement(Route, {
	    path: "/",
	    component: _Layout2.default
	}, React.createElement(IndexRoute, {
	    component: _Index2.default
	}), React.createElement(Route, {
	    path: "page/add",
	    component: _Add2.default,
	    onEnter: redirectToLogin
	}), React.createElement(Route, {
	    path: "edit/:articleId",
	    component: _Add2.default,
	    onEnter: redirectToLogin
	}), React.createElement(Route, {
	    path: "page"
	}, React.createElement(IndexRoute, {
	    component: _Pages2.default
	}), React.createElement(Route, {
	    path: ":articleId",
	    component: _Page2.default
	})), React.createElement(Route, {
	    path: "login",
	    component: _Login2.default,
	    onEnter: redirectToLogin
	}), React.createElement(Route, {
	    path: "logout",
	    component: _Logout2.default
	}), React.createElement(Route, {
	    path: "add",
	    component: _Add2.default,
	    onEnter: redirectToLogin
	}), React.createElement(Route, {
	    path: "apicloud"
	}, React.createElement(IndexRoute, {
	    component: _ApiCloudsIndex2.default,
	    onEnter: redirectToLogin
	}), React.createElement(Route, {
	    path: ":clouds"
	}, React.createElement(IndexRoute, {
	    component: _ApiClouds2.default,
	    onEnter: redirectToLogin
	}), React.createElement(Route, {
	    path: ":articleId",
	    component: _ApiCloud2.default,
	    onEnter: redirectToLogin
	}))), React.createElement(Route, {
	    path: "day"
	}, React.createElement(IndexRoute, {
	    component: _ApiCloudsIndex2.default,
	    onEnter: redirectToLogin
	}), React.createElement(Route, {
	    path: ":list"
	}, React.createElement(IndexRoute, {
	    component: _List2.default
	}), React.createElement(Route, {
	    path: ":id",
	    component: _Detail2.default
	}))), React.createElement(Route, {
	    path: "*",
	    component: _NoMatch2.default
	}))), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	window.AppId = 'A6984077246442';
	window.AppKey = '7F7872C0-8EB2-D116-C9AF-AF02A4B65BA0';
	window.AppUrl = 'https://d.apicloud.com/mcm/api/';

	/**
	 * action
	 */
	// import ConfigActions from './flux/ConfigActions'
	window.ConfigActions = __webpack_require__(2);
	window.SetupActions = __webpack_require__(8);

	/**
	 * store
	 */
	// import ConfigStore from './flux/ConfigStore'
	window.ConfigStore = __webpack_require__(9);
	window.SetupStore = __webpack_require__(12);

	window.loadingHide = function () {
	    setTimeout(function () {
	        ConfigActions.update('loading', false);
	    }, 600);
	};

	window.old = '';
	window.hashchange = function () {
	    var hash = location.hash.split("?")[0];
	    if (old == '') {
	        old = hash;
	    }
	    if (old != hash) {
	        old = hash;
	        return true;
	    } else {
	        return false;
	    }
	};

	window._scroll = function () {
	    var speed = arguments[0] ? arguments[0] : 1;
	    var h = window.scrollY * speed;
	    var style = {
	        style: {
	            transform: 'translateY(-' + h + 'px)'
	        }
	    };
	    return style;
	};

	//获取url参数数组
	window.get = function (url) {
	    if (!url) {
	        var url = window.document.location.href.toString();
	    }
	    var u = url.split("?");
	    if (typeof u[1] == "string") {
	        u = u[1].split("&");
	        var get = {};
	        for (var i in u) {
	            var j = u[i].split("=");
	            get[j[0]] = j[1];
	        }
	        return get;
	    } else {
	        return {};
	    }
	};

	//2个对象合并
	window.extend = function (o, n, override) {
	    for (var p in n) {
	        if (n.hasOwnProperty(p) && (!o.hasOwnProperty(p) || override)) o[p] = n[p];
	    }
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var AppDispatcher = __webpack_require__(3);

	var ConfigActions = {

	    init: function init(data) {
	        AppDispatcher.dispatch({
	            actionType: 'init',
	            data: data
	        });
	    },

	    update: function update(id, data) {
	        AppDispatcher.dispatch({
	            id: id,
	            data: data
	        });
	    },
	    updateAll: function updateAll(data) {
	        AppDispatcher.dispatch({
	            actionType: 'updateAll',
	            data: data
	        });
	    },
	    updateArticle: function updateArticle(data) {
	        AppDispatcher.dispatch({
	            actionType: 'updateArticle',
	            data: data
	        });
	    }
	};

	module.exports = ConfigActions;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * AppDispatcher
	 *
	 * A singleton that operates as the central hub for application updates.
	 */

	var Dispatcher = __webpack_require__(4).Dispatcher;

	module.exports = new Dispatcher();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(5);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}

	var invariant = __webpack_require__(7);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	}();

	module.exports = Dispatcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var AppDispatcher = __webpack_require__(3);

	var ConfigActions = {

	    init: function init(data) {
	        AppDispatcher.dispatch({
	            actionType: 'init',
	            data: data
	        });
	    },

	    update: function update(id, data) {
	        AppDispatcher.dispatch({
	            id: id,
	            data: data
	        });
	    },
	    updateAll: function updateAll(data) {
	        AppDispatcher.dispatch({
	            actionType: 'updateAll',
	            data: data
	        });
	    },
	    updateArticle: function updateArticle(data) {
	        AppDispatcher.dispatch({
	            actionType: 'updateArticle',
	            data: data
	        });
	    }
	};

	module.exports = ConfigActions;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var AppDispatcher = __webpack_require__(3);
	var EventEmitter = __webpack_require__(10).EventEmitter;
	var assign = __webpack_require__(11);

	var CHANGE_EVENT = 'config';

	var _todos = {
	    transition: 'example',
	    msg: '',
	    msg_n: 0,
	    loading: true,
	    title: '王的理想乡',
	    pics: ''
	};

	var ConfigStore = assign({}, EventEmitter.prototype, {

	    getAll: function getAll() {
	        return _todos;
	    },

	    get: function get(id) {
	        return _todos[id];
	    },

	    getMsg: function getMsg() {
	        var msg = _todos['msg'];
	        if (_todos['msg'] != '') {
	            _todos['msg'] = '';
	        }
	        return msg;
	    },

	    emitChange: function emitChange() {
	        this.emit(CHANGE_EVENT);
	    },

	    /**
	     * @param {function} callback
	     */
	    addChangeListener: function addChangeListener(callback) {
	        this.on(CHANGE_EVENT, callback);
	    },

	    /**
	     * @param {function} callback
	     */
	    removeChangeListener: function removeChangeListener(callback) {
	        this.removeListener(CHANGE_EVENT, callback);
	    }
	});

	module.exports = ConfigStore;

	// Register callback to handle all updates
	AppDispatcher.register(function (action) {
	    var data = action.data;
	    if (_todos[action.id] == data) {
	        return;
	    }
	    switch (action.actionType) {
	        case 'updateAll':
	            for (var key in data) {
	                update(key, data[key]);
	            }
	            break;
	        case 'updateArticle':
	            update(data.id, data);
	            update('title', data.title);
	            break;
	        default:
	            update(action.id, action.data);

	    }
	    ConfigStore.emitChange();
	});

	function update(id, data) {
	    _todos[id] = data;
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function (n) {
	  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function (type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events) this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler)) return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++) {
	      listeners[i].apply(this, args);
	    }
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function (type, listener) {
	  var m;

	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  if (!this._events) this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function (type, listener) {
	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function (type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type]) return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener || isFunction(list.listener) && list.listener === listener) {
	    delete this._events[type];
	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0) return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function (type) {
	  var key, listeners;

	  if (!this._events) return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length) {
	      this.removeListener(type, listeners[listeners.length - 1]);
	    }
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function (type) {
	  var ret;
	  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function (type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function (emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var AppDispatcher = __webpack_require__(3);
	var EventEmitter = __webpack_require__(10).EventEmitter;
	var assign = __webpack_require__(11);

	var CHANGE_EVENT = 'config';

	var _todos = {
	    transition: 'example',
	    msg: '',
	    msg_n: 0,
	    loading: true,
	    title: '王的理想乡',
	    pics: ''
	};

	var ConfigStore = assign({}, EventEmitter.prototype, {

	    getAll: function getAll() {
	        return _todos;
	    },

	    get: function get(id) {
	        return _todos[id];
	    },

	    getMsg: function getMsg() {
	        var msg = _todos['msg'];
	        if (_todos['msg'] != '') {
	            _todos['msg'] = '';
	        }
	        return msg;
	    },

	    emitChange: function emitChange() {
	        this.emit(CHANGE_EVENT);
	    },

	    /**
	     * @param {function} callback
	     */
	    addChangeListener: function addChangeListener(callback) {
	        this.on(CHANGE_EVENT, callback);
	    },

	    /**
	     * @param {function} callback
	     */
	    removeChangeListener: function removeChangeListener(callback) {
	        this.removeListener(CHANGE_EVENT, callback);
	    }
	});

	module.exports = ConfigStore;

	// Register callback to handle all updates
	AppDispatcher.register(function (action) {
	    var data = action.data;
	    if (_todos[action.id] == data) {
	        return;
	    }
	    switch (action.actionType) {
	        case 'updateAll':
	            for (var key in data) {
	                update(key, data[key]);
	            }
	            break;
	        case 'updateArticle':
	            update(data.id, data);
	            update('title', data.title);
	            break;
	        default:
	            update(action.id, action.data);

	    }
	    ConfigStore.emitChange();
	});

	function update(id, data) {
	    _todos[id] = data;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _superagent = __webpack_require__(14);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _Apicloud = __webpack_require__(20);

	var _Apicloud2 = _interopRequireDefault(_Apicloud);

	var _Header = __webpack_require__(21);

	var _Header2 = _interopRequireDefault(_Header);

	var _Main = __webpack_require__(22);

	var _Main2 = _interopRequireDefault(_Main);

	var _Footer = __webpack_require__(27);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Layout = function (_React$Component) {
	    _inherits(Layout, _React$Component);

	    function Layout() {
	        _classCallCheck(this, Layout);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).call(this));

	        _this.state = {
	            msg: ''
	        };
	        // localStorage.lastname="Smith";
	        // sessionStorage.name = 'sdsd'
	        return _this;
	    }

	    _createClass(Layout, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // let url = 'react/user';
	            // request.get(url)
	            //     .end(function(err, res) {
	            //         if (err) throw err;
	            //         let data = JSON.parse(res.text)
	            //         ConfigActions.update('user', data)
	            //         storedb('players').insert(data, function(err, result) {
	            //             if (!err) {
	            //                 console.log(result)
	            //             } else {

	            //             }
	            //         })
	            //     }.bind(this));
	            var filter = {
	                where: {
	                    state: 1
	                },
	                order: ['order DESC', 'createdAt DESC'],
	                limit: 100
	            };
	            _Apicloud2.default.get('role', filter, function (err, res) {
	                var roles = JSON.parse(res.text);
	                ConfigActions.update('roles', roles);
	            });
	            ConfigStore.addChangeListener(this._onChange.bind(this));
	            window.onload = function () {
	                var load = document.getElementById('load');
	                load.className += " load_hide";
	            };
	            window.onhashchange = function () {
	                var hash = location.hash.split("?")[0];
	                if (old == '') {
	                    old = hash;
	                }
	                if (old != hash) {
	                    old = hash;
	                    ConfigActions.update('loading', 1);
	                }
	            };
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            return true;
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            ConfigStore.removeChangeListener(this._onChange.bind(this));
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange() {
	            var config = ConfigStore.getAll();
	            console.log(config);
	            window.document.title = config.title;
	            this.setState(config);
	        }
	    }, {
	        key: 'onScroll',
	        value: function onScroll() {
	            // var obj = document.getElementById('app')
	            // console.log(obj.offsetTop)
	            // console.log(window.scrollY)
	            ConfigActions.update('window_Y', window.scrollY);
	            // console.log(document.body.scrollTop)
	        }
	    }, {
	        key: 'onKeyPress',
	        value: function onKeyPress() {
	            console.log(32);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // console.log(ConfigStore.get('user'))
	            return React.createElement('div', {
	                className: 'warper'
	            }, React.createElement(_Header2.default), React.createElement(_Main2.default, {
	                location: this.props.location
	            }, this.props.children), React.createElement(_Footer2.default));
	        }
	    }]);

	    return Layout;
	}(React.Component);

	exports.default = Layout;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Module dependencies.
	 */

	var Emitter = __webpack_require__(15);
	var reduce = __webpack_require__(16);
	var requestBase = __webpack_require__(17);
	var isObject = __webpack_require__(18);

	/**
	 * Root reference for iframes.
	 */

	var root;
	if (typeof window !== 'undefined') {
	  // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') {
	  // Web Worker
	  root = self;
	} else {
	  // Other environments
	  root = undefined;
	}

	/**
	 * Noop.
	 */

	function noop() {};

	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isHost(obj) {
	  var str = {}.toString.call(obj);

	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Expose `request`.
	 */

	var request = module.exports = __webpack_require__(19).bind(null, Request);

	/**
	 * Determine XHR.
	 */

	request.getXHR = function () {
	  if (root.XMLHttpRequest && (!root.location || 'file:' != root.location.protocol || !root.ActiveXObject)) {
	    return new XMLHttpRequest();
	  } else {
	    try {
	      return new ActiveXObject('Microsoft.XMLHTTP');
	    } catch (e) {}
	    try {
	      return new ActiveXObject('Msxml2.XMLHTTP.6.0');
	    } catch (e) {}
	    try {
	      return new ActiveXObject('Msxml2.XMLHTTP.3.0');
	    } catch (e) {}
	    try {
	      return new ActiveXObject('Msxml2.XMLHTTP');
	    } catch (e) {}
	  }
	  return false;
	};

	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */

	var trim = ''.trim ? function (s) {
	  return s.trim();
	} : function (s) {
	  return s.replace(/(^\s*|\s*$)/g, '');
	};

	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */

	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    if (null != obj[key]) {
	      pushEncodedKeyValuePair(pairs, key, obj[key]);
	    }
	  }
	  return pairs.join('&');
	}

	/**
	 * Helps 'serialize' with serializing arrays.
	 * Mutates the pairs array.
	 *
	 * @param {Array} pairs
	 * @param {String} key
	 * @param {Mixed} val
	 */

	function pushEncodedKeyValuePair(pairs, key, val) {
	  if (Array.isArray(val)) {
	    return val.forEach(function (v) {
	      pushEncodedKeyValuePair(pairs, key, v);
	    });
	  }
	  pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
	}

	/**
	 * Expose serialization method.
	 */

	request.serializeObject = serialize;

	/**
	 * Parse the given x-www-form-urlencoded `str`.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var parts;
	  var pair;

	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    parts = pair.split('=');
	    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	  }

	  return obj;
	}

	/**
	 * Expose parser.
	 */

	request.parseString = parseString;

	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */

	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};

	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */

	request.serialize = {
	  'application/x-www-form-urlencoded': serialize,
	  'application/json': JSON.stringify
	};

	/**
	 * Default parsers.
	 *
	 *     superagent.parse['application/xml'] = function(str){
	 *       return { object parsed from str };
	 *     };
	 *
	 */

	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};

	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;

	  lines.pop(); // trailing CRLF

	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }

	  return fields;
	}

	/**
	 * Check if `mime` is json or has +json structured syntax suffix.
	 *
	 * @param {String} mime
	 * @return {Boolean}
	 * @api private
	 */

	function isJSON(mime) {
	  return (/[\/+]json\b/.test(mime)
	  );
	}

	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	function type(str) {
	  return str.split(/ *; */).shift();
	};

	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function params(str) {
	  return reduce(str.split(/ *; */), function (obj, str) {
	    var parts = str.split(/ *= */),
	        key = parts.shift(),
	        val = parts.shift();

	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};

	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */

	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = this.req.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
	  this.statusText = this.req.xhr.statusText;
	  this.setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this.setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD' ? this.parseBody(this.text ? this.text : this.xhr.response) : null;
	}

	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	Response.prototype.get = function (field) {
	  return this.header[field.toLowerCase()];
	};

	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */

	Response.prototype.setHeaderProperties = function (header) {
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);

	  // params
	  var obj = params(ct);
	  for (var key in obj) {
	    this[key] = obj[key];
	  }
	};

	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */

	Response.prototype.parseBody = function (str) {
	  var parse = request.parse[this.type];
	  if (!parse && isJSON(this.type)) {
	    parse = request.parse['application/json'];
	  }
	  return parse && str && (str.length || str instanceof Object) ? parse(str) : null;
	};

	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */

	Response.prototype.setStatusProperties = function (status) {
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }

	  var type = status / 100 | 0;

	  // status / class
	  this.status = this.statusCode = status;
	  this.statusType = type;

	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = 4 == type || 5 == type ? this.toError() : false;

	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};

	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */

	Response.prototype.toError = function () {
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;

	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;

	  return err;
	};

	/**
	 * Expose `Response`.
	 */

	request.Response = Response;

	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */

	function Request(method, url) {
	  var self = this;
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {}; // preserves header name case
	  this._header = {}; // coerces header names to lowercase
	  this.on('end', function () {
	    var err = null;
	    var res = null;

	    try {
	      res = new Response(self);
	    } catch (e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      // issue #675: return the raw response if the response parsing fails
	      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
	      // issue #876: return the http status code if the response parsing fails
	      err.statusCode = self.xhr && self.xhr.status ? self.xhr.status : null;
	      return self.callback(err);
	    }

	    self.emit('response', res);

	    if (err) {
	      return self.callback(err, res);
	    }

	    if (res.status >= 200 && res.status < 300) {
	      return self.callback(err, res);
	    }

	    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	    new_err.original = err;
	    new_err.response = res;
	    new_err.status = res.status;

	    self.callback(new_err, res);
	  });
	}

	/**
	 * Mixin `Emitter` and `requestBase`.
	 */

	Emitter(Request.prototype);
	for (var key in requestBase) {
	  Request.prototype[key] = requestBase[key];
	}

	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */

	Request.prototype.abort = function () {
	  if (this.aborted) return;
	  this.aborted = true;
	  this.xhr.abort();
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};

	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.type = function (type) {
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};

	/**
	 * Set responseType to `val`. Presently valid responseTypes are 'blob' and 
	 * 'arraybuffer'.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .responseType('blob')
	 *        .end(callback);
	 *
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.responseType = function (val) {
	  this._responseType = val;
	  return this;
	};

	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.accept = function (type) {
	  this.set('Accept', request.types[type] || type);
	  return this;
	};

	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @param {Object} options with 'type' property 'auto' or 'basic' (default 'basic')
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.auth = function (user, pass, options) {
	  if (!options) {
	    options = {
	      type: 'basic'
	    };
	  }

	  switch (options.type) {
	    case 'basic':
	      var str = btoa(user + ':' + pass);
	      this.set('Authorization', 'Basic ' + str);
	      break;

	    case 'auto':
	      this.username = user;
	      this.password = pass;
	      break;
	  }
	  return this;
	};

	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/

	Request.prototype.query = function (val) {
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};

	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.attach = function (field, file, filename) {
	  this._getFormData().append(field, file, filename || file.name);
	  return this;
	};

	Request.prototype._getFormData = function () {
	  if (!this._formData) {
	    this._formData = new root.FormData();
	  }
	  return this._formData;
	};

	/**
	 * Send `data` as the request body, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"}')
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	  *      request.post('/user')
	  *        .send('name=tobi')
	  *        .send('species=ferret')
	  *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.send = function (data) {
	  var obj = isObject(data);
	  var type = this._header['content-type'];

	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    if (!type) this.type('form');
	    type = this._header['content-type'];
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data ? this._data + '&' + data : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }

	  if (!obj || isHost(data)) return this;
	  if (!type) this.type('json');
	  return this;
	};

	/**
	 * @deprecated
	 */
	Response.prototype.parse = function serialize(fn) {
	  if (root.console) {
	    console.warn("Client-side parse() method has been renamed to serialize(). This method is not compatible with superagent v2.0");
	  }
	  this.serialize(fn);
	  return this;
	};

	Response.prototype.serialize = function serialize(fn) {
	  this._parser = fn;
	  return this;
	};

	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */

	Request.prototype.callback = function (err, res) {
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};

	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */

	Request.prototype.crossDomainError = function () {
	  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
	  err.crossDomain = true;

	  err.status = this.status;
	  err.method = this.method;
	  err.url = this.url;

	  this.callback(err);
	};

	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */

	Request.prototype.timeoutError = function () {
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};

	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */

	Request.prototype.withCredentials = function () {
	  this._withCredentials = true;
	  return this;
	};

	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.end = function (fn) {
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var query = this._query.join('&');
	  var timeout = this._timeout;
	  var data = this._formData || this._data;

	  // store callback
	  this._callback = fn || noop;

	  // state change
	  xhr.onreadystatechange = function () {
	    if (4 != xhr.readyState) return;

	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try {
	      status = xhr.status;
	    } catch (e) {
	      status = 0;
	    }

	    if (0 == status) {
	      if (self.timedout) return self.timeoutError();
	      if (self.aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };

	  // progress
	  var handleProgress = function handleProgress(e) {
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    e.direction = 'download';
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch (e) {}
	  // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	  // Reported here:
	  // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context


	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function () {
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }

	  // querystring
	  if (query) {
	    query = request.serializeObject(query);
	    this.url += ~this.url.indexOf('?') ? '&' + query : '?' + query;
	  }

	  // initiate request
	  if (this.username && this.password) {
	    xhr.open(this.method, this.url, true, this.username, this.password);
	  } else {
	    xhr.open(this.method, this.url, true);
	  }

	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;

	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
	    // serialize stuff
	    var contentType = this._header['content-type'];
	    var serialize = this._parser || request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
	    if (serialize) data = serialize(data);
	  }

	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }

	  if (this._responseType) {
	    xhr.responseType = this._responseType;
	  }

	  // send stuff
	  this.emit('request', this);

	  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
	  // We need null here if data is undefined
	  xhr.send(typeof data !== 'undefined' ? data : null);
	  return this;
	};

	/**
	 * Expose `Request`.
	 */

	request.Request = Request;

	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.get = function (url, data, fn) {
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.head = function (url, data, fn) {
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	function del(url, fn) {
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};

	request['del'] = del;
	request['delete'] = del;

	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.patch = function (url, data, fn) {
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.post = function (url, data, fn) {
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.put = function (url, data, fn) {
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function (event, fn) {
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function (event) {
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1),
	      callbacks = this._callbacks['$' + event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function (event) {
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function (event) {
	  return !!this.listeners(event).length;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Reduce `arr` with `fn`.
	 *
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Mixed} initial
	 *
	 * TODO: combatible error handling?
	 */

	module.exports = function (arr, fn, initial) {
	  var idx = 0;
	  var len = arr.length;
	  var curr = arguments.length == 3 ? initial : arr[idx++];

	  while (idx < len) {
	    curr = fn.call(null, curr, arr[idx], ++idx, arr);
	  }

	  return curr;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Module of mixed-in functions shared between node and client code
	 */
	var isObject = __webpack_require__(18);

	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.clearTimeout = function _clearTimeout() {
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};

	/**
	 * Force given parser
	 *
	 * Sets the body parser no matter type.
	 *
	 * @param {Function}
	 * @api public
	 */

	exports.parse = function parse(fn) {
	  this._parser = fn;
	  return this;
	};

	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.timeout = function timeout(ms) {
	  this._timeout = ms;
	  return this;
	};

	/**
	 * Faux promise support
	 *
	 * @param {Function} fulfill
	 * @param {Function} reject
	 * @return {Request}
	 */

	exports.then = function then(fulfill, reject) {
	  return this.end(function (err, res) {
	    err ? reject(err) : fulfill(res);
	  });
	};

	/**
	 * Allow for extension
	 */

	exports.use = function use(fn) {
	  fn(this);
	  return this;
	};

	/**
	 * Get request header `field`.
	 * Case-insensitive.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	exports.get = function (field) {
	  return this._header[field.toLowerCase()];
	};

	/**
	 * Get case-insensitive header `field` value.
	 * This is a deprecated internal API. Use `.get(field)` instead.
	 *
	 * (getHeader is no longer used internally by the superagent code base)
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 * @deprecated
	 */

	exports.getHeader = exports.get;

	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 * Case-insensitive.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.set = function (field, val) {
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};

	/**
	 * Remove header `field`.
	 * Case-insensitive.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 */
	exports.unset = function (field) {
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};

	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File|Buffer|fs.ReadStream} val
	 * @return {Request} for chaining
	 * @api public
	 */
	exports.field = function (name, val) {
	  this._getFormData().append(name, val);
	  return this;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(obj) {
	  return null != obj && 'object' == (typeof obj === 'undefined' ? 'undefined' : _typeof(obj));
	}

	module.exports = isObject;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	// The node and browser modules expose versions of this with the
	// appropriate constructor function bound as first argument
	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */

	function request(RequestConstructor, method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new RequestConstructor('GET', method).end(url);
	  }

	  // url first
	  if (2 == arguments.length) {
	    return new RequestConstructor('GET', method);
	  }

	  return new RequestConstructor(method, url);
	}

	module.exports = request;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _superagent = __webpack_require__(14);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var get = function get(url, filter, cb) {
	    if (window.navigator.onLine == true) {
	        var now = Date.now();
	        var key = SHA1(AppId + 'UZ' + AppKey + 'UZ' + now) + "." + now;
	        var token = storedb('user').find() ? storedb('user').find()[0].id : '';
	        _superagent2.default.get(AppUrl + url).set('X-APICloud-AppId', AppId).set('X-APICloud-AppKey', key).set('authorization', token).query({
	            filter: JSON.stringify(filter)
	        }).end(cb);
	    } else {
	        console.log('网络出现故障！');
	    }
	};

	var post = function post(url, info, cb) {
	    if (window.navigator.onLine == true) {
	        var now = Date.now();
	        var key = SHA1(AppId + 'UZ' + AppKey + 'UZ' + now) + "." + now;
	        var token = storedb('user').find() ? storedb('user').find()[0].id : '';
	        _superagent2.default.post(AppUrl + url).set('X-APICloud-AppId', AppId).set('X-APICloud-AppKey', key).set('authorization', token).send(info).end(cb);
	    } else {
	        console.log('网络出现故障！');
	    }
	};
	var Apicloud = {
	    get: get,
	    post: post
	};
	module.exports = Apicloud;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Apicloud = __webpack_require__(20);

	var _Apicloud2 = _interopRequireDefault(_Apicloud);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Link = ReactRouter.Link;

	var A = function (_React$Component) {
	    _inherits(A, _React$Component);

	    function A(props) {
	        _classCallCheck(this, A);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(A).call(this, props));
	    }

	    _createClass(A, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement('li', {
	                className: 'pure-menu-item'
	            }, React.createElement(Link, {
	                className: 'pure-menu-link',
	                to: '/' + this.props.to,
	                activeClassName: 'active'
	            }, this.props.title));
	        }
	    }]);

	    return A;
	}(React.Component);

	var Header = function (_React$Component2) {
	    _inherits(Header, _React$Component2);

	    function Header(props) {
	        _classCallCheck(this, Header);

	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));

	        _this2.state = {
	            menu: null
	        };
	        return _this2;
	    }

	    _createClass(Header, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var filter = {
	                where: {
	                    state: 1
	                },
	                order: ['order DESC', 'createdAt DESC'],
	                limit: 20
	            };
	            _Apicloud2.default.get('menu', filter, function (err, res) {
	                var menu = JSON.parse(res.text);
	                this.setState({
	                    menu: menu
	                });
	            }.bind(this));
	            var el = document.getElementById('ul');
	            var sortable = Sortable.create(el, {
	                onStart: function onStart( /**Event*/evt) {
	                    evt.oldIndex; // element index within parent
	                    console.log(evt.oldIndex);
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var user = storedb('user').find() ? true : false;
	            var islogin = void 0;
	            if (user) {
	                islogin = React.createElement(A, {
	                    to: 'logout',
	                    title: '登出'
	                });
	            } else {
	                islogin = React.createElement(A, {
	                    to: 'login',
	                    title: '登录'
	                });
	            }

	            var menus = void 0;
	            if (this.state.menu) {
	                menus = this.state.menu.map(function (d, index) {
	                    return React.createElement(A, {
	                        key: index,
	                        to: d.link,
	                        title: d.title
	                    });
	                });
	            }
	            return React.createElement('header', {
	                id: 'header',
	                className: 'pure-menu pure-menu-horizontal pure-menu-fixed'
	            }, React.createElement('div', {
	                className: 'container'
	            }, React.createElement('a', {
	                className: 'pure-menu-heading pure-menu-link left'
	            }, '我的理想乡'), React.createElement('ul', {
	                id: 'ul',
	                className: 'pure-menu-list left'
	            }, React.createElement(A, {
	                to: 'page',
	                title: '博文'
	            }), menus), React.createElement('ul', {
	                className: 'pure-menu-list right'
	            }, islogin)));
	        }
	    }]);

	    return Header;
	}(React.Component);

	exports.default = Header;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(23);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Loading = __webpack_require__(25);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _Msg = __webpack_require__(26);

	var _Msg2 = _interopRequireDefault(_Msg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Main = function (_React$Component) {
	    _inherits(Main, _React$Component);

	    function Main(props) {
	        _classCallCheck(this, Main);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this, props));
	    }

	    _createClass(Main, [{
	        key: 'render',
	        value: function render() {
	            var pathname = this.props.location.pathname;

	            var pathnames = pathname.split('/');
	            var key = pathnames[pathnames.length - 1] || 'root';
	            var loading = ConfigStore.get('loading');
	            var Class = (0, _classnames2.default)({
	                'swap': true,
	                'swap_show': loading == 0
	            });
	            return React.createElement(
	                'main',
	                { id: 'main', className: 'main' },
	                React.createElement(_Loading2.default, null),
	                React.createElement(_Msg2.default, null),
	                this.props.children
	            );
	        }
	    }]);

	    return Main;
	}(React.Component);

	exports.default = Main;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if ("function" === 'function' && _typeof(__webpack_require__(24)) === 'object' && __webpack_require__(24)) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 24 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(23);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Loading = function (_React$Component) {
	    _inherits(Loading, _React$Component);

	    function Loading() {
	        _classCallCheck(this, Loading);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Loading).apply(this, arguments));
	    }

	    _createClass(Loading, [{
	        key: 'render',
	        value: function render() {
	            var loading = ConfigStore.get('loading');
	            var Class = (0, _classnames2.default)({
	                'container loading': true,
	                'loading-hide': loading == 0
	            });
	            return React.createElement('section', {
	                className: Class
	            }, React.createElement('div', {
	                className: 'spinner'
	            }, React.createElement('div', {
	                className: 'bounce1'
	            }), React.createElement('div', {
	                className: 'bounce2'
	            }), React.createElement('div', {
	                className: 'bounce3'
	            })));
	        }
	    }]);

	    return Loading;
	}(React.Component);

	exports.default = Loading;

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
	    _inherits(Header, _React$Component);

	    function Header() {
	        _classCallCheck(this, Header);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
	    }

	    _createClass(Header, [{
	        key: 'render',
	        value: function render() {
	            var style = {
	                lineHeight: '40px'
	            };
	            var msg = ConfigStore.getMsg();
	            return msg ? React.createElement(
	                'section',
	                { className: 'container msg', style: style },
	                msg
	            ) : null;
	        }
	    }]);

	    return Header;
	}(React.Component);

	exports.default = Header;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ApiStore = __webpack_require__(28);

	var _ApiStore2 = _interopRequireDefault(_ApiStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
	    _inherits(Header, _React$Component);

	    function Header(props) {
	        _classCallCheck(this, Header);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));

	        _this.state = {
	            info: {}
	        };
	        return _this;
	    }

	    _createClass(Header, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _ApiStore2.default.get('acman/zhaiyanapi/tcrand?fangfa=json', function (err, res) {
	                var data = JSON.parse(res.text);
	                this.setState({
	                    info: data
	                });
	            }.bind(this));
	            // setInterval(this.api.bind(this), 20000)
	        }
	    }, {
	        key: 'api',
	        value: function api() {
	            _ApiStore2.default.get('acman/zhaiyanapi/tcrand?fangfa=json', function (err, res) {
	                var data = JSON.parse(res.text);
	                this.setState({
	                    info: data
	                });
	            }.bind(this));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement('footer', {
	                id: 'footer',
	                className: 'footer fixed-bottom'
	            }, this.state.info.taici, '—— ', this.state.info.source);
	        }
	    }]);

	    return Header;
	}(React.Component);

	exports.default = Header;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _superagent = __webpack_require__(14);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppUrl = 'http://apis.baidu.com/';
	var apikey = 'c01ea8775f1c2620b7dd6f5b6bcec93b';
	var get = function get(url, cb) {
	    if (window.navigator.onLine == true) {
	        _superagent2.default.get(AppUrl + url).set('apikey', apikey).end(cb);
	    } else {
	        console.log('网络出现故障！');
	    }
	};

	var post = function post(url, info, cb) {
	    console.log(window.navigator.onLine);
	    if (window.navigator.onLine == true) {
	        var now = Date.now();
	        var key = SHA1(AppId + 'UZ' + AppKey + 'UZ' + now) + "." + now;
	        _superagent2.default.post(AppUrl + url).set('X-APICloud-AppId', AppId).set('X-APICloud-AppKey', key).send(info).end(cb);
	    } else {
	        console.log('网络出现故障！');
	    }
	};
	var ApiStore = {
	    get: get,
	    post: post
	};
	module.exports = ApiStore;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _superagent = __webpack_require__(14);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _Apicloud = __webpack_require__(20);

	var _Apicloud2 = _interopRequireDefault(_Apicloud);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Main = function (_React$Component) {
	    _inherits(Main, _React$Component);

	    function Main(props) {
	        _classCallCheck(this, Main);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this, props));
	    }

	    _createClass(Main, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            ConfigActions.update('title', '这是首页');
	            setTimeout(function () {
	                ConfigActions.update('loading', 0);
	            }, 1);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'section',
	                { className: 'warp index' },
	                React.createElement(
	                    'section',
	                    { className: 'container pure-g' },
	                    React.createElement(
	                        'h3',
	                        { className: 'jumbotron-heading pure-u-1' },
	                        ' 这是首页 '
	                    ),
	                    ' ',
	                    React.createElement(
	                        'div',
	                        { className: 'service-box pure-u-1-3' },
	                        React.createElement(
	                            'figure',
	                            { className: 'figure' },
	                            React.createElement('img', { src: 'http://www.day.com/img?w=410&h=300&r=1',
	                                alt: '',
	                                className: 'img-responsive' })
	                        ),
	                        ' ',
	                        React.createElement(
	                            'h4',
	                            null,
	                            ' Never Leave Home '
	                        ),
	                        ' ',
	                        React.createElement(
	                            'p',
	                            { className: 'text-muted' },
	                            ' Unparalleled convenience: consult Doctors via video '
	                        ),
	                        ' '
	                    ),
	                    ' ',
	                    React.createElement(
	                        'div',
	                        { className: 'service-box pure-u-1-3' },
	                        React.createElement(
	                            'figure',
	                            { className: 'figure' },
	                            React.createElement('img', { src: 'app/images/1.png',
	                                alt: '',
	                                className: 'img-responsive' })
	                        ),
	                        ' ',
	                        React.createElement(
	                            'h4',
	                            null,
	                            ' Never Leave Home '
	                        ),
	                        ' ',
	                        React.createElement(
	                            'p',
	                            { className: 'text-muted' },
	                            ' Unparalleled convenience: consult Doctors via video without the hassle of visiting a hospital '
	                        ),
	                        ' '
	                    ),
	                    ' ',
	                    React.createElement(
	                        'div',
	                        { className: 'service-box pure-u-1-3' },
	                        React.createElement(
	                            'figure',
	                            { className: 'figure' },
	                            React.createElement('img', { src: 'http://www.day.com/img?w=410&h=300&r=3',
	                                alt: '',
	                                className: 'img-responsive' })
	                        ),
	                        ' ',
	                        React.createElement(
	                            'h4',
	                            null,
	                            ' Never Leave Home '
	                        ),
	                        ' ',
	                        React.createElement(
	                            'p',
	                            { className: 'text-muted' },
	                            ' Unparalleled convenience: consult Doctors via video without the hassle of visiting a hospital '
	                        ),
	                        ' '
	                    ),
	                    ' '
	                ),
	                ' '
	            );
	        }
	    }]);

	    return Main;
	}(React.Component);

	exports.default = Main;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Apicloud = __webpack_require__(20);

	var _Apicloud2 = _interopRequireDefault(_Apicloud);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Link = ReactRouter.Link;

	var Main = function (_React$Component) {
	    _inherits(Main, _React$Component);

	    function Main(props) {
	        _classCallCheck(this, Main);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this, props));

	        _this.state = {
	            info: {}
	        };
	        return _this;
	    }

	    _createClass(Main, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var filter = {
	                where: {},
	                skip: 0,
	                limit: 20
	            };
	            _Apicloud2.default.get('article', filter, function (err, res) {
	                var data = JSON.parse(res.text);
	                console.log(data);
	                loadingHide();
	                this.setState({
	                    info: data
	                });
	            }.bind(this));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var lists = void 0;
	            var active = {
	                color: '#f00'
	            };
	            if (this.state.info.length > 0) {
	                lists = this.state.info.map(function (d, index) {
	                    var url = '/page/' + d.id;
	                    var imgurl = "http://www.day.com/img?w=410&h=300&r=" + d.id;
	                    return React.createElement(
	                        Link,
	                        { to: url, activeStyle: active, className: 'service-box pure-u-1-3', key: index },
	                        React.createElement(
	                            'figure',
	                            { className: 'figure' },
	                            React.createElement('img', { src: imgurl, alt: d.title, className: 'img-responsive' })
	                        ),
	                        React.createElement(
	                            'h4',
	                            null,
	                            d.title
	                        ),
	                        React.createElement(
	                            'p',
	                            { className: 'text-muted' },
	                            'Unparalleled convenience: consult Doctors via video'
	                        )
	                    );
	                });
	            } else {
	                lists = '';
	            }
	            var pathname = this.props.location.pathname;

	            return React.createElement(
	                'section',
	                { className: 'warp index' },
	                React.createElement(
	                    'section',
	                    { className: 'container  pure-g' },
	                    React.createElement(
	                        'h3',
	                        { className: 'jumbotron-heading pure-u-1' },
	                        '文章管理'
	                    )
	                ),
	                React.createElement(
	                    'section',
	                    { className: 'container pure-g' },
	                    React.createElement(
	                        'h3',
	                        { className: 'jumbotron-heading pure-u-1' },
	                        '这是首页'
	                    ),
	                    lists
	                ),
	                this.props.children
	            );
	        }
	    }]);

	    return Main;
	}(React.Component);

	exports.default = Main;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(23);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Apicloud = __webpack_require__(20);

	var _Apicloud2 = _interopRequireDefault(_Apicloud);

	var _Canvas = __webpack_require__(32);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var swiper = void 0;

	var Login = function (_React$Component) {
	    _inherits(Login, _React$Component);

	    function Login(props) {
	        _classCallCheck(this, Login);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props));

	        _this.state = {
	            info: {},
	            style: {
	                transform: 'translateY(0)'
	            },
	            pics: [],
	            isshow: false
	        };
	        return _this;
	    }

	    _createClass(Login, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._req();
	        }
	    }, {
	        key: '_scroll',
	        value: function (_scroll2) {
	            function _scroll() {
	                return _scroll2.apply(this, arguments);
	            }

	            _scroll.toString = function () {
	                return _scroll2.toString();
	            };

	            return _scroll;
	        }(function () {
	            var style = _scroll(0.5);
	            this.setState(style);
	        })
	    }, {
	        key: '_req',
	        value: function _req() {
	            var action = 'article';
	            var articleId = this.props.params.articleId;

	            action = action + '/' + articleId;
	            var article = ConfigStore.get(articleId);
	            if (article) {
	                ConfigActions.update('title', article.title);
	                loadingHide();
	                this.setState(article);
	                this.swiperInit();
	            } else {
	                _Apicloud2.default.get(action, '', function (err, res) {
	                    article = JSON.parse(res.text);
	                    ConfigActions.updateArticle(article);
	                    loadingHide();
	                    this.setState(article);
	                    this.swiperInit();
	                }.bind(this));
	            }
	        }
	    }, {
	        key: 'swiperInit',
	        value: function swiperInit() {
	            swiper = new Swiper('.swiper-container', {
	                nextButton: '.swiper-button-next',
	                prevButton: '.swiper-button-prev',
	                pagination: '.swiper-pagination',
	                paginationClickable: true,
	                // Disable preloading of all images
	                preloadImages: false,
	                // Enable lazy loading
	                lazyLoading: true
	            });
	        }
	    }, {
	        key: '_hide',
	        value: function _hide() {
	            this.setState({
	                isshow: false
	            });
	        }
	    }, {
	        key: '_show',
	        value: function _show(e) {
	            e.stopPropagation();
	            var no = e.currentTarget.id.split("-")[1];
	            swiper.slideTo(no, 0, false);
	            this.setState({
	                isshow: true
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var imgsrc = this.state.thumb ? JSON.parse(this.state.thumb)[0] + '-max' : "http://www.day.com/img?w=1920&h=400&r=" + this.state.id;

	            var style = {
	                backgroundImage: 'url(' + imgsrc + ')'
	            };
	            var thumbs = void 0;
	            var pics = void 0;
	            if (this.state.pics && this.state.pics.length > 0) {
	                var files = JSON.parse(this.state.pics);
	                thumbs = files.map(function (file, index) {
	                    var id = 'swiper-' + index;
	                    file += '-thumb';
	                    return React.createElement(
	                        'div',
	                        { className: 'canvas', id: id, onClick: this._show.bind(this) },
	                        React.createElement(_Canvas2.default, { className: 'form-canva', src: file, width: 250, key: index })
	                    );
	                }.bind(this));
	                pics = files.map(function (file, index) {
	                    file += '-max';
	                    return React.createElement(
	                        'div',
	                        { className: 'swiper-slide', key: index },
	                        React.createElement('img', { 'data-src': file, className: 'swiper-lazy' }),
	                        React.createElement('div', { className: 'swiper-lazy-preloader swiper-lazy-preloader-white' })
	                    );
	                });
	            } else {
	                thumbs = '';
	                pics = '';
	            }
	            var swiperClass = (0, _classnames2.default)({
	                'swiper-container swiper-container-horizontal': true,
	                'swiper-show': this.state.isshow
	            });
	            var edit = '#/edit/' + this.state.id;
	            return React.createElement(
	                'section',
	                { className: 'warp page simditor' },
	                React.createElement(
	                    'section',
	                    { className: 'banner', style: this.state.style },
	                    React.createElement('div', { className: 'banner_i', style: style })
	                ),
	                React.createElement(
	                    'section',
	                    { className: 'contents' },
	                    React.createElement(
	                        'section',
	                        { className: 'container' },
	                        React.createElement(
	                            'div',
	                            { className: 'header' },
	                            React.createElement(
	                                'h1',
	                                null,
	                                this.state.title,
	                                '--',
	                                React.createElement(
	                                    'a',
	                                    { href: edit },
	                                    '编辑'
	                                )
	                            ),
	                            React.createElement(
	                                'h2',
	                                null,
	                                this.state.description
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            { className: 'content simditor-body' },
	                            React.createElement(
	                                'div',
	                                { className: 'thumbs' },
	                                thumbs
	                            ),
	                            React.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.content } })
	                        )
	                    )
	                ),
	                React.createElement(
	                    'section',
	                    { className: swiperClass },
	                    React.createElement(
	                        'div',
	                        { className: 'swiper-wrapper', onClick: this._hide.bind(this) },
	                        pics
	                    ),
	                    React.createElement('div', { className: 'swiper-pagination swiper-pagination-white' }),
	                    React.createElement('div', { className: 'swiper-button-next swiper-button-white' }),
	                    React.createElement('div', { className: 'swiper-button-prev swiper-button-white' })
	                )
	            );
	        }
	    }]);

	    return Login;
	}(React.Component);

	exports.default = Login;

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	// import {
	//     Surface,
	//     Image,
	//     Text
	// } from 'react-canvas'

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Canvas = function (_React$Component) {
	    _inherits(Canvas, _React$Component);

	    function Canvas(props) {
	        _classCallCheck(this, Canvas);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Canvas).call(this, props));

	        _this.state = {
	            width: props.width,
	            height: props.height || props.width
	        };
	        return _this;
	    }

	    _createClass(Canvas, [{
	        key: 'render',
	        value: function render() {
	            var style = void 0;
	            return React.createElement('div', {
	                style: {
	                    width: this.state.width,
	                    height: this.state.height
	                }
	            }, React.createElement('img', {
	                style: {
	                    width: this.state.width,
	                    height: this.state.height,
	                    display: 'block'
	                },
	                src: this.props.src
	            }))
	            // React.createElement(Surface, {
	            //         width: this.state.width,
	            //         height: this.state.height,
	            //         top: 0,
	            //         left: 0
	            //     },
	            //     React.createElement(Image, {
	            //         style: {
	            //             width: this.state.width,
	            //             height: this.state.height,
	            //             top: 0,
	            //             left: 0
	            //         },
	            //         src: this.props.src
	            //     })
	            // )
	            ;
	        }
	    }]);

	    return Canvas;
	}(React.Component);

	exports.default = Canvas;


	Canvas.defaultProps = {
	    width: 200
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _superagent = __webpack_require__(14);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _Apicloud = __webpack_require__(20);

	var _Apicloud2 = _interopRequireDefault(_Apicloud);

	var _index = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Add = function (_React$Component) {
	    _inherits(Add, _React$Component);

	    function Add(props) {
	        _classCallCheck(this, Add);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Add).call(this, props));

	        _this.state = {
	            info: null
	        };
	        return _this;
	    }

	    _createClass(Add, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            // this._req()
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._req();
	        }
	    }, {
	        key: '_req',
	        value: function _req() {
	            var action = 'article';
	            var articleId = this.props.params.articleId;

	            _Apicloud2.default.get('model?filter={"where":{"model":"article"}}', '', function (err, res) {
	                var state = {};
	                var model = JSON.parse(res.text);
	                action = action + '/' + articleId;
	                if (articleId) {
	                    var article = ConfigStore.get(articleId);
	                    if (article) {
	                        article._method = 'PUT';
	                        this.setState({
	                            model: model,
	                            info: article,
	                            action: action,
	                            id: articleId
	                        });
	                    } else {
	                        _Apicloud2.default.get(action, '', function (err, res) {
	                            var article = JSON.parse(res.text);
	                            article._method = 'PUT';
	                            ConfigActions.update('title', article.title);
	                            this.setState({
	                                model: model,
	                                info: article,
	                                action: action,
	                                id: articleId
	                            });
	                        }.bind(this));
	                    }
	                } else {
	                    var userId = storedb('user').find()[0].userId;
	                    this.setState({
	                        model: model,
	                        action: action,
	                        info: {
	                            userId: userId
	                        }
	                    });
	                }
	            }.bind(this));
	            loadingHide();
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange(name, value) {
	            var info = this.state.info;
	            info[name] = value;
	            this.setState({
	                info: info
	            });
	        }
	    }, {
	        key: '_onSubmit',
	        value: function _onSubmit(data) {
	            ConfigActions.update('title', data.title);
	            ConfigActions.update(data.id, data);
	            if (!this.state.id) {
	                ConfigActions.update('msg', '发布成功！');
	                window.location.href = '/#/page/' + data.id;
	            } else {
	                ConfigActions.update('msg', '保存成功！');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var render = void 0;
	            var forms = void 0;
	            var info = this.state.info;
	            var model = this.state.model;
	            if (model) {
	                (function () {
	                    var onChange = _this2._onChange.bind(_this2);
	                    forms = model.map(function (d, index) {
	                        d.value = info[d.name] || d.default;
	                        d.key = d.name;
	                        d.onChange = onChange;
	                        switch (d.type) {
	                            case "text":
	                                return React.createElement(_index.Input, d);
	                                break;
	                            case "password":
	                                return React.createElement(_index.Input, d);
	                                break;
	                            case "email":
	                                return React.createElement(_index.Input, d);
	                                break;
	                            case "textarea":
	                                return React.createElement(_index.Textarea, d);
	                                break;
	                            case "upload":
	                                return React.createElement(_index.Upload, d);
	                                break;
	                            case "image":
	                                return React.createElement(_index.Upload, d);
	                                break;
	                            case "editer":
	                                return React.createElement(_index.Editer, d);
	                                break;
	                            case "radio":
	                                return React.createElement(_index.Radio, d);
	                                break;
	                            case "checkbox":
	                                return React.createElement(_index.Radio, d);
	                                break;
	                            default:
	                                break;
	                        }
	                    });
	                })();
	            }
	            if (info) {
	                render = React.createElement('section', {
	                    className: 'container'
	                }, React.createElement('h3', null, info.title), React.createElement(_index.Form, {
	                    action: this.state.action,
	                    info: info,
	                    legend: info.title,
	                    onSubmit: this._onSubmit.bind(this)
	                }, forms, React.createElement(_index.Button)));
	            }
	            return React.createElement('section', {
	                className: 'warp'
	            }, render);
	        }
	    }]);

	    return Add;
	}(React.Component);

	exports.default = Add;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Form = __webpack_require__(35);

	var _Form2 = _interopRequireDefault(_Form);

	var _Input = __webpack_require__(40);

	var _Input2 = _interopRequireDefault(_Input);

	var _Textarea = __webpack_require__(43);

	var _Textarea2 = _interopRequireDefault(_Textarea);

	var _Editer = __webpack_require__(44);

	var _Editer2 = _interopRequireDefault(_Editer);

	var _Canvas = __webpack_require__(32);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	var _Upload = __webpack_require__(45);

	var _Upload2 = _interopRequireDefault(_Upload);

	var _Radio = __webpack_require__(48);

	var _Radio2 = _interopRequireDefault(_Radio);

	var _Checkbox = __webpack_require__(49);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _Range = __webpack_require__(50);

	var _Range2 = _interopRequireDefault(_Range);

	var _Button = __webpack_require__(51);

	var _Button2 = _interopRequireDefault(_Button);

	var _Hidden = __webpack_require__(52);

	var _Hidden2 = _interopRequireDefault(_Hidden);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Forms = {
	    Form: _Form2.default,
	    Input: _Input2.default,
	    Textarea: _Textarea2.default,
	    Editer: _Editer2.default,
	    Canvas: _Canvas2.default,
	    Upload: _Upload2.default,
	    Radio: _Radio2.default,
	    Checkbox: _Checkbox2.default,
	    Range: _Range2.default,
	    Button: _Button2.default,
	    Hidden: _Hidden2.default
	};
	module.exports = Forms;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Apicloud = __webpack_require__(20);

	var _Apicloud2 = _interopRequireDefault(_Apicloud);

	var _classnames = __webpack_require__(23);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(36);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Form = function (_React$Component) {
	    _inherits(Form, _React$Component);

	    function Form(props) {
	        _classCallCheck(this, Form);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props));
	    }

	    _createClass(Form, [{
	        key: 'handleSubmit',
	        value: function handleSubmit(e) {
	            e.preventDefault();
	            if (this.props.locked) {
	                return;
	            }
	            if (this.props.apiSubmit) {
	                _Apicloud2.default.post(this.props.action, this.props.info, function (err, res) {
	                    var data = JSON.parse(res.text);
	                    if (data.error) {
	                        ConfigActions.update('msg', data.error.message);
	                    } else {
	                        this.props.onSubmit(data);
	                    }
	                }.bind(this));
	            } else {
	                this.props.onSubmit(e);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement('form', {
	                className: 'form-fields form-horizontal',
	                role: 'form',
	                encType: 'multipart/form-data',
	                onSubmit: this.handleSubmit.bind(this)
	            }, React.createElement('fieldset', {
	                className: 'form-fieldset'
	            }, React.createElement('legend', {
	                className: 'form-legend'
	            }, this.props.legend), this.props.children));
	        }
	    }]);

	    return Form;
	}(React.Component);

	exports.default = Form;

	Form.defaultProps = {
	    apiSubmit: true
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(39)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./Form.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./Form.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports


	// module
	exports.push([module.id, ".form-fields {\n  width: 100%; }\n  .form-fields .form-fieldset {\n    padding-top: 45px;\n    margin: 0; }\n  .form-fields .form-legend {\n    padding: 0 15px;\n    font-size: 18px; }\n\n.form-group {\n  position: relative;\n  width: 100%;\n  padding: 0 15px;\n  margin-bottom: 15px;\n  line-height: 32px; }\n  .form-group .form-label {\n    color: #333;\n    font-size: 14px;\n    line-height: 32px;\n    height: 32px;\n    display: block; }\n  .form-group .form-control {\n    position: relative; }\n  .form-group .form-input, .form-group .form-textarea {\n    display: block;\n    width: 100%;\n    margin: 0;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n    -moz-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s; }\n  .form-group .form-input {\n    height: 34px; }\n  .form-group .form-textarea {\n    max-width: 100%;\n    min-width: 100%;\n    min-height: 72px;\n    word-wrap: break-word;\n    overflow-x: hidden;\n    overflow-y: auto;\n    _overflow-y: visible; }\n  .form-group .form-range {\n    width: 100%;\n    margin: 0;\n    display: block;\n    height: 34px;\n    padding: 6px 0; }\n  .form-group .form-radio {\n    margin-right: 15px; }\n  .form-group .form-canvas {\n    width: 100%; }\n    .form-group .form-canvas canvas {\n      display: block;\n      float: left;\n      margin: 3px; }\n  .form-group .form-help {\n    display: block;\n    margin: 5px 0;\n    color: #737373;\n    font-size: 14px;\n    line-height: 20px;\n    clear: both; }\n  .form-group .form-ico {\n    display: block;\n    position: absolute;\n    z-index: 3;\n    float: right;\n    right: 8px;\n    margin: 10px 2px 4px 10px;\n    min-width: 16px;\n    height: 16px;\n    line-height: 16px;\n    color: #ccc;\n    font-style: normal; }\n\n@media screen and (min-width: 480px) {\n  .form-horizontal .form-label {\n    padding-right: 10px;\n    float: left;\n    width: 100px;\n    text-align: right;\n    position: absolute;\n    top: 0; }\n  .form-horizontal .form-control {\n    padding-left: 100px; } }\n\n.has-error .form-input, .has-error .form-textarea, .has-warning .form-input, .has-warning .form-textarea {\n  color: #a94442;\n  border-color: #ebccd1; }\n\n.has-error .form-label, .has-error .form-ico, .has-error .form-help, .has-warning .form-label, .has-warning .form-ico, .has-warning .form-help {\n  color: #a94442; }\n\n.has-error .form-ico::before {\n  content: \"\\F12A\"; }\n\n.has-warning .form-ico::before {\n  content: \"\\F071\"; }\n\n.has-success .form-ico::before {\n  content: \"\\F00C\"; }\n\n.has-success .form-input, .has-success .form-textarea {\n  color: #3c763d;\n  border-color: #3c763d; }\n\n.has-success .form-ico, .has-success .form-help {\n  color: #3c763d; }\n", ""]);

	// exports


/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(23);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _regs = __webpack_require__(41);

	var _regs2 = _interopRequireDefault(_regs);

	var _FormGroup = __webpack_require__(42);

	var _FormGroup2 = _interopRequireDefault(_FormGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Input = function (_React$Component) {
	    _inherits(Input, _React$Component);

	    function Input(props) {
	        _classCallCheck(this, Input);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));

	        _this.state = {
	            value: props.value,
	            help: props.help
	        };
	        return _this;
	    }

	    _createClass(Input, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var length = this.props.value.length || 0;
	            var help = this.props.help || '请输入' + this.props.title;
	            this.setState({
	                help: help,
	                length: length
	            });
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return nextProps.value !== this.props.value;
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.state = {
	                value: nextProps.value
	            };
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange(e) {
	            var error = void 0;
	            var warning = void 0;
	            var success = void 0;
	            var value = e.target.value.replace(/(^\s*)|(\s*$)/, "");
	            var length = value.length;
	            var help = this.props.help || '请输入' + this.props.title;
	            if (length > 0) {
	                if (this.props.min && length < this.props.min) {
	                    help = '请输入至少' + this.props.min + '个字符！';
	                    error = true;
	                } else if (this.props.max && length > this.props.max) {
	                    help = '请输入至多' + this.props.max + '个字符！';
	                    error = true;
	                }
	                if (!error) {
	                    success = true;
	                }
	            } else if (this.props.required) {
	                help = this.props.title + '必须填写！';
	                warning = true;
	            }
	            this.setState({
	                value: value,
	                help: help,
	                length: length,
	                error: error,
	                warning: warning,
	                success: success
	            });
	            if (this.props.onChange) {
	                this.props.onChange(this.props.name, value);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var Class = (0, _classnames2.default)({
	                'has-error': this.state.error,
	                'has-warning': this.state.warning,
	                'has-success': this.state.success
	            });
	            var limit = ' ' + this.state.length;
	            if (this.props.max) {
	                limit += ' / ' + this.props.max;
	            }
	            return React.createElement(_FormGroup2.default, {
	                class: Class,
	                title: this.props.title,
	                limit: limit,
	                help: this.state.help
	            }, React.createElement('input', {
	                className: 'form-input',
	                type: this.props.type,
	                max: this.props.max,
	                min: this.props.min,
	                placeholder: this.props.placeholder,
	                disabled: this.props.disabled,
	                autoComplete: this.props.autoComplete,
	                value: this.state.value,
	                onChange: this._onChange.bind(this)
	            }));
	        }
	    }]);

	    return Input;
	}(React.Component);

	exports.default = Input;


	Input.defaultProps = {
	    type: 'text',
	    value: '',
	    autocomplete: 'off',
	    required: 'required'
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  'email': /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,
	  'email-help': '邮箱格式不对，请重新输入！',
	  'url': /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
	  'number': /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
	  //'date': /^(\d{4})-(\d{2})-(\d{2})$/,
	  'alpha': /^[a-z ._-]+$/i,
	  'alphanum': /^[a-z0-9_]+$/i,
	  'password': /^[\x00-\xff]+$/,
	  'integer': /^[-+]?[0-9]+$/,
	  'tel': /^[\d\s ().-]+$/,
	  'hex': /^#[0-9a-f]{6}?$/i,
	  'rgb': new RegExp('^rgb\\(\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*\\)$'),
	  'rgba': new RegExp('^rgba\\(\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*((0.[1-9]*)|[01])\\s*\\)$'),
	  'hsv': new RegExp('^hsv\\(\\s*(0|[1-9]\\d?|[12]\\d\\d|3[0-5]\\d)\\s*,\\s*((0|[1-9]\\d?|100)%)\\s*,\\s*((0|[1-9]\\d?|100)%)\\s*\\)$')
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(23);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormGroup = function (_React$Component) {
	    _inherits(FormGroup, _React$Component);

	    function FormGroup(props) {
	        _classCallCheck(this, FormGroup);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(FormGroup).call(this, props));
	    }

	    _createClass(FormGroup, [{
	        key: 'render',
	        value: function render() {
	            var classname = this.props.class ? 'form-group ' + this.props.class : 'form-group';
	            return React.createElement('div', {
	                className: classname
	            }, React.createElement('label', {
	                className: 'form-label'
	            }, this.props.title), React.createElement('div', {
	                className: 'form-control'
	            }, this.props.limit ? React.createElement('i', {
	                className: 'form-ico fa'
	            }, this.props.limit) : null, this.props.children, this.props.help ? React.createElement('span', {
	                className: 'form-help'
	            }, this.props.help) : null));
	        }
	    }]);

	    return FormGroup;
	}(React.Component);

	exports.default = FormGroup;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(23);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _FormGroup = __webpack_require__(42);

	var _FormGroup2 = _interopRequireDefault(_FormGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Textarea = function (_React$Component) {
	    _inherits(Textarea, _React$Component);

	    function Textarea(props) {
	        _classCallCheck(this, Textarea);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Textarea).call(this, props));

	        _this.state = {
	            value: props.value,
	            help: props.help,
	            error: false,
	            warning: false,
	            success: false
	        };
	        return _this;
	    }

	    _createClass(Textarea, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var length = this.props.value.length;
	            var help = this.props.help || '请输入' + this.props.title;
	            this.setState({
	                help: help,
	                length: length
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return nextProps.value !== this.props.value;
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange(e) {
	            var error = void 0;
	            var warning = void 0;
	            var success = void 0;
	            var value = e.target.value.replace(/(^\s*)|(\s*$)/, "");
	            var length = value.length;
	            var help = this.props.help || '请输入' + this.props.title;
	            if (length > 0) {
	                if (this.props.min && length < this.props.min) {
	                    help = '请输入至少' + this.props.min + '个字符！';
	                    error = true;
	                } else if (this.props.max && length > this.props.max) {
	                    help = '请输入至多' + this.props.max + '个字符！';
	                    error = true;
	                }
	                if (!error) {
	                    success = true;
	                }
	            } else if (this.props.required) {
	                help = this.props.title + '必须填写！';
	                warning = true;
	            }
	            this.setState({
	                value: value,
	                help: help,
	                length: length,
	                error: error,
	                warning: warning,
	                success: success
	            });
	            if (this.props.onChange) {
	                this.props.onChange(this.props.name, value);
	            }
	        }
	    }, {
	        key: 'onWheel',
	        value: function onWheel(obj) {
	            console.log(obj);
	            console.log(obj.currentTarget.offsetTop);
	        }
	    }, {
	        key: 'onKeyPress',
	        value: function onKeyPress(obj) {
	            console.log(obj);
	            console.log(obj.nativeEvent.charCode);
	        }
	    }, {
	        key: 'onCopy',
	        value: function onCopy(obj) {
	            console.log(obj);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var Class = (0, _classnames2.default)({
	                'has-error': this.state.error,
	                'has-warning': this.state.warning,
	                'has-success': this.state.success
	            });
	            var limit = ' ' + this.state.length;
	            if (this.props.max) {
	                limit += ' / ' + this.props.max;
	            }
	            return React.createElement(_FormGroup2.default, {
	                class: Class,
	                title: this.props.title,
	                limit: limit,
	                help: this.state.help,
	                onWheel: this.onWheel.bind(this),
	                onCopy: this.onCopy.bind(this),
	                onKeyPress: this.onKeyPress.bind(this)
	            }, React.createElement('textarea', {
	                className: 'form-textarea',
	                rows: this.props.rows,
	                placeholder: this.props.placeholder,
	                disabled: this.props.disabled,
	                autoComplete: this.props.autoComplete,
	                value: this.state.value,
	                onChange: this._onChange.bind(this)
	            }));
	        }
	    }]);

	    return Textarea;
	}(React.Component);

	exports.default = Textarea;


	Textarea.defaultProps = {
	    title: '字段名称',
	    value: '',
	    placeholder: '',
	    help: '',
	    disabled: '',
	    autocomplete: 'off',
	    required: 'required',
	    min: 2,
	    rows: 2
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(23);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _FormGroup = __webpack_require__(42);

	var _FormGroup2 = _interopRequireDefault(_FormGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var editor = void 0;

	var Editer = function (_React$Component) {
	    _inherits(Editer, _React$Component);

	    function Editer() {
	        _classCallCheck(this, Editer);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Editer).call(this));

	        _this.state = {
	            num: false
	        };
	        return _this;
	    }

	    _createClass(Editer, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var editor_ID = '#' + this.props.name;
	            var toolbar = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment'];
	            editor = new Simditor({
	                textarea: $(editor_ID),
	                toolbar: toolbar,
	                toolbarFloat: false,
	                toolbarFloatOffset: '100px'
	            });
	            editor.on('valuechanged', function (event) {
	                var v = editor.getValue();
	                if (v == this.props.value) {
	                    return;
	                }
	                if (this.props.onChange) {
	                    this.props.onChange(this.props.name, v);
	                }
	                event.preventDefault();
	            }.bind(this));
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return nextProps.value !== this.props.value;
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange(e) {
	            return;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var help = this.props.help || '请输入' + this.props.title;
	            var placeholder = this.props.help || '请输入' + this.props.title;
	            return React.createElement(_FormGroup2.default, {
	                title: this.props.title,
	                help: help
	            }, React.createElement('textarea', {
	                id: this.props.name,
	                className: 'form-textarea',
	                rows: this.props.rows,
	                placeholder: placeholder,
	                disabled: this.props.disabled,
	                autoComplete: this.props.autoComplete,
	                value: this.props.value,
	                onChange: this._onChange.bind(this)
	            }));
	        }
	    }]);

	    return Editer;
	}(React.Component);

	exports.default = Editer;


	Editer.defaultProps = {
	    title: '项目名称',
	    value: '',
	    name: 'content',
	    disabled: '',
	    autocomplete: 'off',
	    required: 'required'
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(23);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _AjaxUpload = __webpack_require__(46);

	var _AjaxUpload2 = _interopRequireDefault(_AjaxUpload);

	var _Qiniu = __webpack_require__(47);

	var _Canvas = __webpack_require__(32);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	var _FormGroup = __webpack_require__(42);

	var _FormGroup2 = _interopRequireDefault(_FormGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var swiper2 = void 0;

	var Upload = function (_React$Component) {
	    _inherits(Upload, _React$Component);

	    function Upload(props) {
	        _classCallCheck(this, Upload);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Upload).call(this, props));

	        _this.state = {
	            files: props.files,
	            thumbs: props.thumbs,
	            help: props.help,
	            multiple: props.multiple
	        };
	        return _this;
	    }

	    _createClass(Upload, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var thumbs = this.props.value;
	            if (thumbs) {
	                thumbs = JSON.parse(thumbs);
	            } else {
	                thumbs = [];
	            }
	            var files = [];
	            var count = thumbs.length;
	            if (count == 0) {
	                return;
	            }
	            if (this.props.multiple) {
	                var i = void 0;
	                for (i = 0; i < count; i++) {
	                    var file = [];
	                    file.thumb = thumbs[i];
	                    file.state = 4;
	                    files[i] = file;
	                }
	            } else {
	                var _file = [];
	                var thumb = [];
	                _file.thumb = thumbs[0];
	                _file.state = 4;
	                files[0] = _file;
	                thumb.concat(thumbs[0]);
	                thumbs = thumb;
	            }
	            this.setState({
	                files: files,
	                thumbs: thumbs
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.swiperInit();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.swiperInit();
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange(e) {
	            e.preventDefault();
	            var files = e.target.files;
	            // 文件过滤
	            // 只允许上传图片
	            files = Array.prototype.slice.call(files, 0);
	            files = files.filter(function (file) {
	                return (/image/i.test(file.type)
	                );
	            });
	            var value = void 0;
	            if (this.props.multiple) {
	                value = this.state.files;
	            } else {
	                value = [];
	            }
	            var count = this.props.multiple ? files.length : 1;
	            var i = void 0;
	            for (i = 0; i < count; i++) {
	                files[i].thumb = URL.createObjectURL(files[i]);
	                files[i].state = 0;
	                value = value.concat(files[i]);
	            }
	            this.setState({
	                files: value
	            });
	            var count2 = this.props.multiple ? value.length : 1;
	            for (i = 0; i < count2; i++) {
	                if (value[i].state != 1 && value[i].state != 4) {
	                    this.uploadFile(value, i);
	                }
	            }
	        }
	    }, {
	        key: 'uploadFile',
	        value: function uploadFile(files, id) {
	            var _this2 = this;

	            var qnurl = 'http://7xj11y.com1.z0.glb.clouddn.com';
	            var token = (0, _Qiniu.getUpToken)();
	            var file = files[id];
	            return (0, _AjaxUpload2.default)({
	                url: 'http://up.qiniu.com',
	                name: 'file',
	                key: file.name,
	                token: token,
	                cors: this.props.cors,
	                withCredentials: this.props.withCredentials,
	                file: file,
	                onProgress: function onProgress(e) {
	                    console.log(e.loaded / e.total * 100 + '%');
	                },
	                onLoad: function onLoad(e) {
	                    var thumbs = void 0;
	                    var res = JSON.parse(e.currentTarget.responseText);
	                    files[id].state = 1;
	                    // file.url = qnurl + '/' + res.name
	                    if (_this2.props.multiple) {
	                        thumbs = _this2.state.thumbs;
	                    } else {
	                        thumbs = [];
	                    }
	                    thumbs.push(qnurl + '/' + res.name);
	                    _this2.setState({
	                        files: files,
	                        thumbs: thumbs
	                    });
	                    thumbs = JSON.stringify(thumbs);
	                    if (_this2.props.onChange) {
	                        _this2.props.onChange(_this2.props.name, thumbs);
	                    }
	                },
	                onError: function onError() {
	                    files[id].state = 2;
	                    _this2.setState({
	                        files: files
	                    });
	                }
	            });
	        }
	    }, {
	        key: '_onClickd',
	        value: function _onClickd(e) {
	            if (this.props.multiple) {
	                console.log(1232);
	                e.stopPropagation();
	            } else {
	                console.log(123);
	            }
	        }
	    }, {
	        key: 'swiperInit',
	        value: function swiperInit() {
	            var swiper = '#swiper' + this.props.name;
	            var nextButton = '.swiper-next-' + this.props.name;
	            var prevButton = '.swiper-prev-' + this.props.name;
	            var pagination = '.swiper-pagination-' + this.props.name;
	            if (this.state.multiple) {
	                swiper2 = new Swiper(swiper, {
	                    nextButton: nextButton,
	                    prevButton: prevButton,
	                    pagination: pagination,
	                    paginationClickable: true,
	                    direction: 'horizontal',
	                    // Disable preloading of all images
	                    preloadImages: false,
	                    // Enable lazy loading
	                    lazyLoading: true
	                });
	            } else // loop: true
	                {
	                    new Swiper(swiper, {
	                        nextButton: nextButton,
	                        prevButton: prevButton,
	                        pagination: pagination,
	                        paginationClickable: true,
	                        direction: 'horizontal',
	                        // Disable preloading of all images
	                        preloadImages: false,
	                        // Enable lazy loading
	                        lazyLoading: true
	                    });
	                }
	        }
	    }, {
	        key: '_hide',
	        // loop: true
	        value: function _hide() {
	            this.setState({
	                isshow: false
	            });
	        }
	    }, {
	        key: '_show',
	        value: function _show(e) {
	            e.stopPropagation();
	            var no = e.currentTarget.id.split("-")[1];
	            if (this.state.multiple) {
	                swiper2.slideTo(no, 1, false);
	            }
	            this.setState({
	                isshow: true
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var thumbs = void 0;
	            var pics = void 0;
	            if (this.state.files.length > 0) {
	                thumbs = this.state.files.map(function (file, index) {
	                    var msg = void 0;
	                    switch (file.state) {
	                        case 0:
	                            msg = '等待上传';
	                            break;
	                        case 1:
	                            msg = '上传成功';
	                            break;
	                        case 2:
	                            msg = '上传失败';
	                            break;
	                        case 3:
	                            msg = '上传中';
	                            break;
	                        case 4:
	                            msg = '已上传';
	                            break;
	                        default:
	                            break;
	                    }
	                    var style = {
	                        float: 'left',
	                        animationDelay: 50 * index + 'ms',
	                        animationDuration: '500ms',
	                        paddingRight: '5px'
	                    };
	                    var thumb = file.thumb;
	                    var patt1 = new RegExp("blob:http");
	                    if (!patt1.test(thumb)) {
	                        thumb += '-thumb';
	                    }
	                    var id = 'swiper-' + index;
	                    return React.createElement('div', {
	                        key: index,
	                        className: 'animated zoomIn',
	                        id: id,
	                        style: style,
	                        onClick: this._show.bind(this)
	                    }, React.createElement(_Canvas2.default, {
	                        className: 'form-canva',
	                        src: thumb
	                    }), React.createElement('div', null, msg));
	                }.bind(this));
	                pics = this.state.files.map(function (file, index) {
	                    var thumb = file.thumb;
	                    var patt1 = new RegExp("blob:http");
	                    if (!patt1.test(thumb)) {
	                        thumb += '-max';
	                    }
	                    return React.createElement('div', {
	                        key: index,
	                        className: 'swiper-slide'
	                    }, React.createElement('img', {
	                        className: 'swiper-lazy',
	                        'data-src': thumb
	                    }), React.createElement('div', {
	                        className: 'swiper-lazy-preloader swiper-lazy-preloader-white'
	                    }));
	                }.bind(this));
	            } else {
	                thumbs = '';
	                pics = '';
	            }
	            var swiper = 'swiper' + this.props.name;
	            var nextButton = 'swiper-button-next swiper-button-white swiper-next-' + this.props.name;
	            var prevButton = 'swiper-button-prev swiper-button-white swiper-prev-' + this.props.name;
	            var pagination = 'swiper-pagination swiper-pagination-white swiper-pagination-' + this.props.name;
	            var swiperClass = (0, _classnames2.default)({
	                'swiper-container swiper-upload': true,
	                'swiper-show': this.state.isshow
	            });
	            return React.createElement(_FormGroup2.default, {
	                title: this.props.title
	            }, React.createElement('input', {
	                id: 'file',
	                name: 'file',
	                className: 'ipt',
	                type: 'file',
	                multiple: 'multiple',
	                onChange: this._onChange.bind(this)
	            }), React.createElement('div', {
	                className: 'form-canvas'
	            }, thumbs), React.createElement('div', {
	                className: 'clear'
	            }), React.createElement('section', {
	                id: swiper,
	                className: swiperClass
	            }, React.createElement('div', {
	                className: 'swiper-wrapper',
	                onClick: this._hide.bind(this)
	            }, pics), React.createElement('div', {
	                className: pagination
	            }), React.createElement('div', {
	                className: nextButton
	            }), React.createElement('div', {
	                className: prevButton
	            })));
	        }
	    }]);

	    return Upload;
	}(React.Component);

	exports.default = Upload;


	Upload.defaultProps = {
	    title: '上传图片',
	    value: '',
	    files: [],
	    thumbs: [],
	    multiple: true,
	    help: ''
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';

	function createCORSRequest(method, url) {
	    var xhr = new XMLHttpRequest();
	    if ('withCredentials' in xhr) {
	        // XHR for Chrome/Firefox/Opera/Safari.
	        xhr.open(method, url, true);
	    } else if (typeof XDomainRequest !== 'undefined') {
	        // XDomainRequest for IE.
	        xhr = new XDomainRequest();
	        xhr.open(method, url);
	    } else {
	        // CORS not supported.
	        xhr = null;
	    }
	    return xhr;
	}

	// function ajaxUpload({url, name, cors, file, onProgress, onLoad, onError, withCredentials}) {
	function ajaxUpload(data) {
	    var formData = new FormData();
	    if (data.token !== null && data.token !== undefined) formData.append('token', data.token);
	    if (data.key !== null && data.key !== undefined) formData.append('key', data.key);
	    formData.append(data.name, data.file);
	    var xhr = createCORSRequest('post', data.url, data.cors);
	    xhr.withCredentials = data.withCredentials;
	    xhr.upload.addEventListener('progress', data.onProgress, false);
	    xhr.onload = data.onLoad;
	    xhr.onerror = data.onError;
	    xhr.send(formData);
	    return xhr;
	}

	module.exports = function (args) {
	    return ajaxUpload(args);
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	var accessKey = 'Lkve3Zo4h2ZK3iIGMJbwvop2Guy1jIDyJT0Mi9RL';
	var secretKey = 'WF41n8b1LIRk8c6lcBiDzNrFTci2E-cu7ki22W2b';
	var scope = 'wire';
	var getUpToken = function getUpToken() {
	    var returnBody = '{ \"name\":$(fname),\"size\":$(fsize),\"info\":$(imageInfo),\"hash\":$(etag)}';
	    var putPolicy = {
	        "scope": scope,
	        "deadline": Date.now() + 3600,
	        "returnBody": returnBody
	    };
	    var put_policy = JSON.stringify(putPolicy);
	    var encoded = base64encode(utf16to8(put_policy));
	    var hash = CryptoJS.HmacSHA1(encoded, secretKey);
	    var encoded_signed = hash.toString(CryptoJS.enc.Base64);
	    var upload_token = accessKey + ":" + safe64(encoded_signed) + ":" + encoded;
	    return upload_token;
	};

	var getHash = function getHash(str) {
	    // let buffer = require('fs').createReadStream(str)
	    return str;
	};
	var Qiniu = {
	    getUpToken: getUpToken,
	    getHash: getHash
	};
	module.exports = Qiniu;

	function utf16to8(str) {
	    var out, i, len, c;
	    out = "";
	    len = str.length;
	    for (i = 0; i < len; i++) {
	        c = str.charCodeAt(i);
	        if (c >= 0x0001 && c <= 0x007F) {
	            out += str.charAt(i);
	        } else if (c > 0x07FF) {
	            out += String.fromCharCode(0xE0 | c >> 12 & 0x0F);
	            out += String.fromCharCode(0x80 | c >> 6 & 0x3F);
	            out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
	        } else {
	            out += String.fromCharCode(0xC0 | c >> 6 & 0x1F);
	            out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
	        }
	    }
	    return out;
	}

	function utf8to16(str) {
	    var out, i, len, c;
	    var char2, char3;
	    out = "";
	    len = str.length;
	    i = 0;
	    while (i < len) {
	        c = str.charCodeAt(i++);
	        switch (c >> 4) {
	            case 0:
	            case 1:
	            case 2:
	            case 3:
	            case 4:
	            case 5:
	            case 6:
	            case 7:
	                // 0xxxxxxx
	                out += str.charAt(i - 1);
	                break;
	            case 12:
	            case 13:
	                // 110x xxxx 10xx xxxx
	                char2 = str.charCodeAt(i++);
	                out += String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F);
	                break;
	            case 14:
	                // 1110 xxxx 10xx xxxx 10xx xxxx
	                char2 = str.charCodeAt(i++);
	                char3 = str.charCodeAt(i++);
	                out += String.fromCharCode((c & 0x0F) << 12 | (char2 & 0x3F) << 6 | (char3 & 0x3F) << 0);
	                break;
	        }
	    }
	    return out;
	}

	/*
	 * Interfaces:
	 * b64 = base64encode(data);
	 * data = base64decode(b64);
	 */
	var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
	var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

	function base64encode(str) {
	    var out, i, len;
	    var c1, c2, c3;
	    len = str.length;
	    i = 0;
	    out = "";
	    while (i < len) {
	        c1 = str.charCodeAt(i++) & 0xff;
	        if (i == len) {
	            out += base64EncodeChars.charAt(c1 >> 2);
	            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
	            out += "==";
	            break;
	        }
	        c2 = str.charCodeAt(i++);
	        if (i == len) {
	            out += base64EncodeChars.charAt(c1 >> 2);
	            out += base64EncodeChars.charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4);
	            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
	            out += "=";
	            break;
	        }
	        c3 = str.charCodeAt(i++);
	        out += base64EncodeChars.charAt(c1 >> 2);
	        out += base64EncodeChars.charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4);
	        out += base64EncodeChars.charAt((c2 & 0xF) << 2 | (c3 & 0xC0) >> 6);
	        out += base64EncodeChars.charAt(c3 & 0x3F);
	    }
	    return out;
	}

	function base64decode(str) {
	    var c1, c2, c3, c4;
	    var i, len, out;
	    len = str.length;
	    i = 0;
	    out = "";
	    while (i < len) {
	        /* c1 */
	        do {
	            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
	        } while (i < len && c1 == -1);
	        if (c1 == -1) break;
	        /* c2 */
	        do {
	            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
	        } while (i < len && c2 == -1);
	        if (c2 == -1) break;
	        out += String.fromCharCode(c1 << 2 | (c2 & 0x30) >> 4);
	        /* c3 */
	        do {
	            c3 = str.charCodeAt(i++) & 0xff;
	            if (c3 == 61) return out;
	            c3 = base64DecodeChars[c3];
	        } while (i < len && c3 == -1);
	        if (c3 == -1) break;
	        out += String.fromCharCode((c2 & 0XF) << 4 | (c3 & 0x3C) >> 2);
	        /* c4 */
	        do {
	            c4 = str.charCodeAt(i++) & 0xff;
	            if (c4 == 61) return out;
	            c4 = base64DecodeChars[c4];
	        } while (i < len && c4 == -1);
	        if (c4 == -1) break;
	        out += String.fromCharCode((c3 & 0x03) << 6 | c4);
	    }
	    return out;
	}
	var safe64 = function safe64(base64) {
	    base64 = base64.replace(/\+/g, "-");
	    base64 = base64.replace(/\//g, "_");
	    return base64;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(23);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _FormGroup = __webpack_require__(42);

	var _FormGroup2 = _interopRequireDefault(_FormGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Radio = function (_React$Component) {
	    _inherits(Radio, _React$Component);

	    function Radio(props) {
	        _classCallCheck(this, Radio);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Radio).call(this, props));

	        var option = void 0;
	        switch (props.options) {
	            case "roles":
	                option = [];
	                ConfigStore.get(props.options).map(function (d, index) {
	                    var op = {
	                        title: d.name,
	                        value: d.id
	                    };
	                    option.push(op);
	                });
	                break;
	            default:
	                option = JSON.parse(props.options);
	        }
	        _this.state = {
	            value: props.value,
	            help: props.help,
	            option: option
	        };
	        return _this;
	    }

	    _createClass(Radio, [{
	        key: '_onChange',
	        value: function _onChange(e) {
	            var value = e.target.value;
	            this.setState({
	                value: value
	            });
	            if (this.props.onChange) {
	                this.props.onChange(this.props.name, value);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var value = this.state.value;
	            var name = this.props.name;

	            // let option = JSON.parse(this.props.options)
	            // let option = this.props.options
	            var options = this.state.option.map(function (d, index) {
	                var checked = '';
	                if (value == d.value) {
	                    checked = 'checked';
	                }
	                var typeClass = 'radio';
	                return React.createElement('label', {
	                    key: index,
	                    className: 'form-radio',
	                    title: this.props.title,
	                    help: this.state.help
	                }, React.createElement('div', {
	                    className: typeClass
	                }, React.createElement('span', {
	                    className: checked
	                }, React.createElement('input', {
	                    type: 'radio',
	                    name: name,
	                    value: d.value,
	                    checked: checked,
	                    onChange: this._onChange.bind(this)
	                }))), React.createElement('span', null, d.title));
	            }.bind(this));
	            return React.createElement(_FormGroup2.default, {
	                title: this.props.title,
	                help: this.state.help
	            }, options);
	        }
	    }]);

	    return Radio;
	}(React.Component);

	exports.default = Radio;


	Radio.defaultProps = {
	    title: '单选框',
	    type: 'radio',
	    value: 2,
	    options: [{
	        title: '选项1',
	        value: 1
	    }, {
	        title: '选项2',
	        value: 2
	    }],
	    name: 'state',
	    placeholder: '',
	    help: '',
	    disabled: '',
	    required: 'required'
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(23);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _FormGroup = __webpack_require__(42);

	var _FormGroup2 = _interopRequireDefault(_FormGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Checkbox = function (_React$Component) {
	    _inherits(Checkbox, _React$Component);

	    function Checkbox(props) {
	        _classCallCheck(this, Checkbox);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this, props));

	        var option = void 0;
	        switch (props.options) {
	            case "roles":
	                option = [];
	                ConfigStore.get(props.options).map(function (d, index) {
	                    var op = {
	                        title: d.name,
	                        value: d.id
	                    };
	                    option.push(op);
	                });
	                break;
	            default:
	                option = JSON.parse(props.options);
	        }
	        var value = props.value;
	        if (value) {
	            value = JSON.parse(value);
	        } else {
	            value = [];
	        }
	        _this.state = {
	            value: value,
	            help: props.help,
	            option: option
	        };
	        return _this;
	    }

	    _createClass(Checkbox, [{
	        key: '_onChange',
	        value: function _onChange(e) {
	            var type = this.props.type;
	            var v = e.target.value;
	            var value = this.state.value;
	            var index = value.indexOf(v);
	            if (index == -1) {
	                value.push(v);
	            } else {
	                value.splice(index, 1);
	            }
	            this.setState({
	                value: value
	            });
	            value = JSON.stringify(value);
	            if (this.props.onChange) {
	                this.props.onChange(this.props.name, value);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var value = this.state.value;
	            var name = this.props.name;
	            // let option = JSON.parse(this.props.options)
	            // let option = this.props.options
	            var options = this.state.option.map(function (d, index) {
	                var checked = '';
	                if (value.indexOf(d.value) > -1) {
	                    checked = 'checked';
	                }
	                var typeClass = 'checker';
	                return React.createElement('label', {
	                    key: index,
	                    className: 'form-radio',
	                    title: this.props.title,
	                    help: this.state.help
	                }, React.createElement('div', {
	                    className: typeClass
	                }, React.createElement('span', {
	                    className: checked
	                }, React.createElement('input', {
	                    type: 'checkbox',
	                    name: name,
	                    value: d.value,
	                    checked: checked,
	                    onChange: this._onChange.bind(this)
	                }))), React.createElement('span', null, d.title));
	            }.bind(this));
	            return React.createElement(_FormGroup2.default, {
	                title: this.props.title,
	                help: this.state.help
	            }, options);
	        }
	    }]);

	    return Checkbox;
	}(React.Component);

	exports.default = Checkbox;


	Checkbox.defaultProps = {
	    title: '多选框',
	    type: 'checkbox',
	    value: [2],
	    options: [{
	        title: '选项1',
	        value: 1
	    }, {
	        title: '选项2',
	        value: 2
	    }],
	    name: 'state',
	    placeholder: '',
	    help: '',
	    disabled: '',
	    required: 'required'
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(23);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _FormGroup = __webpack_require__(42);

	var _FormGroup2 = _interopRequireDefault(_FormGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Range = function (_React$Component) {
	    _inherits(Range, _React$Component);

	    function Range(props) {
	        _classCallCheck(this, Range);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Range).call(this, props));

	        _this.state = {
	            value: props.value,
	            help: props.help
	        };
	        return _this;
	    }

	    _createClass(Range, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var help = '滑块值域' + this.props.min + '~' + this.props.max + '，' + this.props.help;
	            this.setState({
	                help: help
	            });
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange(e) {
	            var value = e.target.value;
	            if (value == this.state.value) {
	                return;
	            }
	            var help = '滑块值域' + this.props.min + '~' + this.props.max + '，当前值：' + value;
	            this.setState({
	                value: value,
	                help: help
	            });
	            if (this.props.onChange) {
	                this.props.onChange(this.props.name, value);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(_FormGroup2.default, {
	                title: this.props.title,
	                help: this.state.help
	            }, React.createElement('input', {
	                className: 'form-range',
	                type: this.props.type,
	                max: this.props.max,
	                min: this.props.min,
	                disabled: this.props.disabled,
	                value: this.state.value,
	                onChange: this._onChange.bind(this)
	            }));
	        }
	    }]);

	    return Range;
	}(React.Component);

	exports.default = Range;


	Range.defaultProps = {
	    title: '滑条',
	    type: 'range',
	    value: '',
	    help: '滑动滑条选择你的值！',
	    disabled: '',
	    required: 'required',
	    max: 10,
	    min: 6
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(23);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Botton = function (_React$Component) {
	    _inherits(Botton, _React$Component);

	    function Botton() {
	        _classCallCheck(this, Botton);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Botton).call(this));
	    }

	    _createClass(Botton, [{
	        key: 'render',
	        value: function render() {
	            var Class = (0, _classnames2.default)({
	                'form-group': true
	            });
	            return React.createElement('div', {
	                className: 'form-group'
	            }, React.createElement('div', {
	                className: 'form-control'
	            }, React.createElement('input', {
	                className: 'pure-button pure-button-primary',
	                type: 'submit',
	                disabled: this.props.disabled,
	                value: this.props.value
	            })));
	        }
	    }]);

	    return Botton;
	}(React.Component);

	exports.default = Botton;


	Botton.defaultProps = {
	    value: '保存'
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Hidden = function (_React$Component) {
	    _inherits(Hidden, _React$Component);

	    function Hidden() {
	        _classCallCheck(this, Hidden);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Hidden).call(this));
	    }

	    _createClass(Hidden, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement('input', {
	                type: 'hidden',
	                disabled: this.props.disabled,
	                value: this.props.value
	            });
	        }
	    }]);

	    return Hidden;
	}(React.Component);

	exports.default = Hidden;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _superagent = __webpack_require__(14);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _Apicloud = __webpack_require__(20);

	var _Apicloud2 = _interopRequireDefault(_Apicloud);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Link = ReactRouter.Link;

	var Main = function (_React$Component) {
	    _inherits(Main, _React$Component);

	    function Main(props) {
	        _classCallCheck(this, Main);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this, props));

	        _this.state = {
	            info: null,
	            items: [],
	            del_id: [],
	            del_all: [],
	            isdel_all: false,
	            thead_key: [],
	            thead_name: [],
	            title: '',
	            pages: null,
	            url: '../' + _this.props.params.list
	        };
	        return _this;
	    }

	    _createClass(Main, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var query = this.props.location.query;
	            var page = query.page || 1;
	            var url = '../' + this.props.params.list;
	            this._reQuest(url, page);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var page = nextProps.location.query.page || 1;
	            var page2 = this.props.location.query.page || 1;
	            if (this.props.params.list != nextProps.params.list || page != page2) {
	                var url = '../' + nextProps.params.list;
	                this._reQuest(url, page);
	            }
	        }
	    }, {
	        key: '_reQuest',
	        value: function _reQuest(url, page) {
	            ConfigActions.update('loading', 1);
	            _superagent2.default.get(url).query({
	                page: page
	            }).end(function (err, res) {
	                if (err) {
	                    var msg = [res.status + 'error'];
	                } else {
	                    var data = JSON.parse(res.text);
	                    if (data.res == 404) {
	                        ConfigActions.update('title', data.msg);
	                        this.setState({
	                            mods: [],
	                            info: data.info,
	                            title: data.msg
	                        });
	                        return;
	                    }
	                    var items = [];
	                    console.log(data);
	                    ConfigActions.update('title', data.title);
	                    this.setState({
	                        pages: data.pages,
	                        items: items.concat(data.pages.data),
	                        thead: data.thead,
	                        thead_key: data.thead.th,
	                        thead_name: data.thead.td,
	                        title: data.title
	                    });
	                }
	                loadingHide();
	            }.bind(this));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var lists = void 0;
	            var url = this.props.params.list;
	            if (this.state.pages) {
	                lists = this.state.pages.data.map(function (d, index) {
	                    var curl = '/' + url + '/' + d.id;
	                    return React.createElement(
	                        Link,
	                        { to: curl, className: 'service-box pure-u-1', key: index },
	                        d.display_name,
	                        d.id
	                    );
	                });
	            } else {
	                lists = '';
	            }
	            return React.createElement(
	                'section',
	                { className: 'warp index' },
	                React.createElement(
	                    'section',
	                    { className: 'container  pure-g' },
	                    React.createElement(
	                        'h3',
	                        { className: 'pure-u-1' },
	                        this.state.title
	                    )
	                ),
	                React.createElement(
	                    'section',
	                    { className: 'container pure-g' },
	                    lists
	                )
	            );
	        }
	    }]);

	    return Main;
	}(React.Component);

	exports.default = Main;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _superagent = __webpack_require__(14);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _Apicloud = __webpack_require__(20);

	var _Apicloud2 = _interopRequireDefault(_Apicloud);

	var _index = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Add = function (_React$Component) {
	    _inherits(Add, _React$Component);

	    function Add(props) {
	        _classCallCheck(this, Add);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Add).call(this, props));

	        _this.state = {
	            info: null,
	            mods: null,
	            info_o: {},
	            select: {},
	            title: '',
	            id: _this.props.params.id,
	            url: '../' + _this.props.params.list + '/detail/' + _this.props.params.id,
	            query: {
	                t: _this.props.params.list
	            }
	        };
	        return _this;
	    }

	    _createClass(Add, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var id = this.props.params.id;
	            var url = '../' + this.props.params.list;
	            switch (id) {
	                case "add":
	                    url = url + '/' + id;
	                    break;
	                default:
	                    url = url + '/detail/' + id;
	                    break;
	            }
	            this.setState({
	                url: url
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _superagent2.default.get(this.state.url).query(this.state.query).end(function (err, res) {
	                if (err) {
	                    ConfigActions.msg(res.status + 'error');
	                } else {
	                    var data = JSON.parse(res.text);
	                    if (data.res == 404) {
	                        ConfigActions.update('title', data.msg);
	                        this.setState({
	                            mods: [],
	                            info: data.info,
	                            title: data.msg
	                        });
	                        return;
	                    }
	                    ConfigActions.update('title', data.title);
	                    this.setState({
	                        mods: data.mods,
	                        info: data.info,
	                        select: data.select,
	                        title: data.title
	                    });
	                }
	                loadingHide();
	            }.bind(this));
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange(name, value) {
	            var info = this.state.info;
	            if (info.length == 0) {
	                info = {};
	            }
	            info[name] = value;
	            this.setState({
	                info: info
	            });
	        }
	    }, {
	        key: '_onSubmit',
	        value: function _onSubmit(e) {
	            _superagent2.default.post(this.state.url).query(this.state.query).send(this.state.info).end(function (err, res) {
	                if (err) {
	                    var msg = [res.status + 'error'];
	                } else {
	                    var data = JSON.parse(res.text);
	                    ConfigActions.update('msg', data.msg[0]);
	                }
	            }.bind(this));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var render = void 0;
	            var forms = void 0;
	            var info = this.state.info;
	            var data = this.state.mods;
	            if (data) {
	                (function () {
	                    var onChange = _this2._onChange.bind(_this2);
	                    forms = data[0].fields.map(function (d, index) {
	                        var value = info[d.k] || d.default;
	                        d.value = value || '';
	                        d.key = d.k;
	                        d.name = d.k;
	                        d.onChange = onChange;
	                        switch (d.type) {
	                            case "text":
	                                return React.createElement(_index.Input, d);
	                                break;
	                            case "password":
	                                return React.createElement(_index.Input, d);
	                                break;
	                            case "email":
	                                return React.createElement(_index.Input, d);
	                                break;
	                            case "textarea":
	                                return React.createElement(_index.Textarea, d);
	                                break;
	                            case "upload":
	                                return React.createElement(_index.Upload, d);
	                                break;
	                            case "image":
	                                return React.createElement(_index.Upload, d);
	                                break;
	                            case "select":
	                                var dd = {};
	                                var options = [];
	                                var ds = d.lists;
	                                for (var key in ds) {
	                                    var tab = {
	                                        title: ds[key],
	                                        value: key
	                                    };
	                                    options.push(tab);
	                                }
	                                dd.options = options;
	                                dd.type = 'radio';
	                                dd.title = d.title;
	                                dd.value = d.value;
	                                dd.key = d.key;
	                                dd.k = d.key;
	                                dd.default = d.default;
	                                dd.lists = d.lists;
	                                dd.name = d.key;
	                                dd.onChange = onChange;
	                                return React.createElement(_index.Radio, dd);
	                                break;
	                            case "select2":
	                                var dd2 = {};
	                                var options2 = [];
	                                var ds2 = d.lists;
	                                for (var _key in ds2) {
	                                    var tab2 = {
	                                        title: ds2[_key],
	                                        value: _key
	                                    };
	                                    options2.push(tab2);
	                                }
	                                dd2.options = options2;
	                                dd2.type = 'radio';
	                                dd2.title = d.title;
	                                dd2.value = d.value;
	                                dd2.key = d.key;
	                                dd2.k = d.key;
	                                dd2.default = d.default;
	                                dd2.lists = d.lists;
	                                dd2.name = d.key;
	                                dd2.onChange = onChange;
	                                return React.createElement(_index.Radio, dd2);
	                                break;
	                            default:
	                                break;
	                        }
	                    });
	                })();
	            }
	            if (info) {
	                render = React.createElement('section', {
	                    className: 'container'
	                }, React.createElement('h3', null, this.state.title), React.createElement(_index.Form, {
	                    action: this.state.action,
	                    info: info,
	                    legend: this.state.title,
	                    apiSubmit: false,
	                    onSubmit: this._onSubmit.bind(this)
	                }, forms, React.createElement(_index.Button)));
	            }
	            return React.createElement('section', {
	                className: 'warp'
	            }, render);
	        }
	    }]);

	    return Add;
	}(React.Component);

	exports.default = Add;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(34);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Login = function (_React$Component) {
	    _inherits(Login, _React$Component);

	    function Login(props) {
	        _classCallCheck(this, Login);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props));

	        _this.state = {
	            info: {}
	        };
	        return _this;
	    }

	    _createClass(Login, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            loadingHide();
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange(name, value) {
	            var info = this.state.info;
	            info[name] = value;
	            this.setState({
	                info: info
	            });
	        }
	    }, {
	        key: '_onSubmit',
	        value: function _onSubmit(data) {
	            storedb('user').insert(data);
	            window.location.href = '/#/';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var info = this.state.info;
	            return React.createElement(
	                'section',
	                { className: 'warp login' },
	                React.createElement(
	                    'section',
	                    { className: 'container' },
	                    React.createElement(
	                        _index.Form,
	                        { action: 'user/login',
	                            info: this.state.info,
	                            legend: '登录',
	                            onSubmit: this._onSubmit.bind(this) },
	                        React.createElement(_index.Input, {
	                            title: '用户名',
	                            name: 'username',
	                            placeholder: '输入你的用户名',
	                            help: '输入你的用户名',
	                            value: info.username,
	                            onChange: this._onChange.bind(this)
	                        }),
	                        React.createElement(_index.Input, {
	                            title: '密码',
	                            type: 'password',
	                            name: 'password',
	                            placeholder: '输入你的密码',
	                            help: '输入你的密码',
	                            value: info.password,
	                            onChange: this._onChange.bind(this)
	                        }),
	                        React.createElement(_index.Button, { value: '提交' })
	                    )
	                )
	            );
	        }
	    }]);

	    return Login;
	}(React.Component);

	exports.default = Login;

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Login = function (_React$Component) {
		_inherits(Login, _React$Component);

		function Login(props) {
			_classCallCheck(this, Login);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props));

			storedb('user').remove();
			window.location.href = '/#/';
			return _this;
		}

		_createClass(Login, [{
			key: 'render',
			value: function render() {
				return null;
			}
		}]);

		return Login;
	}(React.Component);

	exports.default = Login;

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	var App = React.createClass({
	    displayName: 'App',

	    render: function render() {
	        return React.createElement(
	            'section',
	            { className: 'warp' },
	            React.createElement(
	                'section',
	                { className: 'container' },
	                React.createElement(
	                    'h3',
	                    { className: 'jumbotron-heading' },
	                    '没有发现对应的页面！'
	                )
	            )
	        );
	    }
	});
	module.exports = App;

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
	    _inherits(Header, _React$Component);

	    function Header(props) {
	        _classCallCheck(this, Header);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));
	    }

	    _createClass(Header, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var el = document.getElementById('uil');
	            var sortable = Sortable.create(el, {
	                onStart: function onStart( /**Event*/evt) {
	                    evt.oldIndex; // element index within parent
	                    console.log(evt.oldIndex);
	                }
	            });
	            loadingHide();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement('header', {
	                id: 'header',
	                className: 'pure-menu pure-menu-horizontal pure-menu-fixed'
	            }, React.createElement('div', {
	                id: 'uil',
	                className: 'container'
	            }, React.createElement('a', {
	                className: 'pure-menu-heading pure-menu-link left'
	            }, '我的理想乡'), React.createElement('a', {
	                className: 'pure-menu-heading pure-menu-link left'
	            }, '我的理想乡2')));
	        }
	    }]);

	    return Header;
	}(React.Component);

	exports.default = Header;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Apicloud = __webpack_require__(20);

	var _Apicloud2 = _interopRequireDefault(_Apicloud);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Link = ReactRouter.Link;

	var ApiClouds = function (_React$Component) {
	    _inherits(ApiClouds, _React$Component);

	    function ApiClouds(props) {
	        _classCallCheck(this, ApiClouds);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ApiClouds).call(this, props));

	        _this.state = {
	            info: null,
	            title: 'title'
	        };
	        return _this;
	    }

	    _createClass(ApiClouds, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var clouds = this.props.params.clouds;
	            this.setState({
	                table: this.props[clouds]
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount(nextProps) {
	            this._req(this.props);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.location.pathname !== this.state.hash) {
	                this._req(nextProps);
	            }
	        }
	    }, {
	        key: '_req',
	        value: function _req(props) {
	            var action = props.params.clouds;
	            var title = this.props[action] ? this.props[action].title : '田恩仲开发设计';
	            ConfigActions.update('title', title);
	            var where = {};
	            var $_GET = get(props.location.search);
	            extend(where, $_GET);
	            delete where['_k'];
	            var rep = {};
	            extend(where, rep, true);
	            var filter = {
	                where: where,
	                order: ['model DESC', 'order DESC', 'createdAt DESC'],
	                limit: $_GET['limit'] ? parseInt($_GET['limit']) : 20,
	                skip: $_GET['skip'] ? parseInt($_GET['skip']) : 0
	            };
	            _Apicloud2.default.get(props.params.clouds, filter, function (err, res) {
	                if (err) {
	                    ConfigActions.msg(res.status + 'error');
	                } else {
	                    var data = JSON.parse(res.text);
	                    if (data.res == 404) {
	                        ConfigActions.update('title', data.msg);
	                        this.setState({
	                            hash: props.location.search,
	                            title: data.msg,
	                            table: props[action]
	                        });
	                        return;
	                    }
	                    this.setState({
	                        hash: props.location.pathname,
	                        info: data,
	                        table: props[action]
	                    });
	                }
	            }.bind(this));
	            var el = document.getElementById('uid');
	            var sortable = Sortable.create(el, {
	                onStart: function onStart( /**Event*/evt) {
	                    evt.oldIndex; // element index within parent
	                    console.log(evt.oldIndex);
	                }
	            });
	            loadingHide();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var thead = void 0;
	            if (this.state.table.thead) {
	                thead = this.state.table.thead.map(function (d, index) {
	                    return React.createElement('th', {
	                        key: index
	                    }, d);
	                });
	            }
	            var lists = void 0;
	            if (this.state.info) {
	                lists = this.state.info.map(function (d, index) {
	                    var curl = '/apicloud/' + this.props.params.clouds + '/' + d.id;
	                    return React.createElement('tr', {
	                        className: index % 2 == 0 ? 'pure-table-odd' : '',
	                        key: index
	                    }, React.createElement('td', {}, '#'), this.state.table.tbody.map(function (t, i) {
	                        return React.createElement('td', {
	                            key: i
	                        }, d[t]);
	                    }), React.createElement('td', {}, React.createElement(Link, {
	                        to: curl
	                    }, '编辑')));
	                }.bind(this));
	            }
	            return React.createElement('section', {
	                className: 'warp index'
	            }, React.createElement('section', {
	                className: 'container  pure-g'
	            }, React.createElement('h3', {
	                className: 'pure-u-1'
	            }, this.state.table.title), React.createElement('div', {
	                className: 'pure-u-1 pure-menu pure-menu-open pure-menu-horizontal'
	            }, React.createElement('a', {
	                className: 'pure-menu-heading'
	            }, '筛选'), React.createElement('ul', {
	                className: 'pure-menu-list'
	            }, React.createElement('li', {
	                className: 'pure-menu-item'
	            }, React.createElement(Link, {
	                to: '/apicloud/' + this.props.params.clouds,
	                className: 'pure-menu-link'
	            }, '全部')), React.createElement('li', {
	                className: 'pure-menu-item'
	            }, React.createElement(Link, {
	                to: '/apicloud/' + this.props.params.clouds,
	                className: 'pure-menu-link',
	                query: {
	                    state: 1
	                }
	            }, '正常'))))), React.createElement('section', {
	                className: 'container  pure-g'
	            }, React.createElement('div', {
	                className: 'pure-u-1'
	            }, React.createElement('table', {
	                className: 'pure-table',
	                style: {
	                    width: "100%"
	                }
	            }, React.createElement('thead', {}, React.createElement('tr', {}, thead)), React.createElement('tbody', {
	                id: 'uid'
	            }, lists)))));
	        }
	    }]);

	    return ApiClouds;
	}(React.Component);

	exports.default = ApiClouds;


	ApiClouds.defaultProps = {
	    article: {
	        title: '文章管理',
	        thead: ['id', '标题', '状态', '操作'],
	        tbody: ['title', 'state']
	    },
	    menu: {
	        title: '菜单管理',
	        thead: ['id', '菜单名称', '排序', '状态', '操作'],
	        tbody: ['title', 'order', 'state']
	    },
	    model: {
	        title: '模块字段管理',
	        thead: ['id', '菜单名称', '所属模块', '排序', '状态', '操作'],
	        tbody: ['title', 'model', 'order', 'state']
	    }
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Apicloud = __webpack_require__(20);

	var _Apicloud2 = _interopRequireDefault(_Apicloud);

	var _index = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = function (_React$Component) {
	    _inherits(Component, _React$Component);

	    function Component(props) {
	        _classCallCheck(this, Component);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this, props));

	        _this.state = {
	            info: null
	        };
	        return _this;
	    }

	    _createClass(Component, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._req(this.props);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.location.pathname !== this.state.hash) {
	                this._req(nextProps);
	            }
	        }
	    }, {
	        key: '_req',
	        value: function _req(props) {
	            var action = props.params.clouds;
	            var title = this.props[action] ? this.props[action] : '田恩仲开发设计';
	            var articleId = props.params.articleId;

	            var where = {
	                state: 1
	            };
	            var $_GET = get(props.location.search);
	            extend(where, $_GET);
	            delete where['_k'];
	            var rep = {
	                model: props.params.clouds
	            };
	            extend(where, rep, true);
	            var filter = {
	                where: where,
	                order: ['order DESC', 'createdAt DESC'],
	                limit: $_GET['limit'] ? parseInt($_GET['limit']) : 100
	            };
	            _Apicloud2.default.get('model', filter, function (err, res) {
	                var model = JSON.parse(res.text);
	                if (articleId !== 'add') {
	                    action = action + '/' + articleId;
	                    var article = ConfigStore.get(articleId);
	                    if (article) {
	                        article._method = 'PUT';
	                        ConfigActions.update('title', article.title + '-编辑' + title);
	                        this.setState({
	                            hash: props.location.pathname,
	                            model: model,
	                            title: '编辑' + title,
	                            info: article,
	                            action: action,
	                            id: articleId
	                        });
	                    } else {
	                        _Apicloud2.default.get(props.params.clouds + '/' + articleId, '', function (err, res) {
	                            var article = JSON.parse(res.text);
	                            article._method = 'PUT';
	                            ConfigActions.update('title', article.title + '-编辑' + title);
	                            this.setState({
	                                hash: props.location.pathname,
	                                model: model,
	                                title: '编辑' + title,
	                                info: article,
	                                action: action,
	                                id: articleId
	                            });
	                        }.bind(this));
	                    }
	                } else {
	                    var userId = storedb('user').find()[0].userId;
	                    var info = {
	                        userId: userId
	                    };
	                    ConfigActions.update('title', '新增' + title);
	                    this.setState({
	                        hash: props.location.pathname,
	                        model: model,
	                        title: '新增' + title,
	                        action: action,
	                        info: info
	                    });
	                }
	            }.bind(this));
	            loadingHide();
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange(name, value) {
	            var info = this.state.info;
	            info[name] = value;
	            this.setState({
	                info: info
	            });
	        }
	    }, {
	        key: '_onSubmit',
	        value: function _onSubmit(data) {
	            ConfigActions.update('title', data.title);
	            ConfigActions.update(data.id, data);
	            if (!this.state.id) {
	                ConfigActions.update('msg', '发布成功！');
	                window.location.href = '/#/apicloud/' + this.props.params.clouds + '/' + data.id;
	            } else {
	                ConfigActions.update('msg', '保存成功！');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var render = void 0;
	            var forms = void 0;
	            var info = this.state.info;
	            var model = this.state.model;
	            if (model) {
	                (function () {
	                    var onChange = _this2._onChange.bind(_this2);
	                    forms = model.map(function (d, index) {
	                        d.value = info[d.name] || d.default || '';
	                        d.key = d.name;
	                        d.onChange = onChange;
	                        switch (d.type) {
	                            case "text":
	                                return React.createElement(_index.Input, d);
	                                break;
	                            case "password":
	                                return React.createElement(_index.Input, d);
	                                break;
	                            case "email":
	                                return React.createElement(_index.Input, d);
	                                break;
	                            case "textarea":
	                                return React.createElement(_index.Textarea, d);
	                                break;
	                            case "upload":
	                                return React.createElement(_index.Upload, d);
	                                break;
	                            case "image":
	                                return React.createElement(_index.Upload, d);
	                                break;
	                            case "editer":
	                                return React.createElement(_index.Editer, d);
	                                break;
	                            case "radio":
	                                return React.createElement(_index.Radio, d);
	                                break;
	                            case "checkbox":
	                                return React.createElement(_index.Checkbox, d);
	                                break;
	                            case "hidden":
	                                return React.createElement(_index.Hidden, d);
	                                break;
	                            default:
	                                break;
	                        }
	                    });
	                })();
	            }
	            if (info) {
	                render = React.createElement('section', {
	                    className: 'container'
	                }, React.createElement('h3', null, this.state.title), React.createElement(_index.Form, {
	                    action: this.state.action,
	                    info: info,
	                    legend: this.state.title,
	                    onSubmit: this._onSubmit.bind(this)
	                }, forms, React.createElement(_index.Button)));
	            }
	            return React.createElement('section', {
	                className: 'warp'
	            }, render);
	        }
	    }]);

	    return Component;
	}(React.Component);

	exports.default = Component;


	Component.defaultProps = {
	    article: '文章',
	    menu: '菜单',
	    model: '字段'
	};

/***/ }
/******/ ]);