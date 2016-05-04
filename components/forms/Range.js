'use strict'
import React from 'react'
import classNames from 'classnames';

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
        console.log(value)
            // this.props._onChange(this.props.k, value)
    }
    render() {
        let Class = classNames({
            'form-group': true,
        })
        let helpClass = classNames({
            'form-help': true,
        })
        return (
            <div className={Class}>
                <label className="form-label">{this.props.title}</label>
                <div className="form-control">
                    <input
                        className='form-range'
                        type='range'
                        max={this.props.max}
                        min={this.props.min}
                        disabled={this.props.disabled}
                        value={this.state.value}
                        onChange={this._onChange.bind(this) } />
                    <span className={helpClass}>{this.state.help}</span>
                </div>
            </div>
        )
    }
}

Range.defaultProps = {
    title: '滑条',
    value: '',
    help: '滑动滑条选择你的值！',
    disabled: '',
    required: 'required',
    max: 10,
    min: 6,
}