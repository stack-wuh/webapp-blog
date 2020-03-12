import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import propTypes from 'prop-types'
import './grid.scss'

const Grid = ({data, onClick}) => {
    return (<View className='c-grid'>
        {
            data.map((v, i) => (<View onClick={() => onClick(v,i)} className='c-grid__item' key={v.label}>
                <View className='c-grid__item--inner'>
                    <Text className={`iconfont ${v.icon} c-grid__item--icon`}></Text>
                    <Text className='c-grid__item--label'>{v.label}</Text>
                </View>
            </View>))
        }
    </View>)
}

Grid.defaultProps = {
    data: [{
        icon: 'icon-zhihu'
    }],
    onClick: () => {}
}
Grid.propTypes = {
    data: propTypes.array.isRequired,
    onClick: propTypes.func
}
Grid.options = {
    addGlobalClass: true
}
export default Grid