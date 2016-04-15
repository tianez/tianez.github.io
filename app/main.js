'use strict'

import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Msg from './layout/Msg'

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = { value: 'sdsdsds' };
        // localStorage.lastname="Smith";
        // sessionStorage.name = 'sdsd'
    }
    _onChange() {
        let config = ConfigStore.getAll()
        console.log(config)
        window.document.title = config.title
        this.setState(config);
    }
    componentWillMount() {

    }
    componentDidMount() {
        ConfigStore.addChangeListener(this._onChange.bind(this));
    }

    shouldComponentUpdate() {
        return true
    }
    componentWillUnmount() {
        ConfigStore.removeChangeListener(this._onChange.bind(this));
    }
    render() {
        return (
            <div className = "warper" >
                <Header />
                <main id='main' className = "main">
                    <Msg />
                    {this.props.children}
                </main>
                <Footer />
            </div>
        )
    }
}