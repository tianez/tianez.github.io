'use strict'

let Link = ReactRouter.Link 
import Apicloud from '../../components/utils/Apicloud'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {}
        }
    }
    componentDidMount() {
        let filter = {
            where: {},
            skip: 0,
            limit: 20
        }
        Apicloud.get('article', filter, function(err, res) {
            let data = JSON.parse(res.text)
            console.log(data)
            loadingHide()
            this.setState({
                info: data
            })
        }.bind(this))
    }
    render() {
        let lists
        let active = {
            color: '#f00'
        }
        if (this.state.info.length > 0) {
            lists = this.state.info.map(function(d, index) {
                let url = '/page/' + d.id
                let imgurl = "http://www.day.com/img?w=410&h=300&r=" + d.id
                return (
                    <Link to={url} activeStyle={active} className="service-box pure-u-1-3" key={index}>
                        <figure className="figure">
                            <img src={imgurl} alt={d.title} className="img-responsive" />
                        </figure>
                        <h4>{d.title}</h4>
                        <p className="text-muted">Unparalleled convenience: consult Doctors via video</p>
                    </Link>
                )
            })
        } else {
            lists = ''
        }
        const {
            pathname
        } = this.props.location
        return (
            <section className='warp index'>
                <section className = "container  pure-g" >
                    <h3 className = "jumbotron-heading pure-u-1" >文章管理</h3>
                </section>
                <section className = "container pure-g" >
                    <h3 className = "jumbotron-heading pure-u-1" >这是首页</h3>
                    {lists}
                </section>
                {this.props.children}
            </section>
        )
    }
}
