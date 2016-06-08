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
                }, 'shouye')
            )
        )
    }
}
