import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Throught from '../../../components/Throught'

const Empty = () => {
    return (<View>
        <Throught text='没有更多啦' pos='center' border={false} />
    </View>)
}

export default Empty