'use strict'
import React from 'react'
import Apicloud from '../utils/Apicloud'
import classNames from 'classnames';
import './Form.scss'

export default class Form extends React.Component {
    constructor(props) {
        super(props)
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.props.locked) {
            return;
        }
        if (this.props.apiSubmit) {
            Apicloud.post(this.props.action, this.props.info, function(err, res) {
                let data = JSON.parse(res.text)
                console.log(res)
                this.props.onSubmit(data)
            }.bind(this))
        } else {
            this.props.onSubmit(e)
        }
    }
    render() {
        return (
            React.createElement('form', {
                    className: 'form-fields form-horizontal',
                    role: 'form',
                    encType: 'multipart/form-data',
                    onSubmit: this.handleSubmit.bind(this)
                },
                React.createElement('fieldset', {
                        className: 'form-fieldset'
                    },
                    React.createElement('legend', {
                        className: 'form-legend'
                    }, this.props.legend),
                    this.props.children
                )
            )
        )
    }
}
Form.defaultProps = {
    apiSubmit: true
}