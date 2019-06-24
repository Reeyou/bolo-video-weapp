import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components';
import banner from '../../resource/images/banner6.jpg'
import './index.styl'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <View className='banner'>
          <Image src={banner}></Image>
        </View>
        <View className='container'>
          <View className='tips'>
            <Text>Bolo</Text>
            <Text className='subTip'>时刻记录美好生活</Text>
          </View>
          <View className='btn'>
            <View className='btn_con'>
              <Button className='login'>登录</Button>
              <Button className='register'>注册</Button>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Register;