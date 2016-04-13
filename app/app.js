'use strict'
import './css/style.min.css'

import React from 'react';
import ReactDom from 'react-dom'
import {
    Router, Route, IndexRoute, Redirect, hashHistory, browserHistory, Link
}
from 'react-router'

import Main from './main'
import Index from './Index'
import Login from './Login'
import Add from './Add'
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
                path: "*",
                component: NoMatch
            })
        )
    )
),
    document.getElementById('app')
)