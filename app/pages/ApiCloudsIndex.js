'use strict'

import React from 'react';
export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        var el = document.getElementById('uil')
        var sortable = Sortable.create(el, {
            onStart: function( /**Event*/ evt) {
                evt.oldIndex; // element index within parent
                console.log(evt.oldIndex);
            },
        })
        loadingHide()
    }
    render() {
        return (
            React.createElement('header', {
                    id: 'header',
                    className: 'pure-menu pure-menu-horizontal pure-menu-fixed'
                },
                React.createElement('div', {
                        id: 'uil',
                        className: 'container'
                    },
                    React.createElement('a', {
                            className: 'pure-menu-heading pure-menu-link left'
                        },
                        '我的理想乡'
                    ),
                    React.createElement('a', {
                            className: 'pure-menu-heading pure-menu-link left'
                        },
                        '我的理想乡2'
                    )
                )
            )
        )
    }
}
