'use strict'
import React from 'react'
import classNames from 'classnames';
import Regs from '../utils/regs';
import './input.scss'

export
default class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value,
            help: props.help,
        }
    }
    componentWillMount(value, _onChange) {
        let error = false
        let warning = false
        let success = false
        if (!_onChange) {
            value = this.props.value
        }
        let length = value.length
        let help = this.props.help
        if (value) {
            let type = this.props.type
            if (Regs[type] && !Regs[type].test(value)) {
                if (Regs[type + '-help']) {
                    help = Regs[type + '-help']
                }
                error = true
            }
            if (this.props.min && length < this.props.min) {
                help = '请输入至少' + this.props.min + '个字符！'
                error = true
            } else if (this.props.max && length > this.props.max) {
                help = '请输入至多' + this.props.max + '个字符！'
                value = this.state.value
                length = this.props.max
                error = true
            }
            if (!error) {
                success = true
            }
        } else if (this.props.required && _onChange) {
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
        if (success || !this.props.required && _onChange) {
            if (this.props.onChange) {
                this.props.onChange(this.props.name, value)
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value,
            length: nextProps.value.length,
        })
    }
    _onChange(e) {
        let value = e.target.value.replace(/(^\s*)|(\s*$)/g, "")
        this.componentWillMount(value, true)
    }
    render() {
        let Class = classNames({
            'form-group animated bounceInRight': true,
            'has-error': this.state.error,
            'has-warning': this.state.warning,
            'has-success': this.state.success
        })
        let limit = ' ' + this.state.length
        if (this.props.max) {
            limit += ' / ' + this.props.max
        }
        let limitClass = classNames({
            'form-ico fa': true,
            'fa-exclamation': this.state.error,
            'fa-warning': this.state.warning,
            'fa-check': this.state.success
        })
        let helpClass = classNames({
            'form-help': true
        })
        return (
            <div className={Class}>
                <label className="form-label">{this.props.title}</label>
                <div className="form-control">
                    <i className={limitClass}>{limit}</i>
                    <input
                        className="form-input"
                        type={this.props.type}
                        max={this.props.max}
                        min={this.props.min}
                        placeholder={this.props.placeholder}
                        disabled={this.props.disabled}
                        autoComplete={this.props.autocomplete}
                        value={this.state.value}
                        onChange={this._onChange.bind(this) } />
                    <span className={helpClass}>{this.state.help}</span>
                </div>
            </div>
        )
    }
}

Input.defaultProps = {
    type: 'text',
    value: '',
    help: '',
    autocomplete: 'off',
    required: 'required',
}