'use strict'
import React from 'react'

export default class Hidden extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            React.createElement('input', {
                type: 'hidden',
                disabled: this.props.disabled,
                value: this.props.value
            })
        )
    }
}
