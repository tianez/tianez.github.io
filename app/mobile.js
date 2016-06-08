'use strict'
// import React from 'react'
// import ReactDom from 'react-dom'
// import {
// 	Router,
// 	Route,
// 	IndexRoute,
// 	Redirect,
// 	hashHistory,
// 	browserHistory,
// 	Link
// }
// from 'react-router'

let Router = ReactRouter.Router
let Route = ReactRouter.Route
let IndexRoute = ReactRouter.IndexRoute
let Redirect = ReactRouter.Redirect
let hashHistory = ReactRouter.hashHistory
let browserHistory = ReactRouter.browserHistory
let Link = ReactRouter.Link

import './window'

/**
 * 路由
 */
import Layout from './mob/Layout'
// import Index from './mob/Index'
import Index2 from './mob/Index2'


var Index = React.createClass({
  render: function() {
    return (
      <p>
        Hello, <input type="text" placeholder="Your name here222222222222222222222222" />!
        It is33333333333333333333333333333
      </p>
    );
  }
});
var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>
        Hello, <input type="text" placeholder="Your name here" />!
        It is
      </p>
    );
  }
});

ReactDOM.render((
		React.createElement(Router, {
				history: hashHistory
			},
			React.createElement(Route, {
					path: "/",
					component: Layout
				},
				React.createElement(IndexRoute, {
					component: Index
				}),
				React.createElement(Route, {
                    path: "22",
                    component: Index2
                }),
				React.createElement(Route, {
                    path: "223",
                    component: HelloWorld
                })
			)
		)
	),
	document.getElementById('app')
)
