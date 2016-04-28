'use strict';
import React from 'react';
import request from 'superagent'
import Apicloud from '../../components/utils/Apicloud'
import {Form,Input,Textarea,Radio,Button} from '../../components/forms/index'

export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {}
        }
    }
    componentWillMount() {
 
    }
    componentDidMount() {
        let action = 'article'
        let {
            bookId
        } = this.props.params
        if (bookId) {
            action = action + '/' + bookId
            let article = ConfigStore.get(bookId)
            if (article) {
                article._method = 'PUT'
                this.setState({
                    info: article,
                    action: action,
                    id: bookId
                })
            } else {
                Apicloud.get(action, '', function(err, res) {
                    let article = JSON.parse(res.text)
                    article._method = 'PUT'
                    console.log(article)
                    ConfigActions.update('title', article.title)
                        // ConfigActions.update(article.id, article)
                    this.setState({
                        info: article,
                        action: action,
                        id: bookId,
                        ids: 'bookId',
                    })
                }.bind(this))
            }
        } else {
            this.setState({
                action: action,
            })
        }
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
                    name = 'content'
                    value = {info.content}
                    placeholder = '内容'
                    help = '内容'
                    onChange = {this._onChange.bind(this) }
                    />
                <Radio /> 
                <Button value="提交" />
            </Form>
                </section>
               
            </section>
        )
    }
}