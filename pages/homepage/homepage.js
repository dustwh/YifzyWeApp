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
    name:"name",
    point:750,
    school:"未登录无法显示",
    subject:"科目",
    rankTitle:"",
    rank:"",
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
  toMine:function(){
    wx.redirectTo({
      url:'../mine/mine'
    });
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
      url: 'http://192.168.43.187:8080/weapp/testSession',
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
      url: 'http://192.168.43.187:8080/weapp/HomePageInfoGet',
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
        var subjectCode = res.data.subjectCode
        var school = app.globalData.highschoolDictionary[schoolCode]
        console.log("here to check rec school list")
        // console.log(res.data.recSchoolOptimistic)
        // console.log(res.data.recSchoolNormal)
        // console.log(res.data.recSchoolPessimistic)
        // console.log(schoolCode)
        // console.log(school)
        that.setData({
          name: name,
          point: point,
          school: school,
          subject: subject,
          optiRec:res.data.recSchoolOptimistic,
          normRec:res.data.recSchoolNormal,
          pessRec:res.data.recSchoolPessimistic
        });

        if (!(subject=="新高考")){
          console.log("2017")
          var getRankFromTeacher=-1
          wx.request({
            url: 'https://www.yifzy.com/teacher/fenduan/byfs',
            method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            data: {
              'nf': 2019,
              'pr': 210000,
              'fs': point,
              'kl': subjectCode
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded",
            }, // 设置请求的 header
            success: function (res) {
              if (res.statusCode == '200') {
                console.log(res.data.result.wc)
                that.setData({
                  rankTitle: " / 全省排名:",
                  rank: res.data.result.wc
                });
              } else {
                console.log(statusCode)
              }
            },
            fail: function (err) {
              console.log(err);
            }
          })
        }else{
          console.log("xin")
        }
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
