'use strict';
import React from 'react'
import {
    Surface,
    Image,
    Text
} from 'react-canvas'
export default class Canvas extends React.Component {
    render() {
        return (
            React.createElement(Surface, {
                    width: 200,
                    height: 200,
                    left: 0,
                    top: 0
                },
                React.createElement(Image, {
                    style: {
                        top: 0,
                        left: 0,
                        width: 200,
                        height: 200,
                    },
                    src: this.props.src
                })
            )
        );
    }
}