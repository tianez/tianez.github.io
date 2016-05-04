'use strict'
import React from 'react'
import classNames from 'classnames';

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value,
            help: props.help,
        }
    }
    componentWillMount(value, _onChange) {}
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value,
        })
    }
    _onChange(e) {
        let type = this.props.type
        let v = parseInt(e.target.value)
        let value
        if (type == 'checkbox') {
            value = this.state.value
            let index = value.indexOf(v)
            if (index == -1) {
                value.push(v)
            } else {
                value.splice(index, 1)
            }
        } else {
            value = v
        }
        console.log(value)
        this.setState({
            value: value
        })
        if (this.props.onChange) {
            this.props.onChange(this.props.name, value)
        }
        // let value = e.target.value.replace(/(^\s*)|(\s*$)/, "")
        // this.componentWillMount(value, true)
    }
    render() {
        let type = this.props.type
        let value = this.state.value
        let name = this.props.name
        let options = this.props.options.map(function(d, index) {
            let checked = ''
            if (type == 'radio' && value == d.value) {
                checked = 'checked'
            } else if (type == 'checkbox') {
                if (value.indexOf(d.value) > -1) {
                    checked = 'checked'
                }
            }
            let typeClass = type == 'radio' ? 'radio' : 'checker'
            return (
                <label className="form-radio" key={index}>
                    <div className={typeClass}>
                        <span className = {checked}>
                            <input type={type} name={name} value={d.value} checked={checked} onChange ={this._onChange.bind(this) } />
                        </span>
                    </div>
                    <span>{d.title}</span>
                </label>
            )
        }.bind(this))
        return (
            <div className='form-group'>
                <label className="form-label">{this.props.title}</label>
                <div className="form-control">
                    {options}
                </div>
            </div>
        )
    }
}

Checkbox.defaultProps = {
    title: '多选框',
    type: 'checkbox',
    // type: 'radio',
    value: [2],
    // value: 2,
    options: [{
        title: '选项1',
        value: 1
    }, {
        title: '选项2',
        value: 2
    }],
    name: 'state',
    placeholder: '',
    help: '',
    disabled: '',
    required: 'required'
}