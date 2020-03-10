// pages/schoolChoose/schoolChoose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // tap_a_rec: function () {
  //   console.log("asdsad")
  // },
  onLoad: function (options) {

  },
  searchInput:function(e){
    this.setData({
      searchText: e.detail.value
    })
  },
  search:function(){
    console.log(this.data.searchText)
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