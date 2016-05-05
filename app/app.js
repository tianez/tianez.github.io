'use strict'
import './css/style.min.css'

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

window.AppId = 'A6984077246442'
window.AppKey = '7F7872C0-8EB2-D116-C9AF-AF02A4B65BA0'
window.AppUrl = 'https://d.apicloud.com/mcm/api/'

/** 
 * action
 */
// import ConfigActions from './flux/ConfigActions'
window.ConfigActions = require('./flux/ConfigActions')

/** 
 * store
 */
// import ConfigStore from './flux/ConfigStore'
window.ConfigStore = require('./flux/ConfigStore')

window.showload = function() {
    setTimeout(function() {
        ConfigActions.update('loading', 0)
    }, 1000)
}

window.old = ''

/** 
 * 路由
 */
import Layout from './Layout'
import Index from './pages/Index'
import Pages from './pages/Pages'
import Pages2 from './pages/Pages2'
import Page from './pages/Page'
import Add from './pages/Add'
import Login from './pages/Login'
import Logout from './pages/Logout'
import NoMatch from './pages/NoMatch'

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
                    path: "page",
                    component: Pages
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
                    path: "page/:articleId",
                    component: Page
                }),
                React.createElement(Route, {
                        path: "page2",
                        component: Pages
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
                }),
                React.createElement(Route, {
                    path: "add",
                    component: Add,
                    onEnter: redirectToLogin
                }),
                React.createElement(Route, {
                    path: "*",
                    component: NoMatch
                })
            )
        )
    ),
    document.getElementById('app')
)