import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import propTypes from 'prop-types'

import './index.scss'

const List = ({children, isShowArrow, onClick, prefix}) => {
    return (<View onClick={() => onClick()} className='list'>
        <View className='list__outer'>
            { prefix && <View className='list__left'>{prefix}</View> }
            <View className='list__inner'>
                {children}
            </View>
            { isShowArrow && <View className='list__right iconfont icon-arrow-right'></View> }
        </View>
    </View>)
}

List.options = {
    addGlobalClass: true
}

List.propTypes = {
    isShowArrow: propTypes.bool,
    onClick: propTypes.func
}
List.defaultProps = {
    isShowArrow: true,
    onClick: () => {}
}

export default List