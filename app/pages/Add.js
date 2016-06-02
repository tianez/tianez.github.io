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
            info: null
        }
    }
    componentWillMount() {
        // this._req()
    }
    componentDidMount() {
        this._req()
    }
    _req() {
        let action = 'article'
        let {
            articleId
        } = this.props.params
        Apicloud.get('model?filter={"where":{"model":"article"}}', '', function(err, res) {
            let model = JSON.parse(res.text)
            if (articleId) {
                let article = ConfigStore.get(articleId)
                if (article) {
                    article._method = 'PUT'
                    this.setState({
                        info: article,
                        action: action,
                        id: articleId
                    })
                } else {
                    action = action + '/' + articleId
                    Apicloud.get(action, '', function(err, res) {
                        let article = JSON.parse(res.text)
                        article._method = 'PUT'
                        ConfigActions.update('title', article.title)
                        this.setState({
                            model: model,
                            info: article,
                            action: action,
                            id: articleId,
                        })
                    }.bind(this))
                }
            } else {
                let userId = storedb('user').find()[0].userId
                this.setState({
                    model: model,
                    action: action,
                    info: {
                        userId: userId
                    },
                })
            }
        }.bind(this))

        // let article = ConfigStore.get(articleId)
        // if (article) {
        //     article._method = 'PUT'
        //     this.setState({
        //         info: article,
        //         action: action,
        //         id: articleId
        //     })
        // } else {
        //     Apicloud.get(action, '', function(err, res) {
        //         let article = JSON.parse(res.text)
        //         article._method = 'PUT'
        //         ConfigActions.update('title', article.title)
        //         this.setState({
        //             info: article,
        //             action: action,
        //             id: articleId,
        //             ids: 'articleId',
        //         })
        //     }.bind(this))
        // }
        loadingHide()
    }
    _onChange(name, value) {
        let info = this.state.info
        info[name] = value
        this.setState({
            info: info
        })
    }
    _onSubmit(data) {
        ConfigActions.update('title', data.title)
        ConfigActions.update(data.id, data)
        if (!this.state.id) {
            ConfigActions.update('msg', '发布成功！')
            window.location.href = '/#/page/' + data.id
        } else {
            ConfigActions.update('msg', '保存成功！')
        }
    }
    render() {
        let render
        let forms
        let info = this.state.info
        let model = this.state.model
        if (model) {
            let onChange = this._onChange.bind(this)
            forms = model.map(function(d, index) {
                d.value = info[d.name] || d.default
                d.key = d.name
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
                    case "editer":
                        return (React.createElement(Editer, d))
                        break;
                    case "radio":
                        return (React.createElement(Radio, d))
                        break;
                    case "checkbox":
                        return (React.createElement(Radio, d))
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
                    React.createElement('h3', null, info.title),
                    React.createElement(Form, {
                            action: this.state.action,
                            info: info,
                            legend: info.title,
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