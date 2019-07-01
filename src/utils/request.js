import Taro from '@tarojs/taro';
/**
 * 封装http 请求方法
 */
export default function request(url, options) {
  Taro.request({
    url: url,
    data: options.body,
    header: options.header || {
      "Content-Type": "application/x-www-form-urlencoded"//设置后端需要的常用的格式就好，特殊情况调用的时候单独设置
    },
    method: options.method || 'GET',//默认为GET,可以不写，如常用请求格式为POST，可以设置POST为默认请求方式
  })
  .then(res => {
    console.log(res)
  })
}