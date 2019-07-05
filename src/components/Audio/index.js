import Taro , { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.styl'
import play from '../../resource/images/play.png' 
import pause from '../../resource/images/pause.png'

export default class index extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={
    audioState: false,
  }

  componentWillMount() {
    
  }
  changeAudio = () => {
    var audio = Taro.createInnerAudioContext(); 
        audio.autoPlay = false;
        audio.src = this.props.data.src;
    this.setState({
      audioState: !this.state.audioState,
    },() => {
      if(this.state.audioState) {
        audio.play()
      } else {
        audio.pause() 
        console.log('pasue')
      }
    })
  }


  render() {
    const { data } = this.props
    const { audioState } = this.state
    return (
      <View className='container'>
        <View className='audio'>
          <Image className='icon' src={audioState ? pause : play} onClick={this.changeAudio}></Image>
          <View>
            <View className='name'>{data.name}</View>
            <View className='singer'>{data.singer}</View>
          </View>
          <View className='duration'>{data.duration}</View>
        </View>
        <radio style='margin-top:20px;' value='{{item.id}}'></radio>
      </View>
    );
  }
}