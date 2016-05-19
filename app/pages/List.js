'use strict'

import React from 'react'
import request from 'superagent'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
    Link
} from 'react-router'
import Apicloud from '../../components/utils/Apicloud'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: null,
            items: [],
            del_id: [],
            del_all: [],
            isdel_all: false,
            thead_key: [],
            thead_name: [],
            title: '',
            pages: null,
            url: '../' + this.props.params.list,
        }
    }
    componentDidMount() {
        let query = this.props.location.query
        let page = query.page || 1
        let url = '../' + this.props.params.list
        this._reQuest(url, page)
    }
    componentWillReceiveProps(nextProps) {
        let page = nextProps.location.query.page || 1
        let page2 = this.props.location.query.page || 1
        if (this.props.params.list != nextProps.params.list || page != page2) {
            let url = '../' + nextProps.params.list
            this._reQuest(url, page)
        }
    }
    _reQuest(url, page) {
        ConfigActions.update('loading', 1)
        request.get(url)
            .query({
                page: page
            })
            .end(function(err, res) {
                if (err) {
                    let msg = [res.status + 'error']
                } else {
                    let data = JSON.parse(res.text)
                    if (data.res == 404) {
                        ConfigActions.update('title', data.msg)
                        this.setState({
                            mods: [],
                            info: data.info,
                            title: data.msg,
                        });
                        return
                    }
                    let items = []
                    console.log(data)
                    ConfigActions.update('title', data.title)
                    this.setState({
                        pages: data.pages,
                        items: items.concat(data.pages.data),
                        thead: data.thead,
                        thead_key: data.thead.th,
                        thead_name: data.thead.td,
                        title: data.title,
                    });
                }
                loadingHide()
            }.bind(this))
    }
    render() {
        let lists
        let url = this.props.params.list
        if (this.state.pages) {
            lists = this.state.pages.data.map(function(d, index) {
                let curl = '/' + url + '/' + d.id
                return (
                    <Link to={curl} className="service-box pure-u-1" key={index}>
                    {d.display_name}{d.id}
                    </Link>
                )
            })
        } else {
            lists = ''
        }
        return (
            <section className='warp index'>
                <section className = "container  pure-g" >
                    <h3 className = "pure-u-1" >{this.state.title}</h3>
                </section>
                <section className = "container pure-g" >
                    {lists}
                </section>
            </section>
        )
    }
}