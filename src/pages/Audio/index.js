import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Form, Input} from '@tarojs/components';
import MyAudio from '../../components/Audio'
import './index.styl'

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
        <view class="inputView">
          <label class="loginLabel">视频描述：</label>
          <input name="desc" class="inputText" placeholder="说点什么吧" />
        </view>


        <button class="submitBtn" type="primary" form-type='submit'>上传视频</button>
        
        <button class="gobackBtn" type="warn" form-type='reset'>重置</button>
      </View>
    );
  }
}