'use strict'

import classNames from 'classnames';
import ajaxUpload from '../utils/AjaxUpload'
import {
    getUpToken,
    getHash
} from '../utils/Qiniu'
import Canvas from './Canvas'
import FormGroup from './FormGroup'

let swiper2

export default class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: props.files,
            thumbs: props.thumbs,
            help: props.help,
            multiple: props.multiple
        }
    }
    componentWillMount() {
        let thumbs = this.props.value
        if (thumbs) {
            thumbs = JSON.parse(thumbs)
        } else {
            thumbs = []
        }
        let files = []
        let count = thumbs.length
        if (count == 0) {
            return
        }
        if (this.props.multiple) {
            let i
            for (i = 0; i < count; i++) {
                let file = []
                file.thumb = thumbs[i]
                file.state = 4
                files[i] = file
            }
        } else {
            let file = []
            let thumb = []
            file.thumb = thumbs[0]
            file.state = 4
            files[0] = file
            thumb.concat(thumbs[0])
            thumbs = thumb
        }
        this.setState({
            files: files,
            thumbs: thumbs
        })
    }
    componentDidUpdate() {
        this.swiperInit()
    }
    _onChange(e) {
        e.preventDefault()
        let files = e.target.files
            // 文件过滤
            // 只允许上传图片
        files = Array.prototype.slice.call(files, 0)
        files = files.filter(function(file) {
            return /image/i.test(file.type)
        })
        let value
        if (this.props.multiple) {
            value = this.state.files
        } else {
            value = []
        }
        let count = this.props.multiple ? files.length : 1
        let i
        for (i = 0; i < count; i++) {
            files[i].thumb = URL.createObjectURL(files[i])
            files[i].state = 0
            value = value.concat(files[i])
        }
        this.setState({
            files: value
        })
        let count2 = this.props.multiple ? value.length : 1
        for (i = 0; i < count2; i++) {
            if (value[i].state != 1 && value[i].state != 4) {
                this.uploadFile(value, i)
            }
        }
    }
    uploadFile(files, id) {
        let qnurl = 'http://7xj11y.com1.z0.glb.clouddn.com'
        let token = getUpToken()
        let file = files[id]
        return ajaxUpload({
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
                let thumbs
                let res = JSON.parse(e.currentTarget.responseText)
                files[id].state = 1
                    // file.url = qnurl + '/' + res.name
                if (this.props.multiple) {
                    thumbs = this.state.thumbs
                } else {
                    thumbs = []
                }
                thumbs.push(qnurl + '/' + res.name)
                this.setState({
                    files: files,
                    thumbs: thumbs
                })
                thumbs = JSON.stringify(thumbs)
                if (this.props.onChange) {
                    this.props.onChange(this.props.name, thumbs)
                }
            },
            onError: () => {
                files[id].state = 2
                this.setState({
                    files: files
                })
            }
        })
    }
    _onClickd(e) {
        if (this.props.multiple) {
            console.log(1232)
            e.stopPropagation()
        } else {
            console.log(123)
        }
    }
    swiperInit() {
        let swiper = '#swiper' + this.props.name
        let nextButton = '.swiper-next-' + this.props.name
        let prevButton = '.swiper-prev-' + this.props.name
        let pagination = '.swiper-pagination-' + this.props.name
        if (this.state.multiple) {
            swiper2 = new Swiper(swiper, {
                nextButton: nextButton,
                prevButton: prevButton,
                pagination: pagination,
                paginationClickable: true,
                direction: 'horizontal',
                // Disable preloading of all images
                preloadImages: false,
                // Enable lazy loading
                lazyLoading: true,
                // loop: true
            })
        } else {
            new Swiper(swiper, {
                nextButton: nextButton,
                prevButton: prevButton,
                pagination: pagination,
                paginationClickable: true,
                direction: 'horizontal',
                // Disable preloading of all images
                preloadImages: false,
                // Enable lazy loading
                lazyLoading: true,
                // loop: true
            })
        }
    }
    _hide() {
        this.setState({
            isshow: false
        })
    }
    _show(e) {
        e.stopPropagation()
        let no = e.currentTarget.id.split("-")[1]
        console.log(no)
        if (this.state.multiple) {
            swiper2.slideTo(no, 0, false)
        }
        this.setState({
            isshow: true
        })
    }
    render() {
        let thumbs
        let pics
        if (this.state.files.length > 0) {
            thumbs = this.state.files.map(function(file, index) {
                let msg
                switch (file.state) {
                    case 0:
                        msg = '等待上传';
                        break;
                    case 1:
                        msg = '上传成功';
                        break;
                    case 2:
                        msg = '上传失败';
                        break;
                    case 3:
                        msg = '上传中';
                        break;
                    case 4:
                        msg = '已上传';
                        break;
                    default:
                        break;
                }
                let style = {
                    float: 'left',
                    animationDelay: 50 * index + 'ms',
                    animationDuration: '500ms',
                }
                let thumb = file.thumb
                let patt1 = new RegExp("blob:http")
                if (!patt1.test(thumb)) {
                    thumb += '-thumb'
                }
                let id = 'swiper-' + index
                return (
                    React.createElement('div', {
                            key: index,
                            className: 'animated zoomIn',
                            id: id,
                            style: style,
                            onClick: this._show.bind(this)
                        },
                        React.createElement(Canvas, {
                            className: 'form-canva',
                            src: thumb
                        }),
                        React.createElement('div', null, msg)
                    )
                )
            }.bind(this))
            pics = this.state.files.map(function(file, index) {
                let thumb = file.thumb
                let patt1 = new RegExp("blob:http")
                if (!patt1.test(thumb)) {
                    thumb += '-max'
                }
                return (
                    React.createElement('div', {
                            key: index,
                            className: 'swiper-slide'
                        },
                        React.createElement('img', {
                            className: 'swiper-lazy',
                            'data-src': thumb
                        }),
                        React.createElement('div', {
                            className: 'swiper-lazy-preloader swiper-lazy-preloader-white'
                        })
                    )
                )
            }.bind(this))
        } else {
            thumbs = ''
            pics = ''
        }
        let swiper = 'swiper' + this.props.name
        let nextButton = 'swiper-button-next swiper-button-white swiper-next-' + this.props.name
        let prevButton = 'swiper-button-prev swiper-button-white swiper-prev-' + this.props.name
        let pagination = 'swiper-pagination swiper-pagination-white swiper-pagination-' + this.props.name
        let swiperClass = classNames({
            'swiper-container swiper-upload': true,
            'swiper-show': this.state.isshow
        })
        return (
            React.createElement(FormGroup, {
                    title: this.props.title
                },
                React.createElement('input', {
                    id: 'file',
                    name: 'file',
                    className: 'ipt',
                    type: 'file',
                    multiple: 'multiple',
                    onChange: this._onChange.bind(this)
                }),
                React.createElement('div', {
                    className: 'form-canvas'
                }, thumbs),
                React.createElement('div', {
                    className: 'clear'
                }),
                React.createElement('section', {
                        id: swiper,
                        className: swiperClass
                    },
                    React.createElement('div', {
                        className: 'swiper-wrapper',
                        onClick: this._hide.bind(this)
                    }, pics),
                    React.createElement('div', {
                        className: pagination
                    }),
                    React.createElement('div', {
                        className: nextButton
                    }),
                    React.createElement('div', {
                        className: prevButton
                    })
                )
            )
        )
    }
}

Upload.defaultProps = {
    title: '上传图片',
    value: '',
    files: [],
    thumbs: [],
    multiple: true,
    help: '',
}
