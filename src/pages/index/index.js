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
    }

    render () {
        const { isLoading } = this.state
        return (<View className='feature'>
            <Banner />

            {/* <Throught text='最近足迹' />
            <Feature /> */}
            {
                isLoading ? <PageLoading /> : <List />
            }
        </View>)
    }
}

export default Index