import Taro from '@tarojs/taro'
import { View, Progress, Image } from '@tarojs/components'
import Contronls from './components/Contronls'
import { throttle } from '../../utils'
import './index.scss';

const url = 'http://src.wuh.site/medio/brave.mp3'

const bgStyle = {
    backgroundImage: `url(http://src.wuh.site/img/logo.png) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
}

class Music extends Taro.Component {

    state = {
        audioCtx: null,
        isPlaying: false,
        percent: 0
    }

    componentDidMount () {
        let context = Taro.createInnerAudioContext()
        context.src = url
        context.onError(err => {
            console.error(err)
        })
        this.setState({
            audioCtx: context
        })
    }
    componentWillUnmount () {
        const { audioCtx } = this.state
        audioCtx.destroy()
    }

    handlePlay = () => {
        const { audioCtx } = this.state
        audioCtx.play()
        this.handleUpdate()
        this.setState({
            isPlaying: true
        })
    }

    handlePause = () => {
        const { audioCtx } = this.state
        audioCtx.pause()
        this.setState({
            isPlaying: false
        })
    }

    handleUpdate = () => {
        const { audioCtx } = this.state
        audioCtx.onTimeUpdate(throttle(() => {
          this.handleCalcPercent()
        }, 800))
    }

    handleCalcPercent = () => {
        const { audioCtx: { currentTime, duration } } = this.state
        const percent = Math.ceil(currentTime/duration*100)
        this.setState({
            percent
        })
    }

    render () {
        const { isPlaying, percent } = this.state
        return (<View className='music'>
            <View className={`music__bg ${isPlaying ? 'is-active': 'is-default'}`}>
                <Image src='http://src.wuh.site/img/logo.png' />
            </View>
            <View className='flex-empty'></View>
            <Progress className='music__progress' percent={percent} active activeMode='forwards' />
            <Contronls
                my-class='music__contronls'
                // eslint-disable-next-line react/jsx-indent-props
                isPlaying={isPlaying} 
                // eslint-disable-next-line react/jsx-indent-props
                onPlay={this.handlePlay}
                // eslint-disable-next-line react/jsx-indent-props
                onPause={this.handlePause}>
            </Contronls>
        </View>)
    }
}

export default Music