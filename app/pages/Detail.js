'use strict';
import React from 'react';
import request from 'superagent'
import Apicloud from '../../components/utils/Apicloud'
import {
    Form,
    Input,
    Textarea,
    Editer,
    Radio,
    Upload,
    Range,
    Button
} from '../../components/forms/index'

export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: null,
            mods: null,
            info_o: {},
            select: {},
            title: '',
            id: this.props.params.id,
            url: '../' + this.props.params.list + '/detail/' + this.props.params.id,
            query: {
                t: this.props.params.list
            }
        }
    }
    componentWillMount() {
        let id = this.props.params.id
        let url = '../' + this.props.params.list
        switch (id) {
            case "add":
                url = url + '/' + id
                break;
            default:
                url = url + '/detail/' + id
                break;
        }
        this.setState({
            url: url
        })
    }
    componentDidMount() {
        request.get(this.state.url)
            .query(this.state.query)
            .end(function(err, res) {
                if (err) {
                    ConfigActions.msg(res.status + 'error');
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
                    ConfigActions.update('title', data.title)
                    console.log(data)
                    this.setState({
                        mods: data.mods,
                        info: data.info,
                        select: data.select,
                        title: data.title,
                    })
                }
                loadingHide()
            }.bind(this))
    }
    _onChange(name, value) {
        let info = this.state.info
        if (info.length == 0) {
            info = {}
        }
        info[name] = value
        this.setState({
            info: info
        })
    }
    _onSubmit(e) {
        request.post(this.state.url)
            .query(this.state.query)
            .send(this.state.info)
            .end(function(err, res) {
                if (err) {
                    let msg = [res.status + 'error']
                } else {
                    let data = JSON.parse(res.text);
                    ConfigActions.update('msg', data.msg[0])
                }
            }.bind(this))
    }
    render() {
        let render
        let forms
        let info = this.state.info
        let data = this.state.mods
        if (data) {
            let onChange = this._onChange.bind(this)
            forms = data[0].fields.map(function(d, index) {
                let value = info[d.k] || d.default
                d.value = value || ''
                d.key = d.k
                d.name = d.k
                d.onChange = onChange
                switch (d.type) {
                    case "text":
                        return (React.createElement(Input, d))
                        break;
                    case "password":
                        return (React.createElement(Input, d))
                        break;
                    case "email":
                        return (React.createElement(Input, d))
                        break;
                    case "textarea":
                        return (React.createElement(Textarea, d))
                        break;
                    case "upload":
                        return (React.createElement(Upload, d))
                        break;
                    case "image":
                        return (React.createElement(Upload, d))
                        break;
                    case "select":
                        let dd = {}
                        let options = []
                        let ds = d.lists
                        for (let key in ds) {
                            let tab = {
                                title: ds[key],
                                value: key
                            }
                            options.push(tab)
                        }
                        dd.options = options
                        dd.type = 'radio'
                        dd.title = d.title
                        dd.value = d.value
                        dd.key = d.key
                        dd.k = d.key
                        dd.default = d.default
                        dd.lists = d.lists
                        dd.name = d.key
                        dd.onChange = onChange
                        return (React.createElement(Radio, dd))
                        break;
                    case "select2":
                        let dd2 = {}
                        let options2 = []
                        let ds2 = d.lists
                        for (let key in ds2) {
                            let tab2 = {
                                title: ds2[key],
                                value: key
                            }
                            options2.push(tab2)
                        }
                        dd2.options = options2
                        dd2.type = 'radio'
                        dd2.title = d.title
                        dd2.value = d.value
                        dd2.key = d.key
                        dd2.k = d.key
                        dd2.default = d.default
                        dd2.lists = d.lists
                        dd2.name = d.key
                        dd2.onChange = onChange
                        return (React.createElement(Radio, dd2))
                        break;
                    default:
                        break;
                }
            })
        }
        if (info) {
            render =
                React.createElement('section', {
                        className: 'container'
                    },
                    React.createElement('h3', null, this.state.title),
                    React.createElement(Form, {
                            action: this.state.action,
                            info: info,
                            legend: this.state.title,
                            apiSubmit: false,
                            onSubmit: this._onSubmit.bind(this)
                        },
                        forms,
                        React.createElement(Button)
                    )
                )
        }
        return (
            React.createElement('section', {
                className: 'warp'
            }, render)
        )
    }
}