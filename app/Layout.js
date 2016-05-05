'use strict'

import React from 'react'

import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'

// import './app.css'

export default class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
                msg: ''
            }
            // localStorage.lastname="Smith";
            // sessionStorage.name = 'sdsd'
    }
    componentWillMount() {

    }
    componentDidMount() {
        // window.addEventListener('scroll', this.onScroll.bind(this))
        ConfigStore.addChangeListener(this._onChange.bind(this))
        window.onload = function() {
            let load = document.getElementById('load')
            load.className += " load_hide";
        }
        window.onhashchange = function() {
            let hash = location.hash.split("?")[0]
            if (old == '') {
                old = hash
            }
            if (old != hash) {
                old = hash
                ConfigActions.update('loading', 1)
            }
        }
    }

    shouldComponentUpdate() {
        return true
    }
    componentWillUnmount() {
        ConfigStore.removeChangeListener(this._onChange.bind(this))
    }
    _onChange() {
        let config = ConfigStore.getAll()
        console.log(config)
        window.document.title = config.title
        this.setState(config)
    }
    onScroll() {
        // var obj = document.getElementById('app')
        // console.log(obj.offsetTop) 
        // console.log(window.scrollY)
        ConfigActions.update('window_Y', window.scrollY)
            // console.log(document.body.scrollTop)
    }
    onWheel(obj) {
        // console.log(obj.target.offsetTop)
    }
    onKeyPress() {
        console.log(32)
    }
    render() {
        return (
            <div className = "warper" 
                onWheel = {this.onWheel.bind(this)} >
                <Header />
                <Main location = {this.props.location}>
                    {this.props.children}
                </Main>
                <Footer />
            </div>
        )
    }
}