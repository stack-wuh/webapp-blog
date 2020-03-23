import Taro from '@tarojs/taro'
import { WebView } from '@tarojs/components'

/**
 * 个人版小程序不支持webview
 * 个人版小程序没有人权 我丢~~
 */
export default class MyWebView extends Taro.Component {
    static config = {
        navigationBarTitleText: 'WebView'
    }
    
    componentDidMount () {
        console.log(this.props)
    }

    render () {
        return (<WebView></WebView>)
    }
}