'use strict'
import React from 'react'

export default class Add extends React.Component {
    constructor(props) {
        super(props)
        console.log(props.params)
    }
    render() {
        return (
            <div><h1>Hello world</h1></div>
        )
    }
}