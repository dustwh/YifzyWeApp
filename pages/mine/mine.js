// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    var that = this
    var sessionId = wx.getStorageSync("sessionId")
    wx.request({
      url: 'http://localhost:8080/weapp/minePageInfoOnload',
      header: {
        'content-type': 'application/json',
        'Cookie': sessionId
      },
      success: function (res) {
        console.log(res.data)
        var name=res.data.name
        var newCELabel=res.data.newCELabel
        var sub1=res.data.sub1
        var sub2=res.data.sub2
        var sub3=res.data.sub3
        var sub1mark=res.data.sub1mark
        var sub2mark=res.data.sub2mark
        var sub3mark=res.data.sub3mark
        var phone = wx.getStorageSync('phone');
        that.setData({
          name:name,
          phone: phone,
          newCELabel:newCELabel,
          sub1:sub1,
          sub2:sub2,
          sub3:sub3,
          chineseMark:222,
          mathMark:222,
          flMark:222,
          sub1mark:111,
          sub2mark:222,
          sub3mark:333
        });
      },
      fail: function () {
        console.log("fail")
      }
    })
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