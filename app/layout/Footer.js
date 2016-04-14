'use strict'
import React from 'react'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer id="footer" className="footer l-box is-center fixed-bottom">
                View the source of this layout to learn more.Made with love by the YUI Team.
            </footer>
        )
    }
}