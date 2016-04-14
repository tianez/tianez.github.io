'use strict';
import React from 'react';
import request from 'superagent'
import Form from '../components/forms/Form'
import Input from '../components/forms/Input'
import Textarea from '../components/forms/Textarea'
import Button from '../components/forms/Button'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {},
            username: '',
            password: '',
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
        ConfigActions.update('title',data.title)
        ConfigActions.update('msg','发布成功！')
        let now = Date.now()
        let key = SHA1(AppId + 'UZ' + AppKey + 'UZ' + now) + "." + now
        let url = AppUrl + 'article'
        let filter = { where: {}, skip: 0, limit: 20 }
        filter = JSON.stringify(filter)
        request
            .get(url)
            .set('X-APICloud-AppId', AppId)
            .set('X-APICloud-AppKey', key)
            .query({
                filter: filter
            })
            .end(function(err, res) {
                let data = JSON.parse(res.text)
                console.log(data)
            }.bind(this))
    }
    render() {
        return (
            <section className = "container" >
                <h2 className = "jumbotron-heading" >新增文章</h2>
                <Form action = 'article'
                    info = {this.state.info}
                    onSubmit = {this._onSubmit.bind(this) }>
                    <Input
                        title = '标题'
                        name = 'title'
                        placeholder = '标题'
                        help = '请输入标题名'
                        onChange = {this._onChange.bind(this) }
                        />
                    <Textarea
                        title = '内容'
                        name = 'content'
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