'use strict'
import React from 'react'
import ApiStore from '../../components/utils/ApiStore'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {}
        }
    }
    componentDidMount() {
        ApiStore.get('acman/zhaiyanapi/tcrand?fangfa=json', function(err, res) {
                let data = JSON.parse(res.text)
                this.setState({
                    info: data
                })
            }.bind(this))
            // setInterval(this.api.bind(this), 20000)
    }
    api() {
        ApiStore.get('acman/zhaiyanapi/tcrand?fangfa=json', function(err, res) {
            let data = JSON.parse(res.text)
            this.setState({
                info: data
            })
        }.bind(this))
    }
    render() {
        return (
            <footer id="footer" className="footer fixed-bottom">
                {this.state.info.taici}—— {this.state.info.source}
            </footer>
        )
    }
}