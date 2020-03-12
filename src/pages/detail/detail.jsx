import Taro from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '../../actions/list'
import './detail.scss'
import Days from '../../utils/day'
import PageLoading from '../../components/PageLoading'

@connect(state => state.list, {...actions})
class Detail extends Taro.Component {
    state = {
        isLoading: false
    }
    componentWillMount () {
        this.setState({ isLoading: true })
        Taro.ShowNavigationBarLoading()
    }
    componentDidMount () {
        this.props.dispatchListById({_id: this.$router.params.id}).then(res => {
            const { data: [info] } = res
            this.setState({ isLoading: false })
            Taro.setNavigationBarTitle({ title: info.title})
            Taro.hideNavigationBarLoading()
        })
    }
    render () {
        const { info = {} } = this.props
        const days = new Days(info.update_at)
        const { isLoading } = this.state
        if (isLoading) {
            return (<PageLoading />)
        }
        return (<View className='detail'>
            {/* <View className='detail__title'>{info.title}</View> */}
            <View className='detail__time'>{days.string}</View>
            <RichText className='detail__content' nodes={info.content}></RichText>
        </View>)
    }
}

export default Detail