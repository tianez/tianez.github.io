'use strict'
import React from 'react'
import classNames from 'classnames'
import FormGroup from './FormGroup'

let editor
export default class Editer extends React.Component {
    constructor() {
        super()
        this.state = {
            num: false
        }
    }
    componentDidMount() {
        let editor_ID = '#' + this.props.name
        let toolbar = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment'];
        editor = new Simditor({
            textarea: $(editor_ID),
            toolbar: toolbar,
            toolbarFloat: false,
            toolbarFloatOffset: '100px'
        })
        editor.on('valuechanged', function(event) {
            let v = editor.getValue()
            if (v == this.props.value) {
                return
            }
            if (this.props.onChange) {
                this.props.onChange(this.props.name, v)
            }
            event.preventDefault()
        }.bind(this))
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.value !== this.props.value
    }
    _onChange(e) {
        return
    }
    render() {
        let help = this.props.help || '请输入' + this.props.title
        console.log(help)
        let placeholder = this.props.help || '请输入' + this.props.title
        return (
            React.createElement(FormGroup, {
                    title: this.props.title,
                    help: help
                },
                React.createElement('textarea', {
                    id: this.props.name,
                    className: 'form-textarea',
                    rows: this.props.rows,
                    placeholder: placeholder,
                    disabled: this.props.disabled,
                    autoComplete: this.props.autoComplete,
                    value: this.props.value,
                    onChange: this._onChange.bind(this)
                })
            )
        )
    }
}

Editer.defaultProps = {
    title: '项目名称',
    value: '',
    name: 'content',
    disabled: '',
    autocomplete: 'off',
    required: 'required',
}