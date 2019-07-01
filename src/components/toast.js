import Taro, { Component } from '@tarojs/taro';


export default class Toast {
  state = {
    loading: false
  }
  init = {
    // 数据加载状态
    showToast: () => {
      Taro.showToast({
        title: title,
        icon: 'none',
        mask: true,
        duration: 1500
      });
    },

    // 数据加载中
    showLoading: () => {
      if (this.state.isLoading) {
        return
      }
      this.setState({
        loading: true
      })
      if (Taro.showLoading) {
        Taro.showLoading({
          title: title,
          mask: true
        })
      } else {
        Taro.showNavigationBarLoading()
      }
    },

    // 加载完成状态
    loaded = () => {
      let duration = 0
      if (this.state.loading) {
        this.setState({
          loading: false
        })
        if (Taro.hideLoading) {
          Taro.hideLoading()
        } else {
          Taro.hideNavigationBarLoading()
        }
        duration = 500
      }
      return new Promise(resolve => setTimeout(resolve, duration))
    },

    // 加载完成弹出
    showResult: (title, duration = 1500) => {
      Taro.showToast({
        title: title,
        icon: 'success',
        mask: true,
        duration: duration
      });
      if (duration > 0) {
        return new Promise(resolve => setTimeout(resolve, duration));
      }
    }
  }
}

