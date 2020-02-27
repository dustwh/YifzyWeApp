// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'mine',
    total:750,
    rank:123456
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  show_wc:function(){
    
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