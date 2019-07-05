import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Form, Input} from '@tarojs/components';
import MyAudio from '../../components/Audio'

export default class Audio extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={
    audioState: false,
    icon: 'play',
    data: [
      {
        src: "http://www.itzixi.com:88/download/timian.mp3",
        name: '体面',
        singer: '于文文',
        duration: '3:20'
      },
      {
        src: "http://www.itzixi.com:88/download/timian.mp3",
        name: '倒数',
        singer: '邓紫棋',
        duration: '4:30'
      },
      {
        src: "http://www.itzixi.com:88/download/timian.mp3",
        name: '倒数',
        singer: '邓紫棋',
        duration: '4:30'
      },
      {
        name: '倒数',
        singer: '邓紫棋',
        duration: '4:30'
      }
    ]
  }
  changeAudio = () => {
      if(this.state.audioState) {
        this.setState({
          audioState: !this.state.audioState,
          icon: 'pause' 
        })
      } else {
        this.setState({
          audioState: !this.state.audioState,
          icon: 'play'
        })
      }
    }


  render() {
    const { data, icon } = this.state
    return (
      <View >
        {
          data.map((item, index) => (
            <MyAudio data={item} key={index}></MyAudio>
          ))
        }
      </View>
    );
  }
}