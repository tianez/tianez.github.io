'use strict'
// import './css/style.min.css'

import React from 'react';
import ReactDom from 'react-dom'
import {
	Router,
	Route,
	IndexRoute,
	Redirect,
	hashHistory,
	browserHistory,
	Link
}
from 'react-router'

import './window'

/**
 * 路由
 */
import Layout from './Layout'
import Index from './pages/Index'
import Pages from './pages/Pages'
import Page from './pages/Page'
import Login from './pages/Login'
import Logout from './pages/Logout'

function redirectToLogin(nextState, replace) {
	let pathname = nextState.location.pathname
	console.log(pathname)
	let user = localStorage.user ? true : false
	if (!user && pathname !== '/login') {
		ConfigActions.update('msg', '你还没有登录，请先登录！')
		replace({
			pathname: '/login'
		})
	} else if (user && pathname == '/login') {
		replace({
			pathname: '/'
		})
	}
}

ReactDom.render((
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
					path: "page/add",
					component: Add,
					onEnter: redirectToLogin
				}),
				React.createElement(Route, {
					path: "edit/:articleId",
					component: Add,
					onEnter: redirectToLogin
				}),
				React.createElement(Route, {
						path: "page"
					},
					React.createElement(IndexRoute, {
						component: Pages
					}),
					React.createElement(Route, {
						path: ":articleId",
						component: Page
					})
				),
				React.createElement(Route, {
					path: "login",
					component: Login,
					onEnter: redirectToLogin
				}),
				React.createElement(Route, {
					path: "logout",
					component: Logout
				})
			)
		)
	),
	document.getElementById('app')
)
