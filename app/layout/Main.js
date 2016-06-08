'use strict'

import classNames from 'classnames';
import Loading from './Loading'
import Msg from './Msg'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {
            pathname
        } = this.props.location
        let pathnames = pathname.split('/')
        let key = pathnames[pathnames.length - 1] || 'root'
        let loading = ConfigStore.get('loading')
        let Class = classNames({
            'swap': true,
            'swap_show': loading == 0
        })
        return (
            <main id='main' className = "main">
                <Loading />
                <Msg />
                {this.props.children}
            </main>
        )
    }
}
