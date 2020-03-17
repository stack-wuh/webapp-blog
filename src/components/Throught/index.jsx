import Taro from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import propTypes from 'prop-types'
import classnames from 'classnames'
import './index.scss'

const Throught = ({text, pos, width, border}) => {
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
        <Text className={classnames('throught__line', {'is-border': !border})} ></Text>
        <Text className='throught__text' style={style}>{text}</Text>
        <Text className={classnames('throught__line', {'is-border': !border})}></Text>
    </View>)
}

Throught.propTypes = {
    text: propTypes.string.isRequired,
    pos: propTypes.string,
    width: propTypes.string,
    border: propTypes.bool
}
Throught.defaultProps = {
    text: '',
    pos: 'left',
    width: '100%',
    border: true
}

export default Throught