'use strict';
import React from 'react';
import Form from '../components/forms/Form'
import Input from '../components/forms/Input'
import Button from '../components/forms/Button'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {}
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
        localStorage.user = JSON.stringify(data)
        window.location.href = '/#/'
    }
    render() {
        let info = this.state.info
        return (
            <section className = "container" >
                <Form action = 'user/login'
                    info = {this.state.info}
                    legend = '登录'
                    onSubmit = {this._onSubmit.bind(this) }>
                    <Input
                        title = '用户名'
                        name = 'username'
                        placeholder = '输入你的用户名'
                        help = '输入你的用户名'
                        value = {info.username}
                        onChange = {this._onChange.bind(this) }
                        />
                    <Input
                        title = '密码'
                        type = 'password'
                        name = 'password'
                        placeholder = '输入你的密码'
                        help = '输入你的密码'
                        value = {info.password}
                        onChange = {this._onChange.bind(this) }
                        />
                    <Button value="提交" />
                </Form>
            </section>
        )
    }
}