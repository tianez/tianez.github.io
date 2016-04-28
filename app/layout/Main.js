'use strict'
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 
import Msg from './Msg'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    } 
    render() {
        const { pathname } = this.props.location
        const key = pathname.split('/')[1] || 'root'
        return (
            <main id='main' className = "main">
                <Msg />
                <ReactCSSTransitionGroup component="div" className='swap' transitionName="swap" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    {React.cloneElement(this.props.children || <div />, { key: key }) }
                </ReactCSSTransitionGroup>
            </main>
        )
    }
}