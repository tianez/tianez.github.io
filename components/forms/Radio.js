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
    componentWillMount(value, _onChange) {
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value,
        })
    }
    _onChange(e) {
        console.log(e.target.value)
        // let value = e.target.value.replace(/(^\s*)|(\s*$)/, "")
        // this.componentWillMount(value, true)
    }
    render() {
        let type = this.props.type
        let value = this.state.value
        let name = this.props.name
        let options = this.props.options.map(function (d, index) {
            let checked = false
            if (type == 'radio' && value == d.value) {
                checked = true
            } else if (type == 'checkbox' && value.indexOf(d.value) > -1) {
                checked = true
            }
            let Class = classNames({
                'checkbox': true,
                'checked': checked
            })
            return (
                <div className={Class} key = {index}>
                    <label>
                        <input type={type} name={name} value={d.value} onClick ={this._onChange.bind(this) } />
                        {d.title}
                    </label>
                </div>
            )
        }.bind(this))
        return (
            <div>{options}</div>
        )
    }
}

Checkbox.defaultProps = {
    title: '多选框',
    type: 'radio',
    options: [
        { title: 'duuxnasd', value: 1 },
        { title: 'duuxnasd2', value: 3 }
    ],
    value: 3,
    name: 'name',
    placeholder: '',
    help: '',
    disabled: '',
    required: 'required'
}