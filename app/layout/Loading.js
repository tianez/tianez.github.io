'use strict'
import React from 'react'
import classNames from 'classnames';

export default class Loading extends React.Component {
    render() {
        let loading = ConfigStore.get('loading')
        let Class = classNames({
            'container loading': true,
            'loading-hide': loading == 0
        })
        return (
            React.createElement('section', {
                    className: Class
                },
                React.createElement('div', {
                        className: 'spinner'
                    },
                    React.createElement('div', {
                        className: 'bounce1'
                    }),
                    React.createElement('div', {
                        className: 'bounce2'
                    }),
                    React.createElement('div', {
                        className: 'bounce3'
                    })
                )
            )
        )
    }
}
