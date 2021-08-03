import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'


export default class AudioPage extends Component {
    config: Config = {
        navigationBarTitleText: '第2页'
      }
    innerAudioContext: Taro.InnerAudioContext;
    componentDidMount() {
        this.innerAudioContext = Taro.createInnerAudioContext();
        this.innerAudioContext.onPlay(() => {
            console.log('播放音频');
        });
        this.innerAudioContext.onPause(() => {
            console.log('暂停音频');
        });
        this.innerAudioContext.onStop(() => {
            console.log('停止');//这里会不停的执行
        });
        this.innerAudioContext.onEnded(() => {
            console.log('自然停止');
        });
    }
    componentWillUnmount() {
        this.innerAudioContext.destroy()
    }
    onPlay = () => {
        this.innerAudioContext.src = ''
        this.innerAudioContext.play()
    }
    onBack = () => {
        Taro.navigateBack()
    }
    render() {
        return <View className="page">
            {/* <View onClick={this.onPlay}>不需要播放</View> */}
            <View onClick={this.onBack}>返回到首页</View>
        </View>
    }
}