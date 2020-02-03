const { $Message } = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel:"",
    visible3: false,
    actions3: [
      {
        name: '去注册',
        color: '#2d8cf0',
      },
      {
        name: '返回',
        color:'#ed3f13'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */

  tel_input: function (e) {
    this.data.tel = e.detail.value+"";
  },
  checkUser: function () {
    var that = this
    var userTel = this.data.tel
    wx.request({
      url: "http://localhost:8080/wxfakelogin",
      method: "POST",
      data: {
        tel: userTel,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        if (res.statusCode == '200') {
          console.log(res.data)
          if (res.data == "0") {
            wx.setStorageSync('tel', userTel)
            wx.navigateTo({
              url: '../homepage/homepage',
            })
          } else if (res.data == "1") {
            wx.navigateTo({
              url: '../infoInit/infoInit?tel=' + userTel,
            })
          } else if (res.data == "-1") {
            that.setData({
              visible3: true
            });
          }
        } else {
          $Message({
            content: '与服务器通讯失败',
            type: 'error'
          });
        }
      },
    })
  },
  handleClick3({ detail }) {
    const index = detail.index;

    if (index === 0) {
      wx.navigateTo({
        url: '../infoInit/infoInit',
      })
    } else if (index === 1) {
      this.setData({
        visible3: false
      });
    }

    this.setData({
      visible3: false
    });
  },
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})