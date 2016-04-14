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
        const ACTIVE = { color: 'red' }
        return (
            <header id="header" className="pure-menu pure-menu-horizontal pure-menu-fixed">
                <a href="#" className="pure-menu-heading pure-menu-link">我的理想乡</a>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link active">News</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sports</a></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="login" activeClassName={"active"}>登录</Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/login" activeStyle={{ color: 'red' }}>登录</Link></li>
                </ul>
            </header>
        )
    }
}