// pages/ennTest/ennTest.js
const { $Message } = require('../../dist/base/index');
Page({
  data: {
    which: 1,
    textA: "A服务他人、因应他人的需求，对我而言是重要的",
    textB: "B寻求看待事物和做事的各种方法，对我而言是重要的",
    answers: "",
    lastone: true,
    setInter: '',
    num: 1,
    visible3:false,
    actions3: [
      {
        name: '返回到测评列表!',
        color: '#2d8cf0',
      }
      // ,
      // {
      //   name: '查看结果',
      //   color: '#19be6b'
      // }
    ]
  },
  handleClick3({ detail }) {
    const index = detail.index;

    if (index === 0) {
      wx.navigateBack()
    }

    this.setData({
      visible3: false
    });
  },
  handleA: function () {
    this.data.answers = this.data.answers + "0"
    if (this.data.which == 36) {
      this.setData({
        lastone: false
      })
    } else {
      var that = this
      var next = that.data.which + 1
      that.setData({
        which: next,
      })
      wx.request({
        url: "https://www.yifzy.com/weapp/getNextEnn",
        method: "GET",
        data: {
          towhich: that.data.which
        },
        success: function (res) {
          if (res.statusCode == '200') {
            that.setData({
              textA: res.data.split("&")[0],
              textB: res.data.split("&")[1]
            })
          } else {

          }
        }
      })
    }

  },
  handleB: function () {
    this.data.answers = this.data.answers + "1"
    if (this.data.which == 36) {
      this.setData({
        lastone: false
      })
    } else {
      var that = this
      var next = that.data.which + 1
      that.setData({
        which: next,
      })
      wx.request({
        url: "https://www.yifzy.com/getNextEnn",
        method: "GET",
        data: {
          towhich: that.data.which
        },
        success: function (res) {
          if (res.statusCode == '200') {
            that.setData({
              textA: res.data.split("&")[0],
              textB: res.data.split("&")[1],
            })
          } else {

          }
        }
      })
    }

  },
  onLoad: function () {
    var that = this;
    //将计时器赋值给setInter
    that.data.setInter = setInterval(
      function () {
        var numVal = that.data.num + 1;
        that.setData({ num: numVal });
      }
      , 1000);
  },
  onUnload: function () {
    var that = this;
    //清除计时器  即清除setInter
    clearInterval(that.data.setInter)
  },
  bindKeyInput1: function (e) {
    this.setData({
      sub1: e.detail.value
    })
  },
  bindKeyInput2: function (e) {
    this.setData({
      sub2: e.detail.value
    })
  },
  bindKeyInput3: function (e) {
    this.setData({
      sub3: e.detail.value
    })
  },
  bindKeyInput4: function (e) {
    this.setData({
      sub4: e.detail.value
    })
  },
  bindKeyInput5: function (e) {
    this.setData({
      sub5: e.detail.value
    })
  },
  bindKeyInput6: function (e) {
    this.setData({
      sub6: e.detail.value
    })
  },
  submit: function () {
    var that = this
    var tel = wx.getStorageSync("tel")
    var ennanswers = this.data.answers
    wx.request({
      url: "https://www.yifzy.com/wxcalculatePTypes",
      method: "POST",
      data: {
        tel: tel,
        enneagram_answer: ennanswers,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        if (res.statusCode == '200') {
          console.log(res.data)
          if (res.data == "ok") {
            wx.redirectTo({
              url: '../holTest/holTest',
            })
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


  }
});