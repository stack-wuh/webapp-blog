import Taro from '@tarojs/taro'
import propTypes from 'prop-types'
import {View, Text, Image} from '@tarojs/components'
import classnames from 'classnames'
import './index.scss'

const Curtian = props => {
    const { layout, url, children, isVisible } = props
    const maps = ['left', 'center', 'right']
    const curtainClass = classnames({
        'is-close': !isVisible,
        'curtian': true
    })
    let wrapStyle = {
        alignSelf: 'flex-start',
        flexDirection: 'column'
    }
    const flex_align = layout && layout.trim().replace(/\s+/, '_').split('_')[1]
    const Index = maps.indexOf(flex_align)
    if (/^top/.test(layout)) {
        wrapStyle = Object.assign(wrapStyle, { flexDirection: 'column' })
    } else {
        wrapStyle = Object.assign(wrapStyle, { flexDirection: 'column-reverse' })
    }
    
    return (<View className={curtainClass}>
        <View className='curtian__content' style={wrapStyle}>
            <Text className={classnames('curtian__icon', 'iconfont icon-close', `is-${maps[Index]}`)}></Text>
            {
                url && <Image mode='widthFix' src={url} />
            }
            {children}
        </View>
    </View>)
}

Curtian.options = {
    addGlobalClass: true
}
Curtian.propTypes = {
    layout: propTypes.string.isRequired,
    url: propTypes.string,
    onClose: propTypes.func,
    isVisible: propTypes.bool
}
Curtian.defaultValue = {
    layout: 'top center',
    url: 'http://src.wuh.site/img/logo.png',
    onClose: () => {},
    isVisible: true
}

export default () => Curtian