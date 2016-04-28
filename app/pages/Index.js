'use strict'

import React from 'react'
import request from 'superagent'

import './index.less'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className='warp index'>
                <section className = "container pure-g" >
                    <h3 className = "jumbotron-heading pure-u-1" >这是首页</h3>
                    <div className="service-box pure-u-1-3">
                        <figure className="wow bounceIn">
                            <img src="https://d1p3dh66omwgxt.cloudfront.net/wp-content/uploads/2016/03/a-02-e1459166052554.jpg" alt="" className="img-responsive" />
                        </figure>
                        <h4>Never Leave Home</h4>
                        <p className="text-muted">Unparalleled convenience: consult Doctors via video</p>
                    </div>
                    <div className="service-box pure-u-1-3">
                        <figure className="wow bounceIn">
                            <img src="https://d1p3dh66omwgxt.cloudfront.net/wp-content/uploads/2016/03/a-02-e1459166052554.jpg" alt="" className="img-responsive" />
                        </figure>
                        <h4>Never Leave Home</h4>
                        <p className="text-muted">Unparalleled convenience: consult Doctors via video without the hassle of visiting a hospital </p>
                    </div>
                    <div className="service-box pure-u-1-3">
                        <figure className="wow bounceIn">
                            <img src="https://d1p3dh66omwgxt.cloudfront.net/wp-content/uploads/2016/03/a-02-e1459166052554.jpg" alt="" className="img-responsive" />
                        </figure>
                        <h4>Never Leave Home</h4>
                        <p className="text-muted">Unparalleled convenience: consult Doctors via video without the hassle of visiting a hospital </p>
                    </div>
                </section>
            </section>
        )
    }
}