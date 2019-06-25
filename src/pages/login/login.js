import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Input} from '@tarojs/components';
import { AtButton } from 'taro-ui'
import './index.styl'

export default class Login extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={}

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 

  handleLogin = () => {

  }
  render() {
    return (
      <View className='loginForm'>
        <View className='form'>
          <View className='formItem'>
            {/* <Text className='iconfont icon-user'></Text> */}
            <Input className='input' placeholder='请输入用户名'/>
          </View>
          <View className='formItem item'>
            <Input className='input' type='password' placeholder='请输入密码'/>
          </View>
          <Button type='primary' className='login' onClick={this.handleLogin}>登录</Button>
        </View>
      </View>
    );
  }
}