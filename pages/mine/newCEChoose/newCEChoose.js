// pages/mine/newCEChoose/newCEPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDoneQuiz:true,
    mainChangebArray: ['点击选择', '物理', '历史'],
    mainChangeIndex: 0,
    viceChangebArray1: ['点击选择', '化学', '生物', '政治', '地理'],
    viceChangeIndex1: 0,
    viceChangebArray2: ['点击选择', '化学', '生物', '政治', '地理'],
    viceChangeIndex2: 0,
    isDoneVice1:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var sessionId = wx.getStorageSync("sessionId")
    var server_url = wx.getStorageSync('server_addr')
    wx.request({
      url: server_url + '/weapp/isDoneWXQuiz',
      header: {
        'content-type': 'application/json',
        'Cookie': sessionId
      },
      success: function (res) {
        // console.log(res.data)
        if(res.data=="ok"){
          console.log("Done!")
          that.setData({
            isDoneQuiz:false
          })
        }else{
          // console.log("havn't done yet")
        }
      },
      fail: function () {
        console.log("fail")
      }
    })
  },
  bindMainChange:function(e){
    this.setData({
      mainChangeIndex: e.detail.value
    })
  },
  bindViceChange1:function(e){
    this.setData({
      viceChangeIndex1: e.detail.value,
      isDoneVice1:true
    })
  },
  bindViceChange2:function(e){
    this.setData({
      viceChangeIndex2: e.detail.value
    })
  },
  confirm:function(){
    var mainChangeIndex=this.data.mainChangeIndex
    var viceChangeIndex1=this.data.viceChangeIndex1
    var viceChangeIndex2=this.data.viceChangeIndex2
    var canSubmit=1
    var server_url = wx.getStorageSync('server_addr')
    if(mainChangeIndex==0){
      canSubmit = 0
      wx.showToast({
        title: '请在二选一中选择物理或历史',
        icon:'none'
      })
    }else{
      if (viceChangeIndex1 == 0) {
        canSubmit = 0
        wx.showToast({
          title: '请在四选二 第一科中进行选择',
          icon: 'none'
        })
      }else{
        if (viceChangeIndex2 == 0) {
          canSubmit = 0
          wx.showToast({
            title: '请在四选二 第二科中进行选择',
            icon: 'none'
          })
        }else{
          if (viceChangeIndex1 == viceChangeIndex2) {
            canSubmit = 0
            wx.showToast({
              title: '四选二不能选择相同的科目',
              icon: 'none'
            })
          }
        }
      }
    }
    
    
    if (canSubmit==1){
      var subResultArr=[0,0,0,0,0,0]
      var subResult=""
      if (mainChangeIndex==1){
        subResultArr[0] = 1
      } else if (mainChangeIndex == 2) {
        subResultArr[4] = 1
      }

      if (viceChangeIndex1==1){
        subResultArr[1]=1
      } else if (viceChangeIndex1 == 2) {
        subResultArr[2] = 1
      } else if (viceChangeIndex1 == 3) {
        subResultArr[3] = 1
      } else if (viceChangeIndex1 == 4) {
        subResultArr[5] = 1
      }

      if (viceChangeIndex2 == 1) {
        subResultArr[1] = 1
      } else if (viceChangeIndex2 == 2) {
        subResultArr[2] = 1
      } else if (viceChangeIndex2 == 3) {
        subResultArr[3] = 1
      } else if (viceChangeIndex2 == 4) {
        subResultArr[5] = 1
      }
      for(var i = 0;i<5;i++){
        subResult = subResult + subResultArr[i]+","
      }
      subResult = subResult + subResultArr[5]
      var sessionId = wx.getStorageSync("sessionId")
      wx.request({
        url: server_url + "/weapp/wxSaveNewCEChoose",
        method: "POST",
        data: {
          subResult: subResult
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
          'Cookie': sessionId
        },
        success: function (res) {
          if(res.data=="ok"){
            wx.navigateBack()
          }else{
            wx.showToast({
              title: '服务器似乎开了小差',
            })
          }
        },
      })
    }
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