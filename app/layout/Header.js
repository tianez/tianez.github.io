'use strict'
import React from 'react'
import {
    Link
} from 'react-router'
import Apicloud from '../../components/utils/Apicloud'

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
        this.state = {
            menu: null
        }
    }
    componentDidMount() {
        let filter = {}
        Apicloud.get('menu', filter, function(err, res) {
            let menu = JSON.parse(res.text)
            this.setState({
                menu: menu
            })
        }.bind(this))
        var el = document.getElementById('ul')
        var sortable = Sortable.create(el, {
            onStart: function( /**Event*/ evt) {
                evt.oldIndex; // element index within parent
                console.log(evt.oldIndex);
            },
        })
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

        let menus
        if (this.state.menu) {
            menus = this.state.menu.map(function(d, index) {
                return React.createElement(A, {
                    to: '/apicloud/' + d.link,
                    title: d.title,
                    key: index
                })
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
                            id: 'ul',
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
                            to: '/apicloud/article/add',
                            title: '新增文章'
                        }),
                        menus
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
