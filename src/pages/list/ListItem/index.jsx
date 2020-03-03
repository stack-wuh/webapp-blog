import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import jump2 from '../../../utils/jump2'

const ListItem = ({ title, content, update_at, _id }) => {
    return (<View onClick={() => { jump2({ url: '/pages/list/detail', payload: { id: _id }}) }} className='listitem'>
        <Text className='listitem__title'>{title}</Text>
        <Text className='listitem__content'>{content}</Text>
        <Text className='listitem__time'>{update_at}</Text>
    </View>)
}

export default ListItem