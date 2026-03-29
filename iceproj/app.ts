// app.ts

import { LoginData, LoginResponse } from './utils/wxlogin'

App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log("登陆", res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        const baseHost = "http://127.0.0.1:8080"
        wx.request<LoginResponse>({
          url: baseHost + '/api/v1/wx/login', // 替换为你的后端接口
          method: 'POST',
          data: {
            code: res.code,
          },
          success: (res) => {
            const { data } = res.data 
            if (data && data.errcode === 0) {
              console.log("登陆 res.data", data )
              console.log("登陆 openid",  data.openid)
              console.log("登陆 session_key",  data.session_key)
              wx.setStorageSync<LoginData>('logresp', data)

              // 跳转到首页或其他页面
              // setTimeout(() => {
              //   wx.switchTab({ url: '/pages/index/index' });
              // }, 1500);
            } else {
              console.error("登录失败") 
            }
          },
          fail: () => {
            console.error("网络错误，请检查连接") 
          }
        });
      },
    })
  },
})