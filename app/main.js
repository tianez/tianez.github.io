'use strict'

import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Header from './layout/Header'
import Footer from './layout/Footer'
import Msg from './layout/Msg'

import './app.css'

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
        const { pathname } = this.props.location
        const key = pathname.split('/')[1] || 'root'
        return (
            <div className = "warper" >
                <Header />
                <main id='main' className = "main">
                    <Msg />
                    <ReactCSSTransitionGroup component="div" className='ww' transitionName="swap" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        {React.cloneElement(this.props.children || <div />, { key: key }) }
                    </ReactCSSTransitionGroup>
                </main>
                <Footer />
            </div>
        )
    }
}