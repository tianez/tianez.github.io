'use strict'
import React from 'react'

export default class Header extends React.Component {
    render() {
        let style = {
            lineHeight: '40px'
        }
        let msg = ConfigStore.getMsg()
        return (msg ?
            <section className = "container" style={style} >
                {msg}
            </section> : null
        )
    }
}