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
        let key = SHA1('A6984077246442' + 'UZ' + '7F7872C0-8EB2-D116-C9AF-AF02A4B65BA0' + 'UZ' + now) + "." + now
        let url = this.props.apiurl + this.props.action
        request
            .post(url)
            .set('X-APICloud-AppId', 'A6984077246442')
            .set('X-APICloud-AppKey', key)
            .send(this.props.info)
            .end(function(err, res) {
                let data = JSON.parse(res.text)
                console.log(data)
                this.props.onSubmit(data)
            }.bind(this))

    }
    render() {
        return (
            <form className=""
                role = 'form'
                encType= 'multipart/form-data'
                onSubmit={this.handleSubmit.bind(this) } >
                <fieldset>
                    {this.props.children}
                </fieldset>
            </form>
        )
    }
}

Form.defaultProps = {
    apiurl: 'https://d.apicloud.com/mcm/api/',
}