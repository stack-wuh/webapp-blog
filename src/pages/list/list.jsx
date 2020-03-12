import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PageLoading from '../../components/PageLoading'
import ListItem from './ListItem'
import { connect } from '@tarojs/redux'
import * as actions from '../../actions/list'

@connect(state => state.list, {...actions})
class List extends Component {
    config = {
        navigationBarTitleText: '首页'
    }

    state = {
        loaded: false
    }

    componentDidMount () {
        this.props.dispatchList().then(res => {
            const { data: { data } } = res
            this.setState({ loaded: true })
        })
    }
    render () {
        if (!this.state.loaded) {
            return <PageLoading />
        }
        const { data } = this.props
        return (<View>
            {
                data.map((item, _) => (<ListItem key={item._id} {...item} />))
            }
        </View>)
    }
}

export default List