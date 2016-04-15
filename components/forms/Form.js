'use strict'
import React from 'react'
import request from 'superagent'
import classNames from 'classnames';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {}
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.props.locked) {
            return;
        }
        let now = Date.now()
        let key = SHA1(AppId + 'UZ' + AppKey + 'UZ' + now) + "." + now
        let url = AppUrl + this.props.action
        request
            .post(url)
            .set('X-APICloud-AppId', AppId)
            .set('X-APICloud-AppKey', key)
            .send(this.props.info)
            .end(function (err, res) {
                let data = JSON.parse(res.text)
                console.log(data)
                this.props.onSubmit(data)
            }.bind(this))
    }
    render() {
        return (
            <form className="form-fields"
                role = 'form'
                encType= 'multipart/form-data'
                onSubmit={this.handleSubmit.bind(this) } >
                <fieldset className='form-fieldset'>
                    {this.props.children}
                </fieldset>
            </form>
        )
    }
}