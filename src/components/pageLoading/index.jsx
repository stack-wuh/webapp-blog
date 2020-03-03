import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class PageLoading extends Taro.Component {
    render () {
        return (<View className='pageloading'>
            <View className='pageloading--bound'></View>
            Loading...
        </View>)
    }
}