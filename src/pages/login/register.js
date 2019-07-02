import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Form, Input} from '@tarojs/components';
import {register} from '../../service/login'
import './index.styl'

let timer = null
class Register extends Component {
  constructor(props) {
    super(props)
  }

  componentWillUnmount() {
    clearTimeout(timer)
  }


  toLogin = () => {
    this.props.setState({loginVisble: true, registerVisble: false})
  }

  handleRegister = (e) => {
    const username = e.target.value.name
    const password = e.target.value.password
    const params = {
      username: username,
      password: password
    }
    if(username.length == 0 || password.length == 0) {
      Taro.showToast({
        title: "用户名或密码不能为空",
        icon: 'none',
        duration: 2000
      })
    } else {
      Taro.showLoading({
        title: '加载中'
      })
      register(params).then(res => {
        Taro.hideLoading()
        Taro.showToast({
          title: '注册成功',
          duration: 2000
        })
        if(res.data.code == 200) {
          timer = setInterval(() => {
            this.props.setState({loginVisble: true, registerVisble: false})
          }, 2000)
        } else {

        }
      })
    }
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
          <View className='tips'>已有账号,去<Text onClick={this.toLogin}>登录</Text></View>
        </Form>
      </View>
    );
  }
}
export default Register;