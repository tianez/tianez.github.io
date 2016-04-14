'use strict'

import React from 'react'
import request from 'superagent'
// var request = require('superagent')
import Input from '../components/forms/Input'
import Textarea from '../components/forms/Textarea'
import Range from '../components/forms/Range'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main id='main' className = "main container" >
                <section className = "jumbotron" >
                    <h3 className = "jumbotron-heading" >这是首页21232322</h3>
                </section>
            </main>
        )
    }
}