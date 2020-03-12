import Taro from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import propTypes from 'prop-types'
import './index.scss'

const Throught = ({text, pos, width}) => {
    const position = {
        center: 0,
        left: -1,
        right: 1
    }
    const style = {
        order: position[pos]
    }
    const outerStyle = {
        width
    }
    return (<View className='throught' style={outerStyle}>
        <Text className='throught__line'></Text>
        <Text className='throught__text' style={style}>{text}</Text>
        <Text className='throught__line'></Text>
    </View>)
}

Throught.propTypes = {
    text: propTypes.string.isRequired,
    pos: propTypes.string,
    width: propTypes.string
}
Throught.defaultProps = {
    text: '',
    pos: 'left',
    width: '100%'
}

export default Throught