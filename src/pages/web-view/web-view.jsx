import Taro from '@tarojs/taro'
import { WebView } from '@tarojs/components'

export default class MyWebView extends Taro.Component {
    render () {
        return (<WebView></WebView>)
    }
}