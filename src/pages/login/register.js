import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Form, Input} from '@tarojs/components';
import {register} from '../../service/login'
import './index.styl'

class Register extends Component {

   config = {
       navigationBarTitleText: '注册'
  }

  state={}

  componentWillMount () {}


  handleRegister = (e) => {
    const formValue = e.target.value
    const params = {
      username: formValue.name,
      password: formValue.password
    }
    Taro.showLoading({
      title: '加载中'
    })
    register(params).then(res => {
      Taro.hideLoading()
      Taro.showToast({
        title: '注册成功',
        duration: 2000
      })
      // console.log(res)
      // if(res.code == 200) {
      //   Taro.hideLoading()
      //   Taro.showToast({
      //     title: '注册成功',
      //     duration: 2000
      //   })
      // }
    })
  }
  render() {
    return (
      <View className='registerForm'>
        <Form className='form' onSubmit={this.handleRegister}>
          <View className='formItem'>
            <Input className='input' name='name' placeholder='请输入用户名'/>
          </View>
          <View className='formItem item'>
            <Input className='input' type='password' name='password' placeholder='请输入密码'/>
          </View>
          <View className='formItem item'>
            <Input className='input' placeholder='请确认密码'/>
          </View>
          <Button type='primary' className='register' form-type='submit'>注册</Button>
          <View className='tips'>已有账号,去<Text>登录</Text></View>
        </Form>
      </View>
    );
  }
}
export default Register;