'use strict'

import classNames from 'classnames'
import FormGroup from './FormGroup'

export default class Radio extends React.Component {
    constructor(props) {
        super(props)
        let option
        switch (props.options) {
            case "roles":
                option = []
                ConfigStore.get(props.options).map(function(d, index) {
                    let op = {
                        title: d.name,
                        value: d.id
                    }
                    option.push(op)
                })
                break;
            default:
                option = JSON.parse(props.options)
        }
        this.state = {
            value: props.value,
            help: props.help,
            option: option
        }
    }
    _onChange(e) {
        let value = e.target.value
        this.setState({
            value: value
        })
        if (this.props.onChange) {
            this.props.onChange(this.props.name, value)
        }
    }
    render() {
        let value = this.state.value
        let name = this.props.name

        // let option = JSON.parse(this.props.options)
        // let option = this.props.options
        let options = this.state.option.map(function(d, index) {
            let checked = ''
            if (value == d.value) {
                checked = 'checked'
            }
            let typeClass = 'radio'
            return (
                React.createElement('label', {
                        key: index,
                        className: 'form-radio',
                        title: this.props.title,
                        help: this.state.help
                    },
                    React.createElement('div', {
                            className: typeClass
                        },
                        React.createElement('span', {
                                className: checked
                            },
                            React.createElement('input', {
                                type: 'radio',
                                name: name,
                                value: d.value,
                                checked: checked,
                                onChange: this._onChange.bind(this)
                            })
                        )
                    ),
                    React.createElement('span', null, d.title)
                )
            )
        }.bind(this))
        return (
            React.createElement(FormGroup, {
                    title: this.props.title,
                    help: this.state.help
                },
                options
            )
        )
    }
}

Radio.defaultProps = {
    title: '单选框',
    type: 'radio',
    value: 2,
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
