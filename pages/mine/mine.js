// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    editMode:1,
    visible1: false,
    showPointDetail:true,
    reason:"reason",
    current: 'mine',
    name:"",
    phone:"",
    newCELabel:"",
    chineseMark:0,
    mathMark:0,
    flMark:0,
    sub1:"",
    sub2:"",
    sub3:"",
    sub1mark:0,
    sub2mark:0,
    sub3mark:0,
    total:750,
    rank:"",
    editPoint1:0,
    editPoint2:0,
    editPoint3:0,
    editPoint4:0,
    editPoint5:0,
    editPoint6:0
  },
  confirm:function(){
    wx.navigateTo({
      url:"../login/login"
    })
  },
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
    var dest_page = detail.key
    var dest_url = '../' + dest_page + '/' + dest_page
    console.log(dest_url)
    wx.redirectTo({
      url: dest_url
    })
  },
  edit: function () {
    var editMode=this.data.editMode
    
    if(editMode!=-1&&editMode!=-2){
      console.log("编辑分数")
      wx.navigateTo({
        url: './pointEdit/pointEdit',
      })
    }else{
      wx.showToast({
        title: this.data.reason,
        icon: 'none'
      })
    }
  },
  editElse:function(){
    var editMode = this.data.editMode
    if(editMode==-2){
      console.log("-2 6选3")
      wx.navigateTo({
        url: './newCEChoose/newCEChoose',
      })
    }else{
      console.log(editMode)
      console.log("其实不可能到这里")
      console.log("选文理")
    }
  },
  handleDone:function() {
    console.log("ok")
    this.setData({
      visible1: false
    });
  },
  handleOk1:function() {

  },
  handleClose1() {
    this.setData({
      visible1: false
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toUpdateInfo:function(){
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    var sessionId = wx.getStorageSync("sessionId")
    wx.request({
      url: 'http://192.168.43.187:8080/weapp/minePageInfoOnload',
      header: {
        'content-type': 'application/json',
        'Cookie': sessionId
      },
      success: function (res) {
        var name = res.data.name
        var year = res.data.year
        var subjectCode = parseInt(res.data.subjectCode)
        var newCELabel = res.data.newCELabel
        var isChooseComplete = parseInt(res.data.isChooseComplete)
        var noChooseReason = res.data.noChooseReason
        var chineseMark = parseInt(res.data.chineseMark)
        var mathMark = parseInt(res.data.mathMark)
        var flMark = parseInt(res.data.flMark)
        var sub1 = res.data.sub1
        var sub1mark = parseInt(res.data.sub1mark)
        var sub2 = res.data.sub2
        var sub2mark = parseInt(res.data.sub2mark)
        var sub3 = res.data.sub3
        var sub3mark = parseInt(res.data.sub3mark)
        var total = parseInt(res.data.total)
        var editMode = isChooseComplete
        if (chineseMark + mathMark + flMark + sub1mark + sub2mark + sub3mark == 0 || chineseMark + mathMark + flMark + sub1mark + sub2mark + sub3mark != total) {
          var show = true
        }
        if (isChooseComplete < 0) {
          var show = false
        } else {
          var show = true
        }

        var phone = wx.getStorageSync('phone');
        // console.log(noChooseReason)
        // console.log(total)
        that.setData({
          editMode: editMode,
          reason: noChooseReason + "(点我)",
          showPointDetail: show,
          name: name,
          phone: phone,
          newCELabel: newCELabel,
          sub1: sub1,
          sub2: sub2,
          sub3: sub3,
          chineseMark: chineseMark,
          mathMark: mathMark,
          flMark: flMark,
          sub1mark: sub1mark,
          sub2mark: sub2mark,
          sub3mark: sub3mark,
          total: total
        });
        if (newCELabel != "新高考") {
          if (subjectCode == 1 || subjectCode == 5) {
            wx.request({
              url: 'https://www.yifzy.com/teacher/fenduan/byfs',
              method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              data: {
                'nf': 2019,
                'pr': 210000,
                'fs': total,
                'kl': subjectCode
              },
              header: {
                "Content-Type": "application/x-www-form-urlencoded",
              }, // 设置请求的 header
              success: function (res) {
                if (res.statusCode == '200') {
                  console.log(res.data.result.wc)
                  that.setData({
                    rank: "全省:" + res.data.result.wc
                  });
                } else {
                  console.log(statusCode)
                }
              },
              fail: function (err) {
                console.log(err);
              }
            })
          }
        }
      },
      fail: function () {
        console.log("fail")
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})