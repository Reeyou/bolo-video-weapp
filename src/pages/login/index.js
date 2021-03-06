import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components';
import banner from '../../resource/images/banner_night.jpg'
import Register from './register'
import Login from './login'
import './index.styl'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginVisble: false,
      registerVisble: false
    }
  }
  // 
  showLogin = () => {
    this.setState({
      loginVisble: true,
      registerVisble: false
    })
  }

  // 
  showRegister = () => {
    this.setState({
      registerVisble: true,
      loginVisble: false
    })
  }

  // 
  changeState(val) {
    this.setState({
      loginVisble: val.loginVisble,
      registerVisble: val.registerVisble
    })
  }
  render() {
    return (
      <View>
        <View className='banner'>
          <Image src={banner} className={this.state.loginVisble || this.state.registerVisble ? 'img' : ''}></Image>
        </View>
        <View className='container'>
          {
            this.state.loginVisble || this.state.registerVisble ? ''
            :
            <View className='tips'>
              <Text>Bolo</Text>
              <Text className='subTip'>时刻记录美好生活</Text>
            </View>
          }
          <View className='btn'>
            <View className='btn_con'>
              {
                this.state.loginVisble || this.state.registerVisble ? ''
                :
                <Button className='login' onClick={this.showLogin}>登录</Button>
              }
              {
                this.state.loginVisble || this.state.registerVisble ? ''
                :
                <Button className='register'  onClick={this.showRegister}>注册</Button>
              }
            </View>
          </View>
          <View className='con'>
            {
              this.state.loginVisble ? <Login setState={this.changeState.bind(this)}/> : ''
            }
            {
              this.state.registerVisble ? <Register setState={this.changeState.bind(this)}/> : ''
            }
          </View>
        </View>
      </View>
    )
  }
}

export default Index;