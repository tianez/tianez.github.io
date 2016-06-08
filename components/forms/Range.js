'use strict'

import classNames from 'classnames'
import FormGroup from './FormGroup'

export default class Range extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value,
            help: props.help,
        }
    }
    componentWillMount() {
        let help = '滑块值域' + this.props.min + '~' + this.props.max + '，' + this.props.help
        this.setState({
            help: help,
        })
    }
    _onChange(e) {
        let value = e.target.value
        if (value == this.state.value) {
            return
        }
        let help = '滑块值域' + this.props.min + '~' + this.props.max + '，当前值：' + value
        this.setState({
            value: value,
            help: help,
        })
        if (this.props.onChange) {
            this.props.onChange(this.props.name, value)
        }
    }
    render() {
        return (
            React.createElement(FormGroup, {
                    title: this.props.title,
                    help: this.state.help
                },
                React.createElement('input', {
                    className: 'form-range',
                    type: this.props.type,
                    max: this.props.max,
                    min: this.props.min,
                    disabled: this.props.disabled,
                    value: this.state.value,
                    onChange: this._onChange.bind(this)
                })
            )
        )
    }
}

Range.defaultProps = {
    title: '滑条',
    type: 'range',
    value: '',
    help: '滑动滑条选择你的值！',
    disabled: '',
    required: 'required',
    max: 10,
    min: 6,
}
