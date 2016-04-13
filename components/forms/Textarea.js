'use strict'
import React from 'react'
import classNames from 'classnames';

export default class Textarea extends React.Component {
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
        let value = e.target.value.replace(/(^\s*)|(\s*$)/, "")
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
                    <textarea
                        className="form-textarea"
                        type={this.props.type}
                        rows={this.props.rows}
                        value={this.state.value}
                        placeholder={this.props.placeholder}
                        disabled={this.props.disabled}
                        autoComplete={this.props.autocomplete}
                        onChange={this._onChange.bind(this) }
                        onFocus={this._onChange.bind(this) }
                        onBlur={this._onChange.bind(this) } />
                    <span className={helpClass}>{this.state.help}</span>
                </div>
            </div>
        )
    }
}

Textarea.defaultProps = {
    title: '邮箱地址',
    type: 'email',
    value: '',
    placeholder: '输入你的邮箱地址',
    help: '输入你的邮箱地址!',
    disabled: '',
    autocomplete: 'off',
    required: 'required',
    max: 200,
    min: 6,
    rows: 2,
}