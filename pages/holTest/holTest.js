const { $Message } = require('../../dist/base/index');
Page({
  data: {
    which: 1,
    text: "我喜欢把一件事情做完后，再做另一件事",
    mark1:'6',
    mark2: '4',
    answers: "",
    lastone: true,
    setInter: '',
    num: 1,
    sub1: 0,
    sub2: 0,
    sub3: 0,
    sub4: 0,
    sub5: 0,
    sub6: 0,
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
    this.data.answers = this.data.answers + this.data.mark1
    var server_url = wx.getStorageSync('server_addr')
    if (this.data.which == 63) {
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
        url: server_url + "/weapp/getNextHol",
        method: "GET",
        data: {
          towhich: that.data.which
        },
        success: function (res) {
          if (res.statusCode == '200') {
            that.setData({
              text: res.data.split("&")[0],
              mark1: res.data.split("&")[1],
              mark2: res.data.split("&")[2],

            })
          } else {

          }
        }
      })
    }

  },
  handleB: function () {
    this.data.answers = this.data.answers + this.data.mark2
    var server_url = wx.getStorageSync('server_addr')
    if (this.data.which == 63) {
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
        url: server_url + "/weapp/getNextHol",
        method: "GET",
        data: {
          towhich: that.data.which
        },
        success: function (res) {
          if (res.statusCode == '200') {
            that.setData({
              text: res.data.split("&")[0],
              mark1: res.data.split("&")[1],
              mark2: res.data.split("&")[2],
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
    var server_url = wx.getStorageSync('server_addr')
    var sessionId = wx.getStorageSync("sessionId")
    var that = this
    var tel = wx.getStorageSync("tel")
    var answers = this.data.answers
    var sort = this.data.sub1 + ":" + this.data.sub2 + ":" + this.data.sub3 + ":" + this.data.sub4 + ":" + this.data.sub5 + ":" + this.data.sub6 + ":"
    wx.request({
      url: server_url + "/weapp/wxCalculateJobInterest",
      method: "POST",
      data: {
        tel: tel,
        holland_answer: answers,
        sortresult: sort
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Cookie': sessionId
      },
      success: function (res) {
        if (res.statusCode == '200') {
          console.log(res.data)
          if (res.data == "success") {
            wx.redirectTo({
              url: '../subInterest/subInterest',
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