'use strict'

import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
    Link
} from 'react-router'
import Apicloud from '../../components/utils/Apicloud'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {}
        }
    }
    componentDidMount() {
        let filter = {
            where: {},
            skip: 0,
            limit: 20
        }
        Apicloud.get('article', filter, function(err, res) {
            let data = JSON.parse(res.text)
            console.log(data)
            this.setState({
                info: data
            })
        }.bind(this))
    }
    render() {
        let lists
        let active = {
            color: '#f00'
        }
        if (this.state.info.length > 0) {
            lists = this.state.info.map(function(d, index) {
                let url = '/page/' + d.id
                let edit = '/edit/' + d.id
                return <li key={index}><Link to={url} activeStyle={active} >{d.title}</Link><Link to={edit} activeStyle={active} >编辑</Link></li>
            })
        } else {
            lists = ''
        }
        const {
            pathname
        } = this.props.location
        return (
            <ReactCSSTransitionGroup
                    component="section" transitionName="swap"
                    transitionEnterTimeout={500} transitionLeaveTimeout={500} >
                    {React.cloneElement(this.props.children || <div/>, { key: pathname }) }
                </ReactCSSTransitionGroup>
        )
    }
}