import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Form, Input} from '@tarojs/components';
import './index.styl'
import play from '../../resource/images/play.png'
import pause from '../../resource/images/pause.png'

export default class Audio extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={
    name: '体面',
    singer: '于文文',
    duration: '5:30'
  }


  render() {
    const { name, singer, duration } = state
    return (
      <View className='audio'>
        <Image className='icon'></Image>
        <View>
          <View className='name'>{name}</View>
          <View className='singer'>{singer}</View>
        </View>
        <View className='duration'>{duration}</View>
      </View>
    );
  }
}