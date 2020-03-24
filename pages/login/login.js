//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    phone:"",
    isComplete:"notlogin",
    hasSession: true
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
    var server_url = wx.getStorageSync('server_addr')
    wx.request({
      url: server_url+'/weapp/t',
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
    // wx.setStorageSync('server_addr', "http://127.20.10.3:8080");
    wx.setStorageSync('server_addr', "https://www.yifzy.com");
    var that = this
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
  // loginOld: function (e) {
  //   // console.log(e.detail.iv);
  //   // console.log(e.detail.encryptedData);
  //   var that = this
  //   // session_key 已经失效，需要重新执行登录流程
  //   wx.login({
  //     success: res => {
  //       // console.log(res.code);
  //       wx.request({
  //         url: 'http://172.20.10.3:8080/weapp/loginIn',
  //         data: {
  //           'encryptedData': e.detail.encryptedData,
  //           'iv': e.detail.iv,
  //           'codes': res.code
  //         },
  //         method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  //         header: {
  //           'content-type': 'application/json'
  //         }, // 设置请求的 header
  //         success: function (res) {
  //           wx.setStorageSync('phone', res.data.phoneNumber);
  //           wx.setStorageSync('sessionId', 'JSESSIONID=' + res.data.yifzySessionId);
  //           that.setData({
  //             isComplete: res.data.if_info_compelet
  //           })

  //           if (that.data.isComplete == "1") {
  //             wx.redirectTo({
  //               url: '../homepage/homepage',
  //             })
  //           } else if (that.data.isComplete == "0") {
  //             wx.redirectTo({
  //               url: '../infoInit/infoInit',
  //             })
  //           } else if (that.data.isComplete == "notlogin") {
  //             // do nothing
  //             return false
  //           } else {
  //             return false
  //           }
  //           // wx.showToast({
  //           //   title: "号码为："+res.data.phoneNumber,
  //           //   icon: 'none'
  //           // })
  //         },
  //         fail: function (err) {
  //           console.log(err);
  //         }
  //       })
  //     }
  //   })
  // },
  login: function () {
    var that = this
    var server_url = wx.getStorageSync('server_addr')
    wx.login({
      success: function (res) {
        console.log(res.code)
        //发送请求
        wx.request({
          url: server_url+'/weapp/login', //接口地址
          data: {
            codes: res.code
          },
          header: {
            'content-type': 'application/json' //默认值
          },
          success: function (res) {
            console.log(res.data)
            wx.setStorageSync('sessionId', 'JSESSIONID=' + res.data.yifzySessionId);
            if (res.data.if_info_compelet==1){
              wx.setStorageSync('phone', res.data.stu_tel);
              wx.navigateTo({
                url: '../homepage/homepage',
              })
            }else{
              wx.navigateTo({
                url: '../phoneInput/phoneInput',
              })
            }
          }
        })
      }
    })
  }

})