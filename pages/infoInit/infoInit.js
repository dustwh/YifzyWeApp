// pages/infoInit/infoInit.js
Page({
  data: {
    switch1: false,
    tel:"",
    value1:"",
    value3:""
  },
  onChange(event) {
    const detail = event.detail;
    this.setData({
      'switch1': detail.value
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  confirm:function(){
    var that = this
    console.log(this.data.tel)
    console.log(this.data.value1)
    console.log(this.data.value3)
    console.log(this.data.switch1+"")

    wx.request({
      url: "http://localhost:8080/wxSaveInitInfo",
      method: "POST",
      data: {
        tel: that.data.tel,
        name: that.data.value1,
        tmpplace: that.data.value3,
        isnewce: that.data.switch1+""
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        if (res.statusCode == '200') {
          console.log(res.data)
          if (res.data == "success") {
            wx.setStorageSync("tel", that.data.tel)
            wx.navigateTo({
              url: '../homepage/homepage',
            })
          } else {
            console.log("没返回");
          }
        } else {
          console.log("通讯失败")
          // $Message({
          //   content: '与服务器通讯失败',
          //   type: 'error'
          // });
        }
      },
    })
    // wx.navigateTo({
    //   url: '../homepage/homepage',
    // })
  },
  onLoad: function (options) {
    this.setData({
      tel: options.tel
    });
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

  },
  bindKeyInput1:function(e) {
    this.setData({
      tel: e.detail.value
    })
  },
  bindKeyInput2:function(e) {
    this.setData({
      value1: e.detail.value
    })
  },
  bindKeyInput3:function(e) {
    this.setData({
      value3: e.detail.value
    })
  }
})