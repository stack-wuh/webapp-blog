import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import propTypes from 'prop-types'
import './index.scss'

const AvatarUrl = 'http://src.wuh.site/img/logo.png'

const Avatar = ({width, height}) => {
    Avatar.externalClasses = ['my-class']
    const style = { width: `${width}px`, height: `${height}px`}
    const classnames = `avatar my-class`
    return (<View className={classnames} style={style}>
        <Image className='avatar__image' src={AvatarUrl}></Image>
    </View>)
}

Avatar.config = {
    
}

Avatar.propTypes = {
    width: propTypes.number,
    height: propTypes.number
}
Avatar.defaultProps = {
    width: 180,
    height: 180
}

export default Avatar