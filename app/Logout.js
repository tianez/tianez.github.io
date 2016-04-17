'use strict';
import React from 'react';
import Apicloud from '../components/utils/Apicloud'
import Form from '../components/forms/Form'
import Input from '../components/forms/Input'
import Button from '../components/forms/Button'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        let filter = { where: {}, skip: 0, limit: 20 }
        Apicloud.get('article', filter, function (err, res) {
            let data = JSON.parse(res.text)
            console.log(data)
        }.bind(this))
        console.log(localStorage.user)
        localStorage.removeItem(user)
        window.location.href = '/#/'
    }
    render() {
        return (null)
    }
}