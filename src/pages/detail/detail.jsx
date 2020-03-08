import Taro from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '../../actions/list'
import './detail.scss'
// import * as TaroUI from 'taro-ui'

@connect(state => state.list, {...actions})
class Detail extends Taro.Component {
    config = {
        navigationBarTitleText: '文章详情'
    }
    componentDidMount () {
        // console.log(TaroUI)
        this.props.dispatchListById({_id: this.$router.params.id})
    }
    // componentDidUpdate () {
    //     Taro.setNavigationBarTitle({ title: this.props.info.title })
    // }
    render () {
        const { info = {} } = this.props
        return (<View className='detail'>
            <View className='detail__title'>{info.title}</View>
            <View className='detail__time'>{info.update_at}</View>
            <RichText className='detail__content' nodes={info.content}></RichText>
        </View>)
    }
}

export default Detail