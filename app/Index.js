'use strict'

import React from 'react'
import request from 'superagent'
// var request = require('superagent')
import Input from '../components/forms/Input'
import Textarea from '../components/forms/Textarea'
import Range from '../components/forms/Range'
import Upload from '../components/forms/Upload'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className='warp'>
                <section className = "container" >
                    <h3 className = "jumbotron-heading" >这是首页212</h3>
                    <Upload />
                </section>
            </section>
        )
    }
}