// pages/mine/myMajor/myMajor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    majors:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var sessionId = wx.getStorageSync("sessionId")
    wx.request({
      url: 'https://www.yifzy.com/weapp/getGuidSubjectNames',
      header: {
        'content-type': 'application/json',
        'Cookie': sessionId
      },
      success: function (res) {

        that.setData({
          majors: res.data
        });
      },
      fail: function () {
        console.log("fail")
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  back:function(){
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

  },
  toMajorRepo:function(){
    wx.navigateTo({
      url: '../../MajorRepo/MajorRepo',
    })
  }
})