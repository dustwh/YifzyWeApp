//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    phone:""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toAtestPage: function(){
    var sessionId = wx.getStorageSync("sessionId")
    // console.log(sessionId)
    wx.request({
      url: 'https://www.yifzy.com/weapp/t',
      header: {
        'content-type': 'application/json',
        'Cookie': sessionId
      },
      success: function (res) {
        console.log(res)
      }
    })
  },
  checkLogin:function(){
    wx.checkSession(
      {
        success: function () {
          console.log("OK logged in")
        },
        fail:function(){
          console.log("fail")
        }
      }
    )
  },
  toDemo1:function(){
    wx.navigateTo({
      url: '../demo1/demo1'
    })
  },
  toDemo2: function () {
    wx.navigateTo({
      url: '../demo2/demo2'
    })
  },
  onLoad: function() {
    var  phone = wx.getStorageSync('phone');
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
        app.globalData.userInfo = res.userInfo
      this.setData({
        userInfo: res.userInfo,
        hasUserInfo: true
      })
    }
    })
    }
    this.setData({
      phone: phone
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getPhoneNumber: function (e) {
    // console.log(e.detail.iv);
    // console.log(e.detail.encryptedData);
    wx.login({
      success: res => {
      // console.log(res.code);
      wx.request({
        url: 'https://www.yifzy.com/weapp/getPhoneNumber',
        data: {
          'encryptedData': e.detail.encryptedData,
          'iv': e.detail.iv,
          'codes': res.code
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'content-type': 'application/json'
        }, // 设置请求的 header
        success: function (res) {
          wx.setStorageSync('phone', res.data.phoneNumber);
          wx.setStorageSync('sessionId', 'JSESSIONID=' + res.data.yifzySessionId);
          
          // wx.showToast({
          //   title: "号码为："+res.data.phoneNumber,
          //   icon: 'none'
          // })
          if (res.data.if_info_compelet=="1"){
            wx.redirectTo({
              url: '../homepage/homepage',
            })
          }else{
            wx.redirectTo({
              url: '../infoInit/infoInit',
            })
          }
        },
        fail: function (err) {
          console.log(err);
        }
    })
  }
  })
  }
})