// pages/phoneInput/phoneInput.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  bindKeyInput1: function (e) {
    this.setData({
      tel: e.detail.value
    })
  },
  confirm:function(){
    var tel = this.data.tel
    var sessionId = wx.getStorageSync("sessionId")
    console.log(tel)
    var server_url = wx.getStorageSync('server_addr')
    wx.request({
      url: server_url+'/weapp/fillPhone', //接口地址
      data: {
        tel: tel
      },
      header: {
        'content-type': 'application/json', //默认值
        'Cookie': sessionId
      },
      success: function (res) {
        console.log("-----------" + res.data)
        wx.setStorageSync('phone', res.data);
        wx.navigateTo({
          url: '../infoInit/infoInit',
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})