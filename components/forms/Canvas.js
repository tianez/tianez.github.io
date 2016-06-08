'use strict';

// import {
//     Surface,
//     Image,
//     Text
// } from 'react-canvas'
export default class Canvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: props.width,
            height: props.height || props.width
        }
    }
    render() {
        let style
        return (
            React.createElement('div', {
                    style: {
                        width: this.state.width,
                        height: this.state.height
                    }
                },
                React.createElement('img', {
                    style: {
                        width: this.state.width,
                        height: this.state.height,
                        display: 'block'
                    },
                    src: this.props.src
                }))
            // React.createElement(Surface, {
            //         width: this.state.width,
            //         height: this.state.height,
            //         top: 0,
            //         left: 0
            //     },
            //     React.createElement(Image, {
            //         style: {
            //             width: this.state.width,
            //             height: this.state.height,
            //             top: 0,
            //             left: 0
            //         },
            //         src: this.props.src
            //     })
            // )
        );
    }
}

Canvas.defaultProps = {
    width: 200
}
