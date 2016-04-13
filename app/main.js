'use strict'

import React from 'react'
import './main.scss'
export default class Main extends React.Component {
    constructor() {
        super();
        this.state = { value: 'sdsdsds' };
        // localStorage.lastname="Smith";
        // sessionStorage.name = 'sdsd'
    }
    componentWillMount() {
        
    }
    componentDidMount() {
        
    }
    shouldComponentUpdate() {
        return true
    }
    render() {
        return (
            <div className = "container" >
                <section className = "jumbotron" >
                    <h3 className = "jumbotron-heading" >你好</h3>
                </section>
                <h1><i className="fa fa-home animated infinite bounce"></i>Hello</h1>
                {this.props.children}
            </div>
        )
    }
}