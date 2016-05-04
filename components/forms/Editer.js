'use strict'
import React from 'react'
import classNames from 'classnames';
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
            toolbarFloat:false,
            toolbarFloatOffset:'100px'
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
            // if (value) {
            //     editor.setValue(value)
            // }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.value == nextProps.value) {
            return
        }
        if (this.state.num) {
            return
        }
        this.setState({
            num: true
        })
        editor.setValue(nextProps.value)
            // this.componentDidMount(nextProps.value)
    }
    _onChange(e) {
        return
    }
    render() {
        let Class = classNames({
            'form-group': true
        })
        let helpClass = classNames({
            'form-help': true
        })
        return (
            <div className={Class}>
                <label className="form-label">{this.props.title}</label>
                <div className="form-control">
                    <textarea id={this.props.name} 
                        className="form-textarea"
                        value={this.props.value}
                        placeholder={this.props.placeholder}
                        disabled={this.props.disabled}
                        onChange={this._onChange.bind(this) }
                        autofocus />
                    <span className={helpClass}>{this.props.help}</span>
                </div>
            </div>
        )
    }
}

Editer.defaultProps = {
    title: '项目名称',
    value: '',
    name: 'content',
    placeholder: '输入你的邮箱地址',
    help: '输入你的邮箱地址!',
    disabled: '',
    autocomplete: 'off',
    required: 'required',
}