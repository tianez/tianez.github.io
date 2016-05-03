'use strict'

import React from 'react'

import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'

// import './app.css'

export default class Layout extends React.Component {
    constructor() {
        super()
        // localStorage.lastname="Smith";
        // sessionStorage.name = 'sdsd'
    }
    _onChange() { 
        let config = ConfigStore.getAll()
        console.log(config)
        window.document.title = config.title
        this.setState(config)
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
    onScroll(){
        console.log(1)
    }
    onWheel(){
        console.log(12)
    }
    onKeyPress(){
        console.log(32)
    }
    render() {
        return (
            <div className = "warper" 
                onScroll={this.onScroll.bind(this)} 
                onWheel={this.onWheel.bind(this)}
                onKeyPress={this.onKeyPress.bind(this)}  >
                <Header />
                <Main location = {this.props.location} >
                    {this.props.children}
                </Main>
                <Footer />
            </div>
        )
    }
}