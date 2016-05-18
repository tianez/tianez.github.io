'use strict';
import React from 'react';
import classNames from 'classnames'
import Apicloud from '../../components/utils/Apicloud'
// import './page.less'
import Canvas from '../../components/forms/Canvas'
let swiper
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {},
            style: {
                transform: 'translateY(0)'
            },
            pics: [],
            isshow: false
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
            loadingHide()
            this.setState(article)
            this.swiperInit()
        } else {
            Apicloud.get(action, '', function(err, res) {
                article = JSON.parse(res.text)
                ConfigActions.updateArticle(article)
                loadingHide()
                this.setState(article)
                this.swiperInit()
            }.bind(this))
        }
    }
    swiperInit() {
        swiper = new Swiper('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            // Disable preloading of all images
            preloadImages: false,
            // Enable lazy loading
            lazyLoading: true
        })
    }
    _hide() {
        this.setState({
            isshow: false
        })
    }
    _show(e) {
        e.stopPropagation()
        let no = e.currentTarget.id.split("-")[1]
        swiper.slideTo(no, 0, false)
        this.setState({
            isshow: true
        })
    }
    render() {
        let imgsrc = this.state.thumb ? JSON.parse(this.state.thumb)[0] + '-max' : "http://www.day.com/img?w=1920&h=600&r=" + this.state.id

        let style = {
            backgroundImage: 'url(' + imgsrc + ')'
        }
        let thumbs
        let pics
        if (this.state.pics.length > 0) {
            let files = JSON.parse(this.state.pics)
            thumbs = files.map(function(file, index) {
                let id = 'swiper-' + index
                file += '-thumb'
                return (
                    <div className='canvas' id ={id} onClick= {this._show.bind(this)}>
                        <Canvas className='form-canva' src={file} width= {250} key= {index} />
                    </div>
                )
            }.bind(this))
            pics = files.map(function(file, index) {
                file += '-max'
                return (
                    <div className="swiper-slide" key= {index}>
                        <img data-src={file} className="swiper-lazy" />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </div>
                )
            })
        } else {
            thumbs = ''
            pics = ''
        }
        let swiperClass = classNames({
            'swiper-container swiper-container-horizontal': true,
            'swiper-show': this.state.isshow
        })
        let edit = '#/edit/' + this.state.id
        return (
            <section className='warp page simditor'>
                <section className='banner' style={this.state.style}>
                    <div className = 'banner_i' style={style}></div>
                </section>
                <section className = "contents">
                    <section className = "container">
                        <div className="header">
                            <h1>{this.state.title}--<a href={edit} target="_blank">编辑</a></h1>
                            <h2>{this.state.description}</h2>
                        </div>
                        <div className="content simditor-body">
                            <div className="thumbs">{thumbs}</div>
                            <div dangerouslySetInnerHTML={{ __html: this.state.content }}>
                            </div>
                        </div>
                    </section>
                </section>
                <section className={swiperClass}>
                    <div className="swiper-wrapper" onClick={this._hide.bind(this) }>
                        {pics}
                    </div>
                    <div className="swiper-pagination swiper-pagination-white"></div>
                    <div className="swiper-button-next swiper-button-white"></div>
                    <div className="swiper-button-prev swiper-button-white"></div>
                </section>
            </section>
        )
    }
}