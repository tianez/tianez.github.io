'use strict'

import React from 'react'
import request from 'superagent'
// var request = require('superagent')
import Input from '../components/forms/Input'
import Textarea from '../components/forms/Textarea'
import Range from '../components/forms/Range'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        console.log(localStorage.lastname)
        console.log(sessionStorage.name)
        let now = Date.now()
        let key = SHA1('A6984077246442' + 'UZ' + '7F7872C0-8EB2-D116-C9AF-AF02A4B65BA0' + 'UZ' + now) + "." + now
        let filter = { where: {}, skip: 0, limit: 20 }
        filter = JSON.stringify(filter)
        request
            .get('https://d.apicloud.com/mcm/api/article')
            .query({
                filter: filter
            })
            .set('X-APICloud-AppId', 'A6984077246442')
            .set('X-APICloud-AppKey', key)
            // .send({ name: 'Manny', species: 'cat' })
            .end(function(err, res) {
                let data = JSON.parse(res.text)
                console.log(data)
                console.log(data[0].title)

                // Calling the end function will send the request
            })
        request
            .post('https://d.apicloud.com/mcm/api/user/login')
            .set('X-APICloud-AppId', 'A6984077246442')
            .set('X-APICloud-AppKey', key)
            .send({ username: 'Manny', password: '123456' })
            .end(function(err, res) {
                let data = JSON.parse(res.text)
                console.log(data)
            });
    }
    render() {
        return (
            <main id='main' className = "main container" >
                <section className = "jumbotron" >
                    <h3 className = "jumbotron-heading" >这是首页212</h3>
                </section>
                <Input value="sdeds" />
                <Textarea value="987654" />
                <Range />
            </main>
        )
    }
}