// pages/infoInit/infoInit.js
Page({
  data: {
    showSub:false,
    switch1: false,
    tel:"",
    mark:"",
    school:"",
    region: ['', '', ''],
    regionCode:[],
    grade: ['点击选择','高 1', '高 2', '高 3'],
    subArray: ['选择文理','文科','理科'],
    gradeIndex: 0,
    subIndex: 0
  },
  onChange(event) {
    const detail = event.detail;
    this.setData({
      'switch1': detail.value
    })
    if(detail.value==3){
      this.setData({
        'showSub': true
      })
      console.log("高三")
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindPickerChange: function (e) {
    console.log('picker1发送选择改变，携带值为', e.detail.value)
    
    this.setData({
      gradeIndex: e.detail.value
    })
    if(e.detail.value==3){
      this.setData({
        showSub: true
      })
    }else{
      this.setData({
        showSub: false
      })
    }
  },
  bindSubChange: function (e) {
    console.log('picker sub发送选择改变，携带值为', e.detail.value)
    this.setData({
      subIndex: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value,
      regionCode: e.detail.code
    })
    console.log("更改为:" + e.detail.code)
  },
  confirm:function(){
    var that = this
    console.log(this.data.tel)
    console.log(this.data.mark)
    console.log(2020-parseInt(this.data.gradeIndex))
    var subjectcode=0
    subjectcode=this.data.subIndex
    if(subjectcode==2){
      subjectcode=5
    }
    console.log(subjectcode)
    console.log(this.data.regionCode)
    console.log(this.data.school)

    // console.log(this.data.switch1+"")

    // wx.request({
    //   url: "http://localhost:8080/wxSaveInitInfo",
    //   method: "POST",
    //   data: {
    //     tel: that.data.tel,
    //     name: that.data.mark,
    //     tmpplace: that.data.school,
    //     isnewce: that.data.switch1+""
    //   },
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   success: function (res) {
    //     if (res.statusCode == '200') {
    //       console.log(res.data)
    //       if (res.data == "success") {
    //         wx.setStorageSync("tel", that.data.tel)
    //         wx.navigateTo({
    //           url: '../homepage/homepage',
    //         })
    //       } else {
    //         console.log("没返回");
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
    
    // wx.navigateTo({
    //   url: '../homepage/homepage',
    // })
  },
  onLoad: function () {
    var phone = wx.getStorageSync("phone")
    this.setData({
      tel: phone
    });
    console.log("拉取数据")
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
      mark: e.detail.value
    })
  },
  bindKeyInput3:function(e) {
    this.setData({
      school: e.detail.value
    })
  }
})