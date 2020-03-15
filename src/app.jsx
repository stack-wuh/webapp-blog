import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

// import 'taro-ui/dist/style/index.scss' 
import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    pages: [
      'pages/list/list',
      // 'pages/music/music',
      'pages/center/center',
      'pages/detail/detail',
      'pages/concat/concat',
      'pages/web-view/web-view'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [
        {
          text: '首页',
          pagePath: 'pages/list/list',
          iconPath: './assets/tabbar/list-default.png',
          selectedIconPath: './assets/tabbar/list-active.png'
        },
        // {
        //   text: 'Music',
        //   pagePath: 'pages/music/music',
        //   iconPath: './assets/tabbar/music-default.png',
        //   selectedIconPath: './assets/tabbar/music-active.png'
        // },
        {
          text: '关于',
          pagePath: 'pages/center/center',
          iconPath: './assets/tabbar/center-default.png',
          selectedIconPath: './assets/tabbar/center-active.png'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
