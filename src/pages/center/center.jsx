import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './center.scss'
import Avatar from '../../components/Avatar'
import Throught from '../../components/Throught'
import ListItem from './components/grid'
import CusMap from './components/Map'
import jump2, { urlStringify } from '../../utils/jump2'

const Likes = [
    {
        label: '知乎',
        icon: 'icon-zhihu',
        url: 'https://www.zhihu.com/people/mei-you-chuan-de-hai-zei-wang'
    },
    {
        label: 'Github',
        icon: 'icon-github',
        url: 'https://github.com/stack-wuh'
    },
    {
        label: 'Bilibili',
        icon: 'icon-bilibili1'
    },
    {
        label: 'codepen',
        icon: 'icon-Codepen'
    }
]

const Funcs = [
    {
        label: 'JS',
        icon: 'icon-js1'
    },
    {
        label: 'Vue',
        icon: 'icon-weibiaoti-'
    },
    {
        label: 'React',
        icon: 'icon-React'
    },
    {
        label: 'Mongodb',
        icon: 'icon-MongoDB1'
    },
    {
        label: 'NodeJS',
        icon: 'icon-nodejs'
    },
    {
        label: 'Uniapp',
        icon: 'icon-uni-app'
    },
    {
        label: 'Taro',
        icon: 'icon-yuanjiaojuxing1kaobei7'
    }
]

const Maps = [
    {
        icon: 'icon-QQ',
        label: 'QQ',
        url: '/pages/concat/concat',
        query: {
            mode: 'qq'
        }
    },
    {
        icon: 'icon-changgewechat',
        label: '微信',
        url: '/pages/concat/concat',
        query: {
            mode: 'wechat'
        }
    },
    {
        icon: 'icon-email-1',
        label: '邮箱',
        url: '/pages/concat/concat',
        query: {
            mode: 'email'
        }
    }
]
class Center extends Taro.Component {
    static config = {
        navigationBarTitleText: '个人中心'
    }
    /**
     * 个人版小程序不可以使用webview
     */
    handleLikeClick = () => {
        // const { url } = item
        jump2({ url: '/pages/schema/empty/empty' })
    }
    handleJump = (item) => {
        const { url, query } = item
        const path = urlStringify(url, query, true)
        Taro.navigateTo({url: path})
    }
    render () {
        return (<View className='center'>
            <View className='center__header'>
                <Avatar my-class='center__header--avatar' className='center__header--avatar' width={80} height={80} />
                <View className='center__header--user'>
                    <Text>吴红 | Shadow</Text>
                    <Text>湖北宜昌 | 广东深圳</Text>
                </View>
            </View>
            {/* 我的足迹 */}
            <Throught text='我的足迹' pos='center' width='80%' />
            <ListItem onClick={this.handleLikeClick} data={Likes}></ListItem>

            {/* 我的技能 */}
            <Throught text='我的技能' pos='center' width='80%' />
            <ListItem data={Funcs} />

            {/* 如何联系 */}
            <Throught text='如何联系' pos='center' width='80%' />
            <ListItem onClick={this.handleJump} data={Maps} />

            {/* 我的位置 */}
            <Throught text='我的位置' pos='center' width='80%' />
            <CusMap />
        </View>)
    }
}

export default Center