'use strict'

import React from 'react'
import ajaxUpload from '../utils/AjaxUpload'
import qiniu from '../utils/Qiniu'

export default class Upload extends React.Component {
    constructor(props) {
        super(props)
    }
    _onChange(e) {
        let qnurl = 'https://7xj11y.com1.z0.glb.clouddn.com'
        e.preventDefault()
        let files = e.target.files
        let file = files[0]
        console.log(file)
        let token = qiniu()
        ajaxUpload({
            url: 'http://up.qiniu.com',
            name: 'file',
            key: file.name,
            token: token,
            cors: this.props.cors,
            withCredentials: this.props.withCredentials,
            file: file,
            onProgress: (e) => {
                console.log((e.loaded / e.total) * 100 + '%')
            },
            onLoad: (e) => {
                let res = JSON.parse(e.currentTarget.responseText);
                console.log(qnurl + '/' + res.name)
                console.log(res)
            },
            onError: () => {
            }
        })
    }
    render() {
        return (
            <section className = "jumbotron" >
                <h3 className = "jumbotron-heading" >上传</h3>
                <li><label htmlFor="bucket">照片: </label>
                    <input id="file" name="file" onChange={this._onChange.bind(this) } className="ipt" type="file" />
                </li>
            </section>
        )
    }
}