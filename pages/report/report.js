// pages/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    enn1: 0,
    enn2: 0,
    enn3: 0,
    enn4: 0,
    enn5: 0,
    enn6: 0,
    enn7: 0,
    enn8: 0,
    enn9:0,
    hol0: 0,
    hol1: 0,
    hol2: 0,
    hol3: 0,
    hol4: 0,
    hol5: 0,
    itl0: 0,
    itl1: 0,
    itl2: 0,
    itl3: 0,
    itl4: 0,
    itl5: 0,
    itl6: 0,
    itl7: 0,
    majorRecList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var sessionId = wx.getStorageSync("sessionId")
    wx.request({
      url: "https://www.yifzy.com/weapp/getWxEnnResult",
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Cookie': sessionId
      },
      success: function (res) {
        if (res.statusCode == '200') {
          // console.log(res.data)
          var ennResultString = res.data
          var ennResArr = ennResultString.split(',')
          that.setData({
            enn1: ennResArr[0]*10,
            enn2: ennResArr[1]*10,
            enn3: ennResArr[2]*10,
            enn4: ennResArr[3]*10,
            enn5: ennResArr[4]*10,
            enn6: ennResArr[5]*10,
            enn7: ennResArr[6]*10,
            enn8: ennResArr[7]*10,
            enn9: ennResArr[8]*10
          })
          
        } else {
          console.log("网络似乎出小差，请检查wifi或流量")
          // $Message({
          //   content: '与服务器通讯失败',
          //   type: 'error'
          // });
        }
      },
    })


    wx.request({
      url: "https://www.yifzy.com/weapp/getWxHolRes",
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Cookie': sessionId
      },
      success: function (res) {
        if (res.statusCode == '200') {
          // console.log(res.data)
          var holResultString = res.data
          var holResArr = holResultString.split(',')
          that.setData({
            hol0: holResArr[0] * 10,
            hol1: holResArr[1] * 10,
            hol2: holResArr[2] * 10,
            hol3: holResArr[3] * 10,
            hol4: holResArr[4] * 10,
            hol5: holResArr[5] * 10,
          })

        } else {
          console.log("网络似乎出小差，请检查wifi或流量")
          // $Message({
          //   content: '与服务器通讯失败',
          //   type: 'error'
          // });
        }
      },
    })


    wx.request({
      url: "https://www.yifzy.com/weapp/getWxMajorRecList",
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Cookie': sessionId
      },
      success: function (res) {
        if (res.statusCode == '200') {
          // console.log(res.data)
          var itlResult = res.data
          var itlArr = itlResult.split(',')
          that.setData({
            itl0: itlArr[0],
            itl1: itlArr[1],
            itl2: itlArr[2],
            itl3: itlArr[3],
            itl4: itlArr[4],
            itl5: itlArr[5],
            itl6: itlArr[6],
            itl7: itlArr[7],
          })
// lll
        } else {
          wx.showToast({
            title: '网络似乎出小差，请检查wifi或流量',
            icon:"none"
          })
          // $Message({
          //   content: '与服务器通讯失败',
          //   type: 'error'
          // });
        }
      },
    })


    wx.request({
      url: "https://www.yifzy.com/weapp/getItlRes",
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Cookie': sessionId
      },
      success: function (res) {
        if (res.statusCode == '200') {
          console.log(res.data)
          var itlResult = res.data
          var itlArr = itlResult.split(',')
          that.setData({
            itl0: itlArr[0],
            itl1: itlArr[1],
            itl2: itlArr[2],
            itl3: itlArr[3],
            itl4: itlArr[4],
            itl5: itlArr[5],
            itl6: itlArr[6],
            itl7: itlArr[7],
          })
          // lll
        } else {
          console.log("网络似乎出小差，请检查wifi或流量")
          // $Message({
          //   content: '与服务器通讯失败',
          //   type: 'error'
          // });
        }
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  nBack:function(){
    wx.navigateBack()
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