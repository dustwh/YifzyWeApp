//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imodalShow:false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    current: 'homepage',
    name:"name",
    year:2017,
    point:750,
    school:"未登录无法显示",
    subject:"科目",
    rankTitle:"",
    rank:"",
    optiRec: {},
    normRec: {},
    pessRec:{},
    recCodesopts:[],
    recCodesnors:[],
    recCodespess:[],
    univrctName:"",
    univrctTag:"",
    univrctType:"",
    univrctLocation:"",
    univrctAffiliate:"",
    univrctLevel:"",
    univrctHomePage:""
  },
  //事件处理函数
  checkReport:function(){
    var that = this
    var sessionId = wx.getStorageSync("sessionId")
    wx.request({
      url: 'https://www.yifzy.com/weapp/getCanSeeReport',
      header: {
        'content-type': 'application/json',
        'Cookie': sessionId
      },
      success: function (res) {
        // console.log(res.data)
        if(res.data=="yes"){
          wx.navigateTo({
            url: '../report/report',
          })
        }else{
          wx.showToast({
            title: '尚未进行测试',
            icon:'none'
          })
        }
      },
      fail: function () {
        console.log("fail")
      }
    })
  },
  handleClose1:function(){
    this.setData({
      imodalShow:false
    })
  },

  toPiorityAndRank: function () {
    wx.showToast({
      title: '功能即将上线',
      icon: 'none'
    })
  },
  toMarkLine: function () {
    wx.showToast({
      title: '功能即将上线',
      icon: 'none'
    })
  },
  schoolInfo: function (e){
    var schoolCode = e.currentTarget.dataset.code
    var that = this
    wx.request({
      url: 'https://www.yifzy.com/weapp/getRecSchoolInfo',
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      data: {
        schoolCode: schoolCode
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      }, // 设置请求的 header
      success: function (res) {
        that.setData({
          imodalShow:true,
          univrctName:res.data.univrctName,
          univrctTag:res.data.univrctTag,
          univrctType:res.data.univrctType,
          univrctLocation:res.data.univrctLocation,
          univrctAffiliate:res.data.univrctAffiliate,
          univrctLevel:res.data.univrctLevel,
          univrctHomePage:res.data.univrctHomePage
        })
        // console.log(res.data)
      },
      fail: function (err) {
        console.log(err);
      }
    })

    // console.log(school)
    // wx.showToast({
    //   title: '本功能即将开放'
    // })
  },
  toQuiz:function(){
    wx.navigateTo({
      url: '../quiz/quiz',
    })
  },


  toUniRepo:function(){
    wx.showToast({
      title: '功能即将上线',
      icon: 'none'
    })
  },



  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
    var dest_page=detail.key
    var dest_url='../'+dest_page+'/'+dest_page
    // console.log(dest_url)
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
    var year = this.data.year
    if(year<=2017){
      wx.showToast({
        title: '您不是新高考生，无法使用本功能',
      })
    }else{
      wx.navigateTo({
        url: '../newCE/newCE',
      })
    }
  },
  toMajorRepo:function(){
    // wx.showToast({
    //   title: '本功能即将上线',
    // })
    wx.navigateTo({
      url: '../MajorRepo/MajorRepo',
    })
  },
  showNews:function(){
    wx.request({
      url: 'https://www.yifzy.com/weapp/getNews',
      header: {
        'content-type': 'application/json',
      },
      success: function (res) {

      },
      fail: function () {
        console.log("fail")
      }
    })
  },
  // test function
  testSession:function() {
    var sessionId = wx.getStorageSync("sessionId")
    // console.log(sessionId)
    wx.request({
      url: 'https://www.yifzy.com/weapp/testSession',
      header: {
        'content-type': 'application/json',
        'Cookie': sessionId
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  toService:function(){
    wx.navigateTo({
      url: '../service/service',
    })
  },
  onLoad: function () {

  },
  onShow:function(){
    var that = this
    var sessionId = wx.getStorageSync("sessionId")
    wx.request({
      url: 'https://www.yifzy.com/weapp/HomePageInfoGet',
      header: {
        'content-type': 'application/json',
        'Cookie': sessionId
      },
      success: function (res) {
        // console.log(res.data)
        var name = res.data.name
        var year = res.data.year
        var point = res.data.point
        var schoolCode = res.data.schoolCode
        var subject = res.data.subject
        var subjectCode = res.data.subjectCode
        var school = app.globalData.highschoolDictionary[schoolCode]
        
        that.setData({
          name: name,
          year:year,
          point: point,
          school: school,
          subject: subject,
          optiRec: res.data.recSchoolOptimistic,
          normRec: res.data.recSchoolNormal,
          pessRec: res.data.recSchoolPessimistic,
          recCodesopts:res.data.recCodesopts,
          recCodesnors:res.data.recCodesnors,
          recCodespess:res.data.recCodespess
        });

        if (!(subject == "新高考")) {
          // console.log("2017")
          var getRankFromTeacher = -1
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
                // console.log(res.data.result.wc)
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
        } else {
          // console.log("xin")
        }
      },
      fail: function () {
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
