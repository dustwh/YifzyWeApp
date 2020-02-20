//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    current: 'homepage',
    name:"萨达姆",
    point:652,
    school:"省实验中学",
    subject:"文科",
    rank:10000,
    optiRec: {},
    normRec: {},
    pessRec:{}
  },
  //事件处理函数
  checkReport:function(){
    wx.navigateTo({
      url: '../report/report',
    })
  },
  schoolInfo: function (event){
    var school = event.currentTarget.dataset.schoolCode
    console.log(school)
    wx.showToast({
      title: '展示学校信息'
    })
  },
  toQuiz:function(){
    wx.navigateTo({
      url: '../quiz/quiz',
    })
  },
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
    var dest_page=detail.key
    var dest_url='../'+dest_page+'/'+dest_page
    console.log(dest_url)
    wx.redirectTo({
      url: dest_url
    })
  },
  news:function(){
    wx.navigateTo({
      url: '../news/news',
    })
  },
  toUniversityRank:function(){
    wx.navigateTo({
      url: '../universityRank/universityRank',
    })
  },
  toNewCE: function() {
    wx.navigateTo({
      url: '../newCE/newCE',
    })
  },
  toMajorRepo:function(){
    wx.navigateTo({
      url: '../MajorRepo/MajorRepo',
    })
  },
  // test function
  testSession:function() {
    var sessionId = wx.getStorageSync("sessionId")
    console.log(sessionId)
    wx.request({
      url: 'http://localhost:8080/weapp/testSession',
      header: {
        'content-type': 'application/json',
        'Cookie': sessionId
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  onLoad: function () {
    var that = this
    var sessionId = wx.getStorageSync("sessionId")
    wx.request({
      url: 'http://localhost:8080/weapp/HomePageInfoGet',
      header: {
        'content-type': 'application/json',
        'Cookie': sessionId
      },
      success: function (res) {
        console.log(res.data)
        var name=res.data.name
        var point=res.data.point
        var schoolCode = res.data.schoolCode
        var subject=res.data.subject
        var school = app.globalData.highschoolDictionary[schoolCode]
        console.log(res.data.recSchoolOptimistic)
        console.log(res.data.recSchoolNormal)
        console.log(res.data.recSchoolPessimistic)
        that.setData({
          name: name,
          point: point,
          school: school,
          subject: subject,
          optiRec:res.data.recSchoolOptimistic,
          normRec:res.data.recSchoolNormal,
          pessRec:res.data.recSchoolPessimistic
        });
      },
      fail:function(){
        console.log("fail")
      }
    })
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // }
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  }
})
