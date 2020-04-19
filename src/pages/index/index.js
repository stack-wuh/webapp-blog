import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import Banner from './banner'
import PageLoading from '../../components/PageLoading'
// import Feature from './feature'
// import Throught from '../../components/Throught'
import List from './list'
import './index.scss'
import * as actions from '../../actions/list'
import jump2 from '../../utils/jump2'

import { AtNoticebar } from 'taro-ui'
import 'taro-ui/dist/style/components/noticebar.scss'
import 'taro-ui/dist/style/components/icon.scss'

@connect(state => state.list, {...actions})
class Index extends Taro.Component {
    static config = {
        navigationBarTitleText: '烈焰风暴'
    }

    state = {
        isLoading: false
    }

    componentDidMount () {
        this.setState({ isLoading: true })
        Taro.showNavigationBarLoading()
        this.props.dispatchList().then(() => {
            this.setState({isLoading: false})
            Taro.hideNavigationBarLoading()
        })

        this.props.dispatchBanner()
    }

    handleJump2 = ({art_id: id}) => {
        jump2({url: '/pages/detail/detail', payload: { id }})
    }

    render () {
        const { isLoading } = this.state
        const { banner } = this.props
        return (<View className='feature'>
            <AtNoticebar icon='volume-plus' single marquee>第一版小程序上线啦, 现在终于有一个简易版本啦, 可以有一个更改的基础小程序啦!</AtNoticebar>
            <Banner onClick={this.handleJump2} list={banner} />

            {/* <Throught text='最近足迹' />
            <Feature /> */}
            {
                isLoading ? <PageLoading /> : <List />
            }
        </View>)
    }
}

export default Index