import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Form, Input} from '@tarojs/components';
import './index.styl'
import play from '../../resource/images/play.png' 
import pause from '../../resource/images/pause.png'

export default class index extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={
    audioState: false,
    audio: {},
  }

  componentWillMount() {
    
  }
  changeAudio = () => {
    this.setState({
      audioState: !this.state.audioState,
    },() => {
      var audio = wx.createInnerAudioContext(); 
      audio.autoPlay = false;
      audio.src = this.props.data.src;
      if(this.state.audioState) {
        audio.play()
      } else {
        audio.pause() 
        console.log('pause')
      }
    })
    
  }


  render() {
    const { data } = this.props
    const { audioState } = this.state
    return (
      <View >
        <View className='audio'>
          <Image className='icon' src={audioState ? pause : play} onClick={this.changeAudio}></Image>
          <View>
            <View className='name'>{data.name}</View>
            <View className='singer'>{data.singer}</View>
          </View>
          <View className='duration'>{data.duration}</View>
        </View>
      </View>
    );
  }
}