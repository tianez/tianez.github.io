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
        Apicloud.get(this.props.params.clouds, '', function(err, res) {
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
                    React.createElement(Link, {
                            to: curl,
                            className: 'service-box pure-u-1',
                            key: index
                        },
                        d.id
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
                    lists
                )
            )
        )
    }
}
