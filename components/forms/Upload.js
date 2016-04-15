'use strict'

import React from 'react'
import ajaxUpload from '../utils/AjaxUpload'
import {getUpToken} from '../utils/Qiniu'
import Canvas from './Canvas'

// var ReactCanvas = require('react-canvas');

// var Surface = ReactCanvas.Surface;
// var Image = ReactCanvas.Image;
// var Text = ReactCanvas.Text;

export default class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: [],
            thumbs: '1',
        }
    }
    _onChange(e) {
        let qnurl = 'https://7xj11y.com1.z0.glb.clouddn.com'
        e.preventDefault()
        let files = e.target.files
        // 文件过滤
        // 只允许上传图片
        files = Array.prototype.slice.call(files, 0)
        files = files.filter(function (file) {
            return /image/i.test(file.type)
        })
        let file = files[0]
        files[0].thumb = URL.createObjectURL(file)
        let value = this.state.files.concat(files)
        this.setState({
            files: value
        })
        let token = getUpToken()
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
        console.log(this.state.files)
        let thumbs
        if (this.state.files.length > 0) {
            thumbs = this.state.files.map(function (file,index) {
                return (
                    <Canvas src={file.thumb} key= {index} />
                )
            })
        } else {
            thumbs = ''
        }
        return (
            <section className = "jumbotron" >
                <h3 className = "jumbotron-heading" >上传</h3>
                <li><label htmlFor="bucket">照片: {this.state.thumbs} </label>
                    <input id="file" name="file" onChange={this._onChange.bind(this) } className="ipt" type="file" />
                </li>
                {thumbs}
            </section>
        )
    }
}