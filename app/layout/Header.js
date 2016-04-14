'use strict'
import React from 'react'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header id="header" className="pure-menu pure-menu-horizontal pure-menu-fixed">
                <a href="#" className="pure-menu-heading pure-menu-link">我的理想乡</a>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link active">News</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sports</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Finance</a></li>
                </ul>
            </header>
        )
    }
}