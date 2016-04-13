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
            console.log(987)
            // this.props._onChange(this.props.k, value)
        }
    }
    _onChange(e) {
        let value = e.target.value.replace(/(^\s*)|(\s*$)/g, "")
        console.log(value)
        this.componentWillMount(value, true)
    }
    render() {
        let Class = classNames({
            'form-group form-horizontal animated bounceInRight': true,
            'has-error': this.state.error,
            'has-warning': this.state.warning,
            'has-success': this.state.success,
        })
        let limit = ''
        if (this.props.max) {
            limit = ' ' + this.state.length + ' / ' + this.props.max
        }
        let limitClass = classNames({
            'form-ico fa': true,
            'fa-exclamation': this.state.error,
            'fa-warning': this.state.warning,
            'fa-check': this.state.success,
        })
        let helpClass = classNames({
            'form-help': true,
            // 'help-block animated': true,
            // 'shake': this.state.error || this.state.warning,
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
                        onChange={this._onChange.bind(this) }
                        onFocus={this._onChange.bind(this) }
                        onBlur={this._onChange.bind(this) } />
                    <span className={helpClass}>{this.state.help}</span>
                </div>
            </div>
        )
    }
}

Input.defaultProps = {
    title: '邮箱地址',
    type: 'email',
    value: '',
    placeholder: '输入你的邮箱地址2',
    help: '输入你的邮箱地址',
    disabled: '',
    autocomplete: 'off',
    required: 'required',
    max: 10,
    min: 6,
}