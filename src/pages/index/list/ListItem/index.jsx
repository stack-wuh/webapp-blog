import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import jump2 from '../../../../utils/jump2'
import day from '../../../../utils/day'

const ListItem = ({ title, sub_title, update_at, _id }) => {
    const Days = new day(update_at)
    return (<View onClick={() => { jump2({ url: '/pages/detail/detail', payload: { id: _id }}) }} className='listitem'>
        <Text className='listitem__title'>{title}</Text>
        <Text className='listitem__content'>{sub_title}</Text>
        <Text className='iconfont icon-clock listitem__time'>{Days.string}</Text>
    </View>)
}

ListItem.options = {
    addGlobalClass: true
}

export default ListItem