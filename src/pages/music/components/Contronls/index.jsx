import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import propTypes from 'prop-types'
import './index.scss'

const Contronls = ({ isPlaying, onPrev, onNext, onPlay, onPause, style }) => {
    Contronls.externalClasses = ['my-class']
    return (<View className='contronls my-class' style={style}>
        <View className='contronls__outer'>
            <Text onClick={onPrev} className='iconfont icon-prev1 contronls__outer--btns'></Text>
            {
                isPlaying  ? <Text onClick={onPause} className='iconfont icon-pause contronls__outer--btns'></Text>
                    : <Text onClick={onPlay} className='iconfont icon-play contronls__outer--btns'></Text>
            }
            <Text onClick={onNext} className='iconfont icon-next contronls__outer--btns'></Text>
        </View>
    </View>)
}

Contronls.options = {
    addGlobalClass: true
}
Contronls.propTypes = {
    isPlaying: propTypes.bool.isRequired,
    onPlay: propTypes.func,
    onNext: propTypes.func,
    onPrev: propTypes.func,
    onPause: propTypes.func
}
Contronls.defaultProps = {
    isPlaying: false,
    onPlay: () => {},
    onNext: () => {},
    onPrev: () => {},
    onPause: () => {}
}
export default Contronls