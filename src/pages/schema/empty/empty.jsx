import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

const EmptyPage = props => {
    return (<View className='empty-page'>
        <View className='empty-page__wrapper'>
            <Text className='iconfont icon-icon-test' style={{fontSize: '80px'}}></Text>
            <Text className='empty-page__wrapper--text'>功能暂未开发</Text>
        </View>
    </View>)
}

EmptyPage.options = {
    addGlobalClass: true
}

export default () => EmptyPage