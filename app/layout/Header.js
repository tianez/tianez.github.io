'use strict'
import React from 'react'
// import {Link} from 'react-router'
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let user = localStorage.user ? true : false
        let islogin
        if (user) {
            islogin = <li className="pure-menu-item"><Link className="pure-menu-link" to="/logout" activeClassName={"active"}>登出</Link></li>
        } else {
            islogin = <li className="pure-menu-item"><Link className="pure-menu-link" to="/login" activeClassName={"active"}>登录</Link></li>
        }
        let ACTIVE = {
            color: 'red'
        }
        return (
            <header id="header" className="pure-menu pure-menu-horizontal pure-menu-fixed">
                <div className='container'>
                <a href="#" className="pure-menu-heading pure-menu-link left">我的理想乡</a>
                <ul className="pure-menu-list left">
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/page" activeClassName={"active"}>博文</Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/page2" activeClassName={"active"}>博文2</Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/page/add" activeClassName={"active"}>新增文章</Link></li>
                </ul>
                <ul className="pure-menu-list right">
                    {islogin}
                </ul>
                </div>
            </header>
        )
    }
}