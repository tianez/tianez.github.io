'use strict'
import React from 'react'
import classNames from 'classnames'
import Regs from '../utils/regs'
import FormGroup from './FormGroup'

export
default class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value,
            help: props.help,
        }
    }
    componentWillMount() {
        let length = this.props.value.length
        let help = this.props.help || '请输入' + this.props.title
        this.setState({
            help: help,
            length: length
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.value !== this.props.value
    }
    _onChange(e) {
        let error
        let warning
        let success
        let value = e.target.value.replace(/(^\s*)|(\s*$)/, "")
        let length = value.length
        let help = this.props.help || '请输入' + this.props.title
        if (length > 0) {
            if (this.props.min && length < this.props.min) {
                help = '请输入至少' + this.props.min + '个字符！'
                error = true
            } else if (this.props.max && length > this.props.max) {
                help = '请输入至多' + this.props.max + '个字符！'
                error = true
            }
            if (!error) {
                success = true
            }
        } else if (this.props.required) {
            help = this.props.title + '必须填写！'
            warning = true
        }
        this.setState({
            value: value,
            help: help,
            length: length,
            error: error,
            warning: warning,
            success: success,
        })
        if (this.props.onChange) {
            this.props.onChange(this.props.name, value)
        }
    }
    render() {
        let Class = classNames({
            'has-error': this.state.error,
            'has-warning': this.state.warning,
            'has-success': this.state.success
        })
        let limit = ' ' + this.state.length
        if (this.props.max) {
            limit += ' / ' + this.props.max
        }
        return (
            React.createElement(FormGroup, {
                    class: Class,
                    title: this.props.title,
                    limit: limit,
                    help: this.state.help
                },
                React.createElement('input', {
                    className: 'form-input',
                    type: this.props.type,
                    max: this.props.max,
                    min: this.props.min,
                    placeholder: this.props.placeholder,
                    disabled: this.props.disabled,
                    autoComplete: this.props.autoComplete,
                    value: this.state.value,
                    onChange: this._onChange.bind(this)
                })
            )
        )
    }
}

Input.defaultProps = {
    type: 'text',
    value: '',
    autocomplete: 'off',
    required: 'required',
}