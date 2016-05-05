'use strict'

import React from 'react'
import request from 'superagent'

import './index.less'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        setTimeout(function() {
            ConfigActions.update('loading', 0)
        }, 1)
    }
    render() {
        return (
            <section className='warp index'>
                <section className = "container pure-g" >
                    <h3 className = "jumbotron-heading pure-u-1" >这是首页</h3>
                    <div className="service-box pure-u-1-3">
                        <figure className="figure">
                            <img src="http://www.day.com/img?w=410&h=300&r=1" alt="" className="img-responsive" />
                        </figure>
                        <h4>Never Leave Home</h4>
                        <p className="text-muted">Unparalleled convenience: consult Doctors via video</p>
                    </div>
                    <div className="service-box pure-u-1-3">
                        <figure className="figure">
                            <img src="app/images/1.png" alt="" className="img-responsive" />
                        </figure>
                        <h4>Never Leave Home</h4>
                        <p className="text-muted">Unparalleled convenience: consult Doctors via video without the hassle of visiting a hospital </p>
                    </div>
                    <div className="service-box pure-u-1-3">
                        <figure className="figure">
                            <img src="http://www.day.com/img?w=410&h=300&r=3" alt="" className="img-responsive" />
                        </figure>
                        <h4>Never Leave Home</h4>
                        <p className="text-muted">Unparalleled convenience: consult Doctors via video without the hassle of visiting a hospital </p>
                    </div>
                </section>
            </section>
        )
    }
}