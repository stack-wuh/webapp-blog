import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import ListItem from './ListItem'
import Empty from '../empty'

@connect(state => state.list, {})
class List extends Taro.Component {
    componentDidMount () {
    }
    render () {
        const { data=[] } = this.props
        if (!data.length) {
            return <Empty />
        }
        return (<View>
            {
                data&&data.map((v) => (<ListItem key={v._id} {...v}></ListItem>))
            }
        </View>)
    }
}

export default List