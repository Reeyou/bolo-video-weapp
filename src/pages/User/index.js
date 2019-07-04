import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Form, Input, Label} from '@tarojs/components';
import "./index.styl"

export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fansCounts: 0,
      followCounts: 0,
      receiveLikeCounts: 0,
    }
  }

   config = {
       navigationBarTitleText: ''
  }

  componentWillMount () {}


  render() {
    const { fansCounts, followCounts, receiveLikeCounts } = this.state
    return (
      <View className='user'>
        <View className='container'>
          <View className='info'>
            <View className='avatar'></View>
            <View className='upload'>
              <Button size='mini' type='primary'>上传作品</Button>
            </View>
            <View className='loginout'>
            <Button size='mini' type='primary'>注销</Button>
            </View>
            {/* <View className='followBtn'>
              <Button size='mini' type='primary'>关注我</Button>
            </View> */}
            <View className='count'>
              <Label class='info-items'>{fansCounts} 粉丝</Label>
              <Label class='info-items'>{followCounts} 关注</Label>
              <Label class='info-items'>{receiveLikeCounts} 获赞</Label>
            </View>
          </View>
          <View className='tab'>
            <Label class='tablist tablist_left active' bindtap='doSelectWork'>作品</Label>
            <Label class='tablist tablist_mid' bindtap='doSelectLike'>收藏</Label>
            <Label class='tablist tablist_right' bindtap='doSelectFollow'>关注</Label>
          </View>
          <View classname='list'>
            <View classname='item work'>
              <Image src=''/>
            </View>
            <View classname='item like'>
              <Image src=''/>
            </View>
            <View classname='item follow'>
              <Image src=''/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}