'use strict'
export default class Layout extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            React.createElement('div', {
                    className: 'warper'
                },
                React.createElement('div', {
                },
                <a href="#/">书页</a>,
                <a href="#/22">书页2</a>,
                <a href="#/223">书页2333</a>
            ),
                React.createElement('div', {
                    location: this.props.location
                }, this.props.children)
            )
        )
    }
}
