webpackJsonp([0],{

/***/ 0:
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

	var _Add = __webpack_require__(291);

	var _Add2 = _interopRequireDefault(_Add);

	var _Login = __webpack_require__(308);

	var _Login2 = _interopRequireDefault(_Login);

	var _Logout = __webpack_require__(309);

	var _Logout2 = _interopRequireDefault(_Logout);

	var _NoMatch = __webpack_require__(310);

	var _NoMatch2 = _interopRequireDefault(_NoMatch);

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
	    component: _Add2.default,
	    onEnter: redirectToLogin
	}), _react2.default.createElement(_reactRouter.Route, {
	    path: "edit/:articleId",
	    component: _Add2.default,
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
	}), _react2.default.createElement(_reactRouter.Route, {
	    path: "add",
	    component: _Add2.default,
	    onEnter: redirectToLogin
	}), _react2.default.createElement(_reactRouter.Route, {
	    path: "*",
	    component: _NoMatch2.default
	}))), document.getElementById('app'));

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _superagent = __webpack_require__(241);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _Apicloud = __webpack_require__(249);

	var _Apicloud2 = _interopRequireDefault(_Apicloud);

	var _index = __webpack_require__(292);

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
	            info: {}
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

	            if (articleId) {
	                action = action + '/' + articleId;
	                var article = ConfigStore.get(articleId);
	                if (article) {
	                    article._method = 'PUT';
	                    this.setState({
	                        info: article,
	                        action: action,
	                        id: articleId
	                    });
	                } else {
	                    _Apicloud2.default.get(action, '', function (err, res) {
	                        var article = JSON.parse(res.text);
	                        article._method = 'PUT';
	                        ConfigActions.update('title', article.title);
	                        console.log(article);
	                        this.setState({
	                            info: article,
	                            action: action,
	                            id: articleId,
	                            ids: 'articleId'
	                        });
	                    }.bind(this));
	                }
	            } else {
	                this.setState({
	                    action: action
	                });
	            }
	            loadingHide();
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange(name, value) {
	            var info = this.state.info;
	            info[name] = value;
	            console.log(info);
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
	                window.location.href = '/#/post/' + data.id;
	            } else {
	                ConfigActions.update('msg', '保存成功！');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var info = this.state.info;
	            return _react2.default.createElement(
	                'section',
	                { className: 'warp' },
	                _react2.default.createElement(
	                    'section',
	                    { className: 'container' },
	                    _react2.default.createElement(
	                        'h3',
	                        { className: 'jumbotron-heading' },
	                        '文章管理'
	                    ),
	                    _react2.default.createElement(
	                        _index.Form,
	                        { action: this.state.action,
	                            info: info,
	                            legend: '新增文章',
	                            onSubmit: this._onSubmit.bind(this) },
	                        _react2.default.createElement(_index.Input, {
	                            title: '标题',
	                            name: 'title',
	                            value: info.title,
	                            placeholder: '标题',
	                            help: '请输入标题名',
	                            onChange: this._onChange.bind(this)
	                        }),
	                        _react2.default.createElement(_index.Textarea, {
	                            title: '内容',
	                            name: 'description',
	                            value: info.description,
	                            placeholder: '内容',
	                            help: '内容',
	                            onChange: this._onChange.bind(this)
	                        }),
	                        _react2.default.createElement(_index.Upload, {
	                            name: 'thumb',
	                            value: info.thumb,
	                            multiple: false,
	                            onChange: this._onChange.bind(this)
	                        }),
	                        _react2.default.createElement(_index.Editer, {
	                            value: info.content,
	                            onChange: this._onChange.bind(this)
	                        }),
	                        _react2.default.createElement(_index.Radio, null),
	                        _react2.default.createElement(_index.Radio, { type: 'radio', value: info.state,
	                            title: '状态',
	                            options: [{
	                                title: '正常',
	                                value: 0
	                            }, {
	                                title: '关闭',
	                                value: 1
	                            }],
	                            onChange: this._onChange.bind(this)
	                        }),
	                        _react2.default.createElement(_index.Range, null),
	                        _react2.default.createElement(_index.Upload, {
	                            name: 'pics',
	                            value: info.pics,
	                            onChange: this._onChange.bind(this)
	                        }),
	                        _react2.default.createElement(_index.Button, { value: '提交' })
	                    )
	                )
	            );
	        }
	    }]);

	    return Add;
	}(_react2.default.Component);

	exports.default = Add;

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = _react2.default.createClass({
	    displayName: 'App',

	    render: function render() {
	        return _react2.default.createElement(
	            'section',
	            { className: 'warp' },
	            _react2.default.createElement(
	                'section',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'h3',
	                    { className: 'jumbotron-heading' },
	                    '没有发现对应的页面！'
	                )
	            )
	        );
	    }
	});
	module.exports = App;

/***/ }

});