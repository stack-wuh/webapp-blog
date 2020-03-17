import Taro, { useRouter, useEffect } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import qqQrcode from './assets/qq.jpeg'
import wechatQrCode from './assets/wechat.jpeg'
import './index.scss'
import ListWrapper from '../../components/List'

const Maps = {
    qq: qqQrcode,
    wechat: wechatQrCode
}

const Links = [
    {
        label: 'QQ',
        value: '724132485@qq.com'
    },
    {
        label: 'Foxmail',
        value: 'wuh131420@foxmail.com'
    },
    {
        label: '163',
        value: 'wuh_201314@163.com'
    },
    {
        label: 'Gmail',
        value: 'wuh131420@gmail.com'
    }
]
const NormalConcat = () => {
    const router = useRouter()
    const { params: { mode = 'qq' } } = router
    useEffect(() => {
        Taro.setNavigationBarTitle({
            title: mode + '联系我吧'
        })
    }, [mode])
    const handleClip = (str) => {
        Taro.setClipboardData({data: str})
    }
    if (mode === 'email') {
        return (<View className='concat'>
            {
                Links.map(v => (<ListWrapper key={v.label}>
                    <Text onClick={() => handleClip(v.value)}>{v.label}: {v.value}</Text>
                </ListWrapper>))
            }
        </View>)
    }
    return (<View className='concat'>
        <Image mode='widthFix' src={Maps[mode]}></Image>
    </View>)
}

NormalConcat.config = {
    navigationBarTitleText: '联系我吧'
}

export default NormalConcat