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
    componentDidMount() {
        let url = '../' + this.props.params.list + '/detail/' + this.props.params.id
        request.get(url)
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
                    case "textarea":
                        return (React.createElement(Textarea, d))
                        break;
                    case "image":
                        return (React.createElement(Upload, d))
                        break;
                    case "select2":
                        let dd = {}
                        let options = []
                        let isselected;
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
                    default:
                        break;
                }
            })
        }
        if (info) {
            render =
                <section className = "container" >
                    <h3 className = "jumbotron-heading" >{this.state.title}</h3>
                    <Form action = {this.state.action}
                        info = {info}
                        legend = {this.state.title}
                        apiSubmit = {false}
                        onSubmit = {this._onSubmit.bind(this) }>
                        {forms}
                        <Button value="提交" />
                    </Form>
                </section>
        }
        return (<section className='warp'>{render}</section>)
    }
}