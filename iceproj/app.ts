// app.ts
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
        // console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        const baseHost = "http://127.0.0.1:8080"
        wx.request({
          url: baseHost + '/api/v1/wx/login', // 替换为你的后端接口
          method: 'POST',
          data: {
            code: res.code,
          },
          success: (res) => {
            // 
            if (res.data ) {

              console.log("登陆 res.data ", res.data )
              console.log("登陆 openid", res.data.openid )
              console.log("登陆 session_key", res.data.session_key )
 
              // 登录成功，保存 token 或用户信息
              // wx.setStorageSync('token', res.data.token);
              // wx.setStorageSync('user', res.data.user);
    
              // this.setData({
              //   loginStatus: 'success',
              //   loginMessage: '登录成功！即将跳转...'
              // });
    
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



        //   /api/v1/wx/login


      },
    })
  },
})