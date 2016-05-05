'use strict'
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classNames from 'classnames';
import Msg from './Msg'
import Load from './Load'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {
            pathname
        } = this.props.location
        let pathnames = pathname.split('/')
        let key = pathnames[pathnames.length - 1] || 'root'
        let loading = ConfigStore.get('loading')
        let Class = classNames({
            'swap': true,
            'swap_show': loading == 0
        })
        return (
            <main id='main' className = "main">
                <Load />
                <Msg />
                <ReactCSSTransitionGroup component="div" className={Class} transitionName="swap" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    {React.cloneElement(this.props.children || <div />, { key: key }) }
                </ReactCSSTransitionGroup>
                <div className='clear'></div>
            </main>
        )
    }
}