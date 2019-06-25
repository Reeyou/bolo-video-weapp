import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Form, Input} from '@tarojs/components';
import './index.styl'

class Register extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={}

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 

  handleRegister = () => {

  }
  render() {
    return (
      <View className='registerForm'>
        <Form className='form'>
          <View className='formItem'>
            <Input className='input' placeholder='请输入用户名'/>
          </View>
          <View className='formItem item'>
            <Input className='input' type='password' placeholder='请输入密码'/>
          </View>
          <View className='formItem item'>
            <Input className='input' type='password' placeholder='请确认密码'/>
          </View>
          <Button type='primary' className='register' onClick={this.handleRegister}>注册</Button>
        </Form>
      </View>
    );
  }
}
export default Register;