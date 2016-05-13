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
            info: {}
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
        if (articleId) {
            action = action + '/' + articleId
            let article = ConfigStore.get(articleId)
            if (article) {
                article._method = 'PUT'
                this.setState({
                    info: article,
                    action: action,
                    id: articleId
                })
            } else {
                Apicloud.get(action, '', function(err, res) {
                    let article = JSON.parse(res.text)
                    article._method = 'PUT'
                    ConfigActions.update('title', article.title)
                    console.log(article)
                    this.setState({
                        info: article,
                        action: action,
                        id: articleId,
                        ids: 'articleId',
                    })
                }.bind(this))
            }
        } else {
            this.setState({
                action: action,
            })
        }
        loadingHide()
    }
    _onChange(name, value) {
        let info = this.state.info
        info[name] = value
        console.log(info)
        this.setState({
            info: info
        })
    }
    _onSubmit(data) {
        ConfigActions.update('title', data.title)
        ConfigActions.update(data.id, data)
        if (!this.state.id) {
            ConfigActions.update('msg', '发布成功！')
            window.location.href = '/#/post/' + data.id
        } else {
            ConfigActions.update('msg', '保存成功！')
        }
    }
    render() {
        let info = this.state.info
        return (
            <section className='warp'>
                <section className = "container" >
                    <h3 className = "jumbotron-heading" >文章管理</h3>
                    <Form action = {this.state.action}
                        info = {info}
                        legend = '新增文章'
                        onSubmit = {this._onSubmit.bind(this) }>
                        <Input
                            title = '标题'
                            name = 'title'
                            value = {info.title}
                            placeholder = '标题'
                            help = '请输入标题名'
                            onChange = {this._onChange.bind(this) }
                            />
                        <Textarea
                            title = '内容'
                            name = 'description'
                            value = {info.description}
                            placeholder = '内容'
                            help = '内容'
                            onChange = {this._onChange.bind(this) }
                            />
                        <Upload 
                            name = 'thumb' 
                            value= {info.thumb}
                            multiple = {false}
                            onChange = {this._onChange.bind(this) } 
                            />
                        <Editer 
                            value= {info.content}
                            onChange = {this._onChange.bind(this) }
                            />
                        <Radio />
                        <Radio type='radio' value= {info.state}
                            title='状态'
                            options = {[{
                                title: '正常',
                                value: 0
                            }, {
                                title: '关闭',
                                value: 1
                            }]}
                            onChange = {this._onChange.bind(this) }
                            />
                        <Range />
                        <Upload 
                            name = 'pics' 
                            value= {info.pics}
                            onChange = {this._onChange.bind(this) } 
                            />
                        <Button value="提交" />
                    </Form>
                </section>
            </section>
        )
    }
}