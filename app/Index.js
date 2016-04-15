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
        let now = Date.now()
        let key = SHA1(AppId + 'UZ' + AppKey + 'UZ' + now) + "." + now
        let url = AppUrl + 'file'
        let data = {
            "url": "C:\Users\Public\Pictures\Sample Pictures\水母.jpg",
            "name": "walle.jpg",
            "type": "image/jpeg",
            "size": 68988,
            "filename": "walle.jpg"
        }
        request
            .post(url) 
            .set('X-APICloud-AppId', 'A6984077246442')
            .set('X-APICloud-AppKey', key)
            .send(data)
            .end(function (err, res) {
                let data = JSON.parse(res.text)
                console.log(data)
            }.bind(this))
    }
    render() {
        return (
            <main id='main' className = "main container" >
                <section className = "jumbotron" >
                    <h3 className = "jumbotron-heading" >这是首页212</h3>
                </section>
                <Upload />
            </main>
        )
    }
}