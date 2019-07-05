import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import img from '../../resource/images/banner.jpg'
import avatar from '../../resource/images/noavatar.png'
import './index.styl'

class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }
  state = {
    screenWidth: 375,
    videoList: [
      {
        img: img,
        avatar: avatar,
        nickName: 'reeyou',
        commentCount: 200
      },
      {
        img: img,
        avatar: avatar,
        nickName: 'reeyou',
        commentCount: 100
      },
      {
        img: img,
        avatar: avatar,
        nickName: 'reeyou',
        commentCount: 377 
      }
    ]
  }



  render () {
    const { screenWidth, videoList } = this.state
    return (
      <View>
        {
          videoList.map(item => (
            <View className="item-container">  
              <View style={{width:`${screenWidth}px`, height:'210px', textAlign: 'center'}} className='back-img'> 
                <Image src={item.img} style={{width: '200px', height:'210px'}}></Image> 
              </View> 
              <View className="desc">
                <View className="faceName">
                  <Image className='myface' src={item.avatar}></Image>
                  <View className="nickname">{item.nickName}</View>
                </View>
                <View className='comment'>
                  <Image className='icon' src={avatar}></Image> 
                  <Text className='commentCount'>{item.commentCount}</Text>
                </View>
              </View>
            </View> 
          )) 
        }
      </View>
    )
  }
}

export default Index
