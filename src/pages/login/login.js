import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Input} from '@tarojs/components';
import { login } from '../../service/login'
import './index.styl'

export default class Login extends Component {

   config = {
       navigationBarTitleText: '登录'
  }

  state={}

  handleLogin = (e) => {
    Taro.showLoading({
      title: 'loading'
    })
    const formValue = e.target.value
    const params = {
      username: formValue.name,
      password: formValue.password
    }
    login(params).then(res => {
      if(res.code == 200) {
        console.log(111)
        // loaded()
      } else {
        console.log('获取失败')
      }
    })
  }
  render() {
    return (
      <View className='loginForm'>
        <Form className='form' onSubmit={this.handleLogin}>
          <View className='formItem'>
            {/* <Text className='iconfont icon-user'></Text> */}
            <Input className='input' name='name' placeholder='请输入用户名'/>
          </View>
          <View className='formItem item'>
            <Input className='input' type='password' name='password' placeholder='请输入密码'/>
          </View>
          <Button type='primary' className='login' form-type='submit'>登录</Button>
          <View className='tips'>暂无账号,去<Text>注册</Text></View>
        </Form>
      </View>
    );
  }
}