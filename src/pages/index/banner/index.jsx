import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import propTypes from 'prop-types'
import './index.scss'

const Banner = ({list, onClick}) => {
    return (<View className='banner'>
        <Swiper
            indicatorDots
            className='banner__swiper'
            autoplay
            circular>
            {
                list.map(v => (<SwiperItem onClick={() => onClick(v)} key={v.id} className='banner__swiper--item'>
                    <Text className='banner__swiper--item-text'>{v.text}</Text>
                    <Image style={{width: '100%'}} className='banner__swiper--item-img' mode='aspectFill' src={v.image} />
                </SwiperItem>))
            }
        </Swiper>
    </View>)
}

Banner.propTypes = {
    list: propTypes.array.isRequired,
    onClick: propTypes.func
}

Banner.defaultProps = {
    list: [
        {
            id: 1,
            text: '自信心',
            url: 'https://www.baidu.com',
            image: 'http://src.wuh.site/img/logo.png'    
        },
        {
            id: 2,
            text: 'Taro 实例',
            url: 'https://www.baidu.com',
            image: 'http://src.wuh.site/img/qq.jpeg'    
        },
    ],
    onClick: () => {}
}

export default Banner