import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import jump2 from '../../../utils/jump2'

const ListItem = ({ title, sub_title, update_at, _id }) => {
    return (<View onClick={() => { jump2({ url: '/pages/detail/detail', payload: { id: _id }}) }} className='listitem'>
        <Text className='listitem__title'>{title}</Text>
        <Text className='listitem__content'>{sub_title}</Text>
        <Text className='listitem__time'>{update_at}</Text>
    </View>)
}

export default ListItem