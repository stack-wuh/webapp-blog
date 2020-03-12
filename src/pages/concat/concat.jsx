import Taro, { useRouter, useEffect } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import qqQrcode from './assets/qq.jpeg'
import wechatQrCode from './assets/wechat.jpeg'
import './index.scss'
import ListWrapper from '../../components/List'

const maps = {
    qq: qqQrcode,
    wechat: wechatQrCode
}
const NormalConcat = () => {
    const router = useRouter()
    const { params: { mode = 'qq' } } = router
    useEffect(() => {
        Taro.setNavigationBarTitle({
            title: mode + '联系我吧'
        })
    }, [mode])
    if (mode === 'email') {
        return (<View className='concat'>
            <ListWrapper>
                <Text>QQ: 724132485@qq.com</Text>
            </ListWrapper>
            <ListWrapper>
                <Text>Foxmail: wuh131420@foxmail.com</Text>
            </ListWrapper>
        </View>)
    }
    return (<View className='concat'>
        <Image mode='widthFix' src={maps[mode]}></Image>
    </View>)
}

NormalConcat.config = {
    navigationBarTitleText: '联系我吧'
}

export default NormalConcat