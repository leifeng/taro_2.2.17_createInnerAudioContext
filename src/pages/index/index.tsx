import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config: Config = {
    navigationBarTitleText: '首页'
  }
  onLink=()=>{
    Taro.navigateTo({
      url:'/pages/audio/index'
    })
  }
  onLink2=()=>{
    Taro.navigateTo({
      url:'/pages/other/index'
    })
  }
  render () {
    return (
      <View className='index'>
        <View onClick={this.onLink}>先跳转到音频页</View>
        <View onClick={this.onLink2}>再跳转到第3页</View>
      </View>
    )
  }
}
