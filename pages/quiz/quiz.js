// pages/quiz/quiz.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testName1: "性格测评",
    testName2: "职业兴趣测评",
    testName3:"优势学科",
    current: 'quiz',
    text0: '自知者明：职业规划和性格测试是人生中应该持续进行的自我了解的过程，一帆在此为您提供一套拥有独立IP且真正行之有效的测试。',
    text1: '独家智能综合测试题，扬长避短锁定自身优劣势',
    text2:'性格测试，帮你清晰认识自身性格优势',
    text3:'霍兰德兴趣测评，帮你发现自己的兴趣倾向',
    text4:'根据独家算法，帮你发现自己的优势学科'
  },
  toAllTest:function(){
    wx.navigateTo({
      url: '../ennTest/ennTest',
    })
  },
  toMoreQuiz:function(){
    wx.navigateTo({
      url: '../moreQuiz/moreQuiz',
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
  unnameFunction1:function(){
    wx.navigateTo({
      url: '../ennTest/ennTest',
    })
  },
  unnameFunction2: function () {
    wx.navigateTo({
      url: '../holTest/holTest',
    })
  },
  unnameFunction3:function(){
    wx.navigateTo({
      url: '../subInterest/subInterest',
    })
  },
  onLoad: function (options) {
    // var that = this
    // wx.request({
    //   url: "http://localhost:8080/wxget_is_si",
    //   method: "POST",
    //   data: {
    //     tel: wx.getStorageSync("tel")
    //   },
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   success: function (res) {
    //     if (res.statusCode == '200') {
    //       console.log(res.data)
    //       if (res.data == "1") {
    //         that.setData({
    //           text4:"做答完毕，点击查看结果"
    //         })
    //       }
    //     } else {
    //       console.log("通讯失败")
    //       // $Message({
    //       //   content: '与服务器通讯失败',
    //       //   type: 'error'
    //       // });
    //     }
    //   },
    // })
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