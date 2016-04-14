'use strict'
import './css/style.min.css'

import React from 'react';
import ReactDom from 'react-dom'
import {
    Router, Route, IndexRoute, Redirect, hashHistory, browserHistory, Link
}
from 'react-router'

window.AppId = 'A6984077246442'
window.AppKey = '7F7872C0-8EB2-D116-C9AF-AF02A4B65BA0'
window.AppUrl= 'https://d.apicloud.com/mcm/api/'

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

/** 
 * 路由
 */
import Main from './main'
import Index from './Index'
import Login from './Login'
import Add from './Add'
import Post from './Post'
import NoMatch from './NoMatch'

function redirectToLogin(nextState, replace) {
    let pathname = nextState.location.pathname
    let user = localStorage.user ? true : false
    let exit = ['/', '/add', '/login']
    if (exit.indexOf(pathname) == -1 && !user) {
        replace({ pathname: '/login' })
    }
}
ReactDom.render((
    React.createElement(Router, {
        history: hashHistory
    },
        React.createElement(Route, {
            path: "add2",
            component: Add
        }),
        React.createElement(Route, {
            path: "/",
            component: Main,
            onEnter: redirectToLogin
        },
            React.createElement(IndexRoute, {
                component: Index
            }),
            React.createElement(Route, {
                path: "login",
                component: Login
            }),
            React.createElement(Route, {
                path: "add",
                component: Add
            }),
            React.createElement(Route, {
                path: "post",
                component: Post
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