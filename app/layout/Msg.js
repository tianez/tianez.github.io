'use strict'
import React from 'react'

export default class Header extends React.Component {
    render() {
        let msg = ConfigStore.getMsg()
        return (msg?
            <section className = "container" >
            msgs {msg}
            </section> : null
        )
    }
}