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
            <section className ={Class} >
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </section>
        )
    }
}