'use strict'

import classNames from 'classnames';

export default class FormGroup extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let classname = this.props.class ? 'form-group ' + this.props.class : 'form-group'
        return (
            React.createElement('div', {
                    className: classname
                },
                React.createElement('label', {
                    className: 'form-label'
                }, this.props.title),
                React.createElement('div', {
                        className: 'form-control'
                    },
                    this.props.limit ? React.createElement('i', {
                        className: 'form-ico fa'
                    }, this.props.limit) : null,
                    this.props.children,
                    this.props.help ? React.createElement('span', {
                        className: 'form-help'
                    }, this.props.help) : null
                )
            )
        )
    }
}
