import Taro from '@tarojs/taro'
import { Map, View } from '@tarojs/components'

const mapStyle = {
    width: '100%',
    height: '300px',
    margin: '0 auto'
}

const Center = Position
const Scale  = 12
const CurrentMarker = [{
    longitude: Center.longitude,
    latitude: Center.latitude,
    iconPath: '//src.wuh.site/img/marker.png',
    width: 40,
    height: 40,
    label: {
        content: '所在位置',
        color: '#666',
        borderWidth: 1,
        borderColor: '#eee',
        bgColor: '#fcfcfc',
        borderRadius: 4,
        padding: 10
    }
}]
const ZOOM_ABLED = false
const SCROLL_ABLED = false

const CusMap = () => {
    
    return (<View className='custom-map'>
        <Map style={mapStyle}
            longitude={Center.longitude}
            latitude={Center.latitude}
            sacle={Scale}
            markers={CurrentMarker}
            enableZoom={ZOOM_ABLED}
            enableScroll={SCROLL_ABLED}>
        </Map>
    </View>)
}

export default CusMap