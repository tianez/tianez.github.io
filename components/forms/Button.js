'use strict'
import React from 'react'
import classNames from 'classnames';

export default class Botton extends React.Component {
    constructor() {
        super()
    }
    render() {
        let Class = classNames({
            'form-group form-horizontal animated bounceInRight': true,
        })
        return (
            <div className={Class}>
                <div className="form-control">
                    <input
                        className="pure-button pure-button-primary"
                        type= 'submit'
                        disabled={this.props.disabled}
                        value={this.props.value}
                        />
                </div>
            </div>
        )
    }
}