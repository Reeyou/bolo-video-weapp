import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Form, Input} from '@tarojs/components';
import './index.styl';

export default class VideoInfo extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={}

  render() {
    return (
      <View className='video'>
        <View className='wrapper'>
          <View className='container'>

          </View>
          <View className='footer'>
            <View className='left'>
              <Text className='avatar'></Text>
            </View>
            <View className='right'>
              <View>
                <Text></Text>
                <Text>5.1万</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}