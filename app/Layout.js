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
    _onChange() { 
        let config = ConfigStore.getAll()
        console.log(config)
        window.document.title = config.title
        this.setState(config)
    }
    componentWillMount() {

    } 
    componentDidMount() {
        // window.addEventListener('scroll', this.onScroll.bind(this))
        ConfigStore.addChangeListener(this._onChange.bind(this))
    }   

    shouldComponentUpdate() {
        return true
    }
    componentWillUnmount() {
        ConfigStore.removeChangeListener(this._onChange.bind(this))
    }
    onScroll(){
        // var obj = document.getElementById('app')
        // console.log(obj.offsetTop) 
        // console.log(window.scrollY)
        ConfigActions.update('window_Y', window.scrollY)
        // console.log(document.body.scrollTop)
    }
    onWheel(obj){
        // console.log(obj.target.offsetTop)
    }
    onKeyPress(){
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