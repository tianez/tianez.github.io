webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// import './css/style.min.css'

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(159);

	__webpack_require__(216);

	var _Layout = __webpack_require__(225);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _Index = __webpack_require__(247);

	var _Index2 = _interopRequireDefault(_Index);

	var _Pages = __webpack_require__(248);

	var _Pages2 = _interopRequireDefault(_Pages);

	var _Pages3 = __webpack_require__(250);

	var _Pages4 = _interopRequireDefault(_Pages3);

	var _Page = __webpack_require__(251);

	var _Page2 = _interopRequireDefault(_Page);

	var _Login = __webpack_require__(308);

	var _Login2 = _interopRequireDefault(_Login);

	var _Logout = __webpack_require__(309);

	var _Logout2 = _interopRequireDefault(_Logout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function redirectToLogin(nextState, replace) {
		var pathname = nextState.location.pathname;
		console.log(pathname);
		var user = localStorage.user ? true : false;
		if (!user && pathname !== '/login') {
			ConfigActions.update('msg', '你还没有登录，请先登录！');
			replace({
				pathname: '/login'
			});
		} else if (user && pathname == '/login') {
			replace({
				pathname: '/'
			});
		}
	}

	/** 
	 * 路由
	 */


	_reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, {
		history: _reactRouter.hashHistory
	}, _react2.default.createElement(_reactRouter.Route, {
		path: "/",
		component: _Layout2.default
	}, _react2.default.createElement(_reactRouter.IndexRoute, {
		component: _Index2.default
	}), _react2.default.createElement(_reactRouter.Route, {
		path: "page/add",
		component: Add,
		onEnter: redirectToLogin
	}), _react2.default.createElement(_reactRouter.Route, {
		path: "edit/:articleId",
		component: Add,
		onEnter: redirectToLogin
	}), _react2.default.createElement(_reactRouter.Route, {
		path: "page"
	}, _react2.default.createElement(_reactRouter.IndexRoute, {
		component: _Pages2.default
	}), _react2.default.createElement(_reactRouter.Route, {
		path: ":articleId",
		component: _Page2.default
	})), _react2.default.createElement(_reactRouter.Route, {
		path: "login",
		component: _Login2.default,
		onEnter: redirectToLogin
	}), _react2.default.createElement(_reactRouter.Route, {
		path: "logout",
		component: _Logout2.default
	}))), document.getElementById('app'));

/***/ }
]);