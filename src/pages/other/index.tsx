import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Index extends Component {

  config: Config = {
    navigationBarTitleText: '第3页'
  }
  onLink=()=>{
    Taro.navigateTo({
      url:'/pages/index/index'
    })
  }
  render () {
    return (
      <View className='index'>
        <View onClick={this.onLink}>首页页</View>
      </View>
    )
  }
}
