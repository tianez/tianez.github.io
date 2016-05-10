'use strict';
import React from 'react';
import Apicloud from '../../components/utils/Apicloud'
// import './page.less'
import Canvas from '../../components/forms/Canvas'
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {},
            style: {
                transform: 'translateY(0)'
            },
            pics: []
        }
    }
    componentDidMount() {
        this._req()
        window.addEventListener('scroll', this._scroll.bind(this), false)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this._scroll.bind(this), false)
    }
    _scroll() {
        let style = _scroll(0.5)
        this.setState(style)
            // this.setState({
            //     style: {
            //         transform: 'translateY(-' + h + 'px)'
            //     }
            // })
    }
    _req() {
        let action = 'article'
        let {
            articleId
        } = this.props.params
        action = action + '/' + articleId
        let article = ConfigStore.get(articleId)
        if (article) {
            ConfigActions.update('title', article.title)
            this.setState(article)
            setTimeout(function() {
                ConfigActions.update('loading', 0)
            }, 1)
        } else {
            Apicloud.get(action, '', function(err, res) {
                let article = JSON.parse(res.text)
                ConfigActions.update(articleId, article)
                ConfigActions.update('title', article.title)
                this.setState(article)
                console.log(article)
                showload()
            }.bind(this))
        }
    }
    render() {
        let imgsrc = "http://www.day.com/img?w=1920&h=600&r=" + this.state.id
        let thumbs
        if (this.state.pics.length > 0) {
            let pics = JSON.parse(this.state.pics)
            thumbs = pics.map(function(file, index) {
                return (
                    <Canvas className='form-canva' src={file} key= {index} />
                )
            })
        } else {
            thumbs = ''
        }
        return (
            <section className='warp page simditor'>
                <section className='banner' style={this.state.style}>
                    <img src= {imgsrc} />
                </section>
                <section className = "contents">
                <section className = "container">
                    <div className="header">
                        <h1>{this.state.title}</h1>
                        <h2>{this.state.description}</h2>
                    </div>
                    <div className="content simditor-body">
                    <div className="thumbs">{thumbs}</div>
                    <div dangerouslySetInnerHTML={{ __html: this.state.content }}>
                    </div>
                    </div>
                </section>
                </section>
            </section>
        )
    }
}