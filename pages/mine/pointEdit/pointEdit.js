// pages/mine/pointEdit/pointEdit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year:"",
    chineseMark: 0,
    mathMark: 0,
    flMark: 0,
    sub1:"",
    sub1mark: 0,
    sub2:"",
    sub2mark: 0,
    sub3:"",
    sub3mark: 0,
    total: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var sessionId = wx.getStorageSync("sessionId")
    var server_url = wx.getStorageSync('server_addr')
    wx.request({
      url: server_url + '/weapp/minePageInfoOnload',
      header: {
        'content-type': 'application/json',
        'Cookie': sessionId
      },
      success: function (res) {
        var year = res.data.year
        var subjectCode = parseInt(res.data.subjectCode)
        // var newCELabel = res.data.newCELabel
        // var isChooseComplete = parseInt(res.data.isChooseComplete)
        // var noChooseReason = res.data.noChooseReason
        var chineseMark = parseInt(res.data.chineseMark)
        var mathMark = parseInt(res.data.mathMark)
        var flMark = parseInt(res.data.flMark)
        var sub1 = res.data.sub1
        var sub1mark = parseInt(res.data.sub1mark)
        var sub2 = res.data.sub2
        var sub2mark = parseInt(res.data.sub2mark)
        var sub3 = res.data.sub3
        var sub3mark = parseInt(res.data.sub3mark)
        // var total = parseInt(res.data.total)
        // var editMode = isChooseComplete
        that.setData({
          year:year,
          subjectCode:subjectCode,
          sub1: sub1,
          sub2: sub2,
          sub3: sub3
        })
      },
      fail: function () {
        console.log("fail")
      }
    })
  },
  bindKeyInput1: function (e) {
    this.setData({
      chineseMark: e.detail.value
    })
  },
  bindKeyInput2: function (e) {
    this.setData({
      mathMark: e.detail.value
    })
  },
  bindKeyInput3: function (e) {
    this.setData({
      flMark: e.detail.value
    })
  },
  bindKeyInput4: function (e) {
    this.setData({
      sub1mark: e.detail.value
    })
  },
  bindKeyInput5: function (e) {
    this.setData({
      sub2mark: e.detail.value
    })
  },
  bindKeyInput6: function (e) {
    this.setData({
      sub3mark: e.detail.value
    })
  },
  save:function(){
    console.log("click save")
    var server_url = wx.getStorageSync('server_addr')
    var that = this
    var sessionId = wx.getStorageSync("sessionId")
    // var phone = wx.getStorageSync('phone');
    var year = this.data.year
    console.log(year)
    console.log(this.data.chineseMark)
    console.log(this.data.mathMark)
    console.log(this.data.flMark)
    console.log(this.data.sub1mark)
    console.log(this.data.sub2mark)
    console.log(this.data.sub3mark)
    if (this.data.chineseMark == 0 && this.data.mathMark == 0 && this.data.flMark == 0 && this.data.sub1mark == 0 && this.data.sub2mark == 0 && this.data.sub3mark == 0){
          wx.showToast({
            title: "分数不能为空",
            icon: 'none'
          })
    }else{
      wx.request({
        url: server_url + '/weapp/savePoint',
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
          'Cookie': sessionId
        },
        data: {
          year: that.data.year,
          chineseMark: that.data.chineseMark,
          mathMark: that.data.mathMark,
          flMark: that.data.flMark,
          sub1mark: that.data.sub1mark,
          sub2mark: that.data.sub2mark,
          sub3mark: that.data.sub3mark
        },
        success: function (res) {
          if (res.data=="ok"){
            wx.navigateTo({
              url: '../mine',
            })
          }
        },
        fail: function () {
          console.log("fail")
        }
      })
    }
    
    
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