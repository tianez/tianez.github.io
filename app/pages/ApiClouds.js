'use strict'

import React from 'react';
import request from 'superagent'
import {
    Link
} from 'react-router'
import Apicloud from '../../components/utils/Apicloud'
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: null,
            title: 'title'
        }
    }
    componentWillMount() {
        let id = this.props.params.clouds
    }
    componentDidMount() {
        let filter = {
            where: {
                state: 1
            }, 
            order: ['order DESC', 'createdAt DESC'],
            limit: $_GET['limit'] ? parseInt($_GET['limit']) : 20,
            skip: $_GET['skip'] ? parseInt($_GET['skip']) : 0
        }
        Apicloud.get(this.props.params.clouds, filter, function(err, res) {
            if (err) {
                ConfigActions.msg(res.status + 'error');
            } else {
                let data = JSON.parse(res.text)
                if (data.res == 404) {
                    ConfigActions.update('title', data.msg)
                    this.setState({
                        title: data.msg,
                    });
                    return
                }
                console.log(data)
                this.setState({
                    info: data
                })
            }
        }.bind(this))
        var el = document.getElementById('uid')
        var sortable = Sortable.create(el, {
            onStart: function( /**Event*/ evt) {
                evt.oldIndex; // element index within parent
                console.log(evt.oldIndex);
            },
        })
        loadingHide()
    }
    render() {
        let lists
        if (this.state.info) {
            lists = this.state.info.map(function(d, index) {
                let curl = '/apicloud/' + this.props.params.clouds + '/' + d.id
                return (
                    React.createElement('tr', {
                            className: 'pure-table-odd',
                            key: index
                        },
                        React.createElement('td', {},
                            React.createElement(Link, {
                                    to: curl,
                                    className: 'service-box pure-u-1'
                                },
                                d.id
                            )
                        ),
                        React.createElement('td', {}, d.title),
                        React.createElement('td', {}, 'Model'),
                        React.createElement('td', {}, '#')
                    )
                )
            }.bind(this))
        } else {
            lists = ''
        }
        return (
            React.createElement('section', {
                    className: 'warp index'
                },
                React.createElement('section', {
                        className: 'container  pure-g'
                    },
                    React.createElement('h3', {
                            className: 'pure-u-1'
                        },
                        this.state.title
                    )
                ),
                React.createElement('section', {
                        id: 'uid',
                        className: 'container  pure-g'
                    },
                    React.createElement('div', {
                            className: 'pure-u-1'
                        },
                        React.createElement('table', {
                                className: 'pure-table',
                                style: {
                                    width: "100%"
                                }
                            },
                            React.createElement('thead', {},
                                React.createElement('tr', {},
                                    React.createElement('th', {}, '#'),
                                    React.createElement('th', {}, 'title'),
                                    React.createElement('th', {}, 'Model'),
                                    React.createElement('th', {}, '#')
                                )
                            ),
                            React.createElement('tbody', {},
                                lists
                            )
                        )
                    )
                )
            )
        )
    }
}
