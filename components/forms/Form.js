'use strict'
import React from 'react'
import Apicloud from '../utils/Apicloud'
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
        Apicloud.post(this.props.action, this.props.info, function (err, res) {
            let data = JSON.parse(res.text)
            console.log(res)
            this.props.onSubmit(data)
        }.bind(this))
    }
    render() {
        return (
            <form className="form-fields form-horizontal"
                role = 'form'
                encType= 'multipart/form-data'
                onSubmit={this.handleSubmit.bind(this) } >
                <fieldset className='form-fieldset'>
                    <legend className='form-legend'>{this.props.legend}</legend>
                    {this.props.children}
                </fieldset>
            </form>
        )
    }
}