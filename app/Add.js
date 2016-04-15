'use strict';
import React from 'react';
import request from 'superagent'
import Form from '../components/forms/Form'
import Input from '../components/forms/Input'
// var Input = require('../components/forms/Input')
import Textarea from '../components/forms/Textarea'
import Button from '../components/forms/Button'

export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {}
        } 
    }
    componentWillMount() {
        console.log(3)
    }
    componentDidMount() {
        console.log(2)
        let action = 'article'
        let { bookId } = this.props.params
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
                let now = Date.now()
                let key = SHA1(AppId + 'UZ' + AppKey + 'UZ' + now) + "." + now
                let url = AppUrl + action
                request
                    .get(url)
                    .set('X-APICloud-AppId', AppId)
                    .set('X-APICloud-AppKey', key)
                    .end(function (err, res) {
                        let article = JSON.parse(res.text)
                        article._method = 'PUT'
                        console.log(article)
                        ConfigActions.update('title', article.title)
                        // ConfigActions.update(article.id, article)
                        console.log(6)
                        this.setState({
                            info: article,
                            action: action,
                            id: bookId,
                            ids: 'bookId',
                        })
                    }.bind(this))
            }
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
        ConfigActions.update('msg', '发布成功！')
        ConfigActions.update(data.id, data)
        console.log(this.state.id)
        if (!this.state.id) {
            window.location.href = '/#/post/' + data.id
        }
    }
    render() {
        console.log(1)
        let info = this.state.info
        return (
            <section className = "container" >
                <h2 className = "jumbotron-heading" >新增文章 {this.state.info.title}</h2>
                <Form action = {this.state.action}
                    info = {info}
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
                    <Button value="提交" />
                </Form>
            </section>
        )
    }
}