'use strict'

import request from 'superagent'
import {
    Link
} from 'react-router'
import Apicloud from '../../components/utils/Apicloud'
export default class ApiClouds extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: null,
            title: 'title'
        }
    }
    componentWillMount() {
        let clouds = this.props.params.clouds
        this.setState(this.props[clouds])
    }
    componentDidMount(nextProps) {
        this._req(this.props)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.search !== this.state.hash) {
            this._req(nextProps)
        }
    }
    _req(props) {
        let action = props.params.clouds
        let title = this.props[action] ? this.props[action].title : '田恩仲开发设计'
        ConfigActions.update('title', title)
        let where = {}
        let $_GET = get(props.location.search)
        extend(where, $_GET)
        delete where['_k']
        let rep = {}
        extend(where, rep, true)
        let filter = {
            where: where,
            order: ['model DESC', 'order DESC', 'createdAt DESC'],
            limit: $_GET['limit'] ? parseInt($_GET['limit']) : 20,
            skip: $_GET['skip'] ? parseInt($_GET['skip']) : 0
        }
        Apicloud.get(props.params.clouds, filter, function(err, res) {
            if (err) {
                ConfigActions.msg(res.status + 'error');
            } else {
                let data = JSON.parse(res.text)
                if (data.res == 404) {
                    ConfigActions.update('title', data.msg)
                    this.setState({
                        hash: props.location.search,
                        title: data.msg
                    });
                    return
                }
                this.setState({
                    hash: props.location.search,
                    info: data
                })
            }
        }.bind(this))
        var el = document.getElementById('uid')
        var sortable = Sortable.create(el, {
            onStart: function( /**Event*/ evt) {
                evt.oldIndex; // element index within parent
                console.log(evt.oldIndex);
            },
        })
        loadingHide()
    }
    render() {
        let thead
        if (this.state.thead) {
            thead = this.state.thead.map(function(d, index) {
                return React.createElement('th', {
                    key: index
                }, d)
            })
        }
        let lists
        if (this.state.info) {
            lists = this.state.info.map(function(d, index) {
                let curl = '/apicloud/' + this.props.params.clouds + '/' + d.id
                return (
                    React.createElement('tr', {
                            className: (index % 2 == 0) ? 'pure-table-odd' : '',
                            key: index
                        },
                        React.createElement('td', {}, '#'),
                        this.state.tbody.map(function(t, i) {
                            return React.createElement('td', {
                                key: i
                            }, d[t])
                        }),
                        React.createElement('td', {},
                            React.createElement(Link, {
                                    to: curl
                                },
                                '编辑'
                            )
                        )
                    )
                )
            }.bind(this))
        }
        return (
            React.createElement('section', {
                    className: 'warp index'
                },
                React.createElement('section', {
                        className: 'container  pure-g'
                    },
                    React.createElement('h3', {
                            className: 'pure-u-1'
                        },
                        this.state.title
                    ),
                    React.createElement('div', {
                            className: 'pure-u-1 pure-menu pure-menu-open pure-menu-horizontal'
                        },
                        React.createElement('a', {
                                className: 'pure-menu-heading'
                            },
                            '筛选'
                        ),
                        React.createElement('ul', {
                                className: 'pure-menu-list'
                            },
                            React.createElement('li', {
                                    className: 'pure-menu-item'
                                },
                                React.createElement(Link, {
                                        to: '/apicloud/' + this.props.params.clouds,
                                        className: 'pure-menu-link'
                                    },
                                    '全部'
                                )
                            ),
                            React.createElement('li', {
                                    className: 'pure-menu-item'
                                },
                                React.createElement(Link, {
                                        to: '/apicloud/' + this.props.params.clouds,
                                        className: 'pure-menu-link',
                                        query: {
                                            state: 1
                                        }
                                    },
                                    '正常'
                                )
                            )
                        )
                    )
                ),
                React.createElement('section', {
                        className: 'container  pure-g'
                    },
                    React.createElement('div', {
                            className: 'pure-u-1'
                        },
                        React.createElement('table', {
                                className: 'pure-table',
                                style: {
                                    width: "100%"
                                }
                            },
                            React.createElement('thead', {},
                                React.createElement('tr', {},
                                    thead
                                )
                            ),
                            React.createElement('tbody', {
                                    id: 'uid'
                                },
                                lists
                            )
                        )
                    )
                )
            )
        )
    }
}

ApiClouds.defaultProps = {
    article: {
        title: '文章管理',
        thead: ['id', '标题', '状态', '操作'],
        tbody: ['title', 'state']
    },
    menu: {
        title: '菜单管理',
        thead: ['id', '菜单名称', '排序', '状态', '操作'],
        tbody: ['title', 'order', 'state']
    },
    model: {
        title: '模块字段管理',
        thead: ['id', '菜单名称', '所属模块', '排序', '状态', '操作'],
        tbody: ['title', 'model', 'order', 'state']
    }
}
