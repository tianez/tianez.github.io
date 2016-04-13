'use strict'

import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = { value: 'sdsdsds' };
        // localStorage.lastname="Smith";
        // sessionStorage.name = 'sdsd'
    }
    componentWillMount() {
 
    }
    componentDidMount() {

    }
    shouldComponentUpdate() {
        return true
    }
    render() {
        return (
            <div className = "container" >
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}