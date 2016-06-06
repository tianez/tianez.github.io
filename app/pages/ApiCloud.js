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
    Button,
    Hidden
} from '../../components/forms/index'

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: null
        }
    }
    componentWillMount() {
        let action = this.props.params.clouds
        let title = 'wenzhang'
        switch (action) {
            case "article":
                title = '文章'
                break;
            default:
                title = '字段'
                break;
        }
        this.setState({
            title: title
        })
    }
    componentDidMount() {
        let action = this.props.params.clouds
        let actions = '"' + this.props.params.clouds + '"'
        var arr = [
            ['中', '国'],
            ['啊', '的'],
            ['哦', '的']
        ];
        console.log(arr);
        arr.sort(function(x, y) {
            return x[0].localeCompare(y[0]);
        });
        console.log(arr);
        let {
            articleId
        } = this.props.params
        let filter = {
            where: {
                model: this.props.params.clouds
            }
        }
        Apicloud.get('model', filter, function(err, res) {
            let model = JSON.parse(res.text)
            if (articleId !== 'add') {
                action = action + '/' + articleId
                let article = ConfigStore.get(articleId)
                if (article) {
                    article._method = 'PUT'
                    this.setState({
                        model: model,
                        title: '编辑' + this.state.title,
                        info: article,
                        action: action,
                        id: articleId
                    })
                } else {
                    Apicloud.get(this.props.params.clouds + '/' + articleId, '', function(err, res) {
                        let article = JSON.parse(res.text)
                        article._method = 'PUT'
                        ConfigActions.update('title', article.title)
                        this.setState({
                            model: model,
                            title: '编辑' + this.state.title,
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
                    title: '新增' + this.state.title,
                    action: action,
                    info: {
                        userId: userId
                    },
                })
            }
        }.bind(this))
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
            window.location.href = '/#/apicloud/' + this.props.params.clouds + '/' + data.id
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
                d.value = info[d.name] || ''
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
                    case "hidden":
                            return (React.createElement(Hidden, d))
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

Component.defaultProps = {
    title: {
        article: 'sdsds'
    }
}
