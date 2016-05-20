'use strict'
import React from 'react'
import classNames from 'classnames';

export default class Botton extends React.Component {
    constructor() {
        super()
    }
    render() {
        let Class = classNames({
            'form-group': true,
        })
        return (
            React.createElement('div', {
                    className: 'form-group'
                },
                React.createElement('div', {
                        className: 'form-control'
                    },
                    React.createElement('input', {
                        className: 'pure-button pure-button-primary',
                        type: 'submit',
                        disabled: this.props.disabled,
                        value: this.props.value
                    })
                )
            )
        )
    }
}

Botton.defaultProps = {
    value: '保存'
}