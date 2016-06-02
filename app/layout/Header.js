'use strict'
import React from 'react'
import {
    Link
} from 'react-router'

class A extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            React.createElement('li', {
                    className: 'pure-menu-item'
                },
                React.createElement(Link, {
                        className: 'pure-menu-link',
                        to: this.props.to,
                        activeClassName: 'active'
                    },
                    this.props.title
                )
            )
        )
    }
}
export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let user = storedb('user').find() ? true : false
        let islogin
        if (user) {
            islogin = React.createElement(A, {
                to: '/logout',
                title: '登出'
            })
        } else {
            islogin = React.createElement(A, {
                to: '/login',
                title: '登录'
            })
        }
        return (
            React.createElement('header', {
                    id: 'header',
                    className: 'pure-menu pure-menu-horizontal pure-menu-fixed'
                },
                React.createElement('div', {
                        className: 'container'
                    },
                    React.createElement('a', {
                            className: 'pure-menu-heading pure-menu-link left'
                        },
                        '我的理想乡'
                    ),
                    React.createElement('ul', {
                            className: 'pure-menu-list left'
                        },
                        React.createElement(A, {
                            to: '/roles',
                            title: '角色管理'
                        }),
                        React.createElement(A, {
                            to: '/account',
                            title: '用户管理'
                        }),
                        React.createElement(A, {
                            to: '/permit',
                            title: '权限管理'
                        }),
                        React.createElement(A, {
                            to: '/fields',
                            title: '字段管理'
                        }),
                        React.createElement(A, {
                            to: '/page',
                            title: '博文'
                        }),
                        React.createElement(A, {
                            to: '/page/add',
                            title: '新增文章'
                        })
                    ),
                    React.createElement('ul', {
                            className: 'pure-menu-list right'
                        },
                        islogin
                    )
                )
            )
        )
    }
}