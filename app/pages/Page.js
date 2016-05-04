'use strict';
import React from 'react';
import Apicloud from '../../components/utils/Apicloud'
import './page.less'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {}
        }
    }
    componentDidMount() {
        this._req()
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
        } else {
            Apicloud.get(action, '', function(err, res) {
                let article = JSON.parse(res.text)
                ConfigActions.update(articleId, article)
                ConfigActions.update('title', article.title)
                this.setState(article)
            }.bind(this))
        }
    }
    render() {
        let divStyle = {
            height: '600px',
        }
        let imgStyle = {
            marginLeft: '-960px',
            position: 'relative',
            left: '50%'
        }
        return (
            <section className='warp page'>
                <section style={divStyle}>
                    <img  style={imgStyle} src="http://www.day.com/img?w=1920&h=600&r=1" />
                </section>
                <section className = "container">
                    <div className="header">
                        <h1>{this.state.title}</h1>
                        <h2>{this.state.description}</h2>
                    </div>
                    <div className="content" dangerouslySetInnerHTML={{ __html: this.state.content }}>
                    </div>
                </section>
            </section>
        )
    }
}