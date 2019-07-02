import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Input} from '@tarojs/components';
import { login } from '../../service/login'
import './index.styl'


export default class Login extends Component {

  state={}

  

  toRegister = () => {
    this.props.setState({loginVisble: false, registerVisble: true})
  }

  handleLogin = (e) => {
    const username = e.target.value.name
    const password = e.target.value.password

    if(username.length == 0 || password.length == 0) {
      Taro.showToast({
        title: "用户名或密码不能为空",
        duration: 2000
      })
    } else {
      Taro.showLoading({
        title: '登录中'
      })
      const params = {
        username: username,
        password: password
      }
      login(params).then(res => {
        Taro.hideLoading()
        Taro.showToast({
          title: res.data.msg,
          duration: 2000
        })
        if(res.data.code == 200) {
          
        } else {
          
        }
      })
    }
  }
  render() {
    console.log(111)
    console.log(this.props)
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
          <View className='tips'>暂无账号,去<Text onClick={this.toRegister}>注册</Text></View>
        </Form>
      </View>
    );
  }
}