Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */

  tel_input: function (e) {
    this.data.tel = e.detail.value+"";
  },
  login:function(){
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          console.log(res.code  )
          wx.request({
            url: 'http://192.168.1.100:8080/wxFindUser',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  checkUser: function () {
    
    var userTel = this.data.tel
    wx.request({
      url: "http://localhost:8080/wxFindUser",
      method: "POST",
      data: {
        tel: userTel,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        if (res.statusCode == '200'){
          console.log(res.data)
          if (res.data=="0"){
            wx.navigateTo({
              url: '../homepage/homepage',
            })
          } else if (res.data=="1"){
            wx.navigateTo({
              url: '../infoInit/infoInit?tel=' + userTel,
            })
          }else if (res.data =="needRegist"){
            console.log("自动注册或者怎样")
          }
        }else{
          $Message({
            content: '与服务器通讯失败',
            type: 'error'
          });
        }
      },
    })
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