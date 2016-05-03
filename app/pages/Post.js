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
            lists = this.state.info.map(function(d) {
                let url = '/post/' + d.id
                return <li key={d.id}><Link to={url} activeStyle={active} >{d.title}</Link></li>
            })
        } else {
            lists = ''
        }
        const {
            pathname
        } = this.props.location
        return (
            <section className='warp'>
                <section className = "container" >
                    <h3 className = "jumbotron-heading" >文章管理</h3>
                </section>
                <section className = "container" >
                    <ul>
                        {lists}
                    </ul>
                </section>
                <ReactCSSTransitionGroup
                    component="section" className='container' transitionName="swap"
                    transitionEnterTimeout={500} transitionLeaveTimeout={500} >
                    {React.cloneElement(this.props.children || <div/>, { key: pathname }) }
                </ReactCSSTransitionGroup>
            </section>
        )
    }
}