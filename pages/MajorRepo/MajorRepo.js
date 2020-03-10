// pages/MajorRepo/MajorRepo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    majrSchedule:"",
    majrDegree:"",
    majrIntroduce:"",
    majrAim:"",
    majrRequire:"",
    majrFamous:"",
    majrClasses:"",
    majrSubjectRequire:"",
    majrKnowledgePower:"",
    majrDirection:"",
    majrOccupation:"",
    actions3: [
      {
        name: '基本信息',
        color: '#2d8cf0',
      },
      {
        name: '就业信息',
        color: '#19be6b'
      },
      {
        name: '取消'
      }
    ],
    showIndex: 0,
    majors:[],
    major01: [
      { code: '0101', title: '哲学类' }
    ],
    major02: [
      { code: '0201', title: '经济学类' },
      { code: '0202', title: '财政学类' },
      { code: '0203', title: '金融学类' },
      { code: '0204', title: '经济与贸易类' }
    ],
    major03: [
      { code: '0301', title: '法学类' },
      { code: '0302', title: '政治学类' },
      { code: '0303', title: '社会学类' },
      { code: '0304', title: '民族学类' },
      { code: '0305', title: '马克思主义理论类' },
      { code: '0306', title: '公安学类' }
    ],
    major04: [
      { code: '0401', title: '教育学类' },
      { code: '0402', title: '体育学类' }
    ],
    major05: [
      { code: '0501', title: '中国语言文学类' },
      { code: '0502', title: '外国语言文学类' },
      { code: '0503', title: '新闻传播学类' }
    ],
    major06: [
      { code: '0601', title: '历史学类' }
    ],
    major07: [
      { code: '0701', title: '数学类' },
      { code: '0702', title: '物理学类' },
      { code: '0703', title: '化学类' },
      { code: '0704', title: '天文学类' },
      { code: '0705', title: '地理科学类' },
      { code: '0706', title: '大气科学类' },
      { code: '0707', title: '海洋科学类' },
      { code: '0708', title: '地球物理学类' },
      { code: '0709', title: '地质学类' },
      { code: '0710', title: '生物科学类' },
      { code: '0711', title: '心理学类' },
      { code: '0712', title: '统计学类' }
    ],
    major08: [
      { code: '0801', title: '力学类' },
      { code: '0802', title: '机械类' },
      { code: '0803', title: '仪器类' },
      { code: '0804', title: '材料类' },
      { code: '0805', title: '能源动力类' },
      { code: '0806', title: '电气类' },
      { code: '0807', title: '电子信息类' },
      { code: '0808', title: '自动化类' },
      { code: '0809', title: '计算机类' },
      { code: '0810', title: '土木类' },
      { code: '0811', title: '水利类' },
      { code: '0812', title: '测绘类' },
      { code: '0813', title: '化工与制药类' },
      { code: '0814', title: '地质类' },
      { code: '0815', title: '矿业类' },
      { code: '0816', title: '纺织类' },
      { code: '0817', title: '轻工类' },
      { code: '0818', title: '交通运输类' },
      { code: '0819', title: '海洋工程类' },
      { code: '0820', title: '航空航天类' },
      { code: '0821', title: '兵器类' },
      { code: '0822', title: '核工程类' },
      { code: '0823', title: '农业工程类' },
      { code: '0824', title: '林业工程类' },
      { code: '0825', title: '环境科学与工程类' },
      { code: '0826', title: '生物医学工程类' },
      { code: '0827', title: '食品科学与工程类' },
      { code: '0828', title: '建筑类' },
      { code: '0829', title: '安全科学与工程类' },
      { code: '0830', title: '生物工程类' },
      { code: '0831', title: '公安技术类' }
    ],
    major09: [
      { code: '0901', title: '植物生产类' },
      { code: '0902', title: '自然保护与环境生态类' },
      { code: '0903', title: '动物生产类' },
      { code: '0904', title: '动物医学类' },
      { code: '0905', title: '林学类' },
      { code: '0906', title: '水产类' },
      { code: '0907', title: '草学类' }
    ],
    major10: [
      { code: '1001', title: '基础医学类' },
      { code: '1002', title: '临床医学类' },
      { code: '1003', title: '口腔医学类' },
      { code: '1004', title: '公共卫生与预防医学类' },
      { code: '1005', title: '中医学类' },
      { code: '1006', title: '中西医结合类' },
      { code: '1007', title: '药学类' },
      { code: '1008', title: '中药学类' },
      { code: '1009', title: '法医学类' },
      { code: '1010', title: '医学技术类' },
      { code: '1011', title: '护理学类' }
    ],
    major12: [
      { code: '1201', title: '管理科学与工程类' },
      { code: '1202', title: '工商管理类' },
      { code: '1203', title: '农业经济管理类' },
      { code: '1204', title: '公共管理类' },
      { code: '1205', title: '图书情报与档案管理类' },
      { code: '1206', title: '物流管理与工程类' },
      { code: '1207', title: '工业工程类' },
      { code: '1208', title: '电子商务类' },
      { code: '1209', title: '旅游管理类' }
    ],
    major13: [
      { code: '1301', title: '艺术学理论类' },
      { code: '1302', title: '音乐与舞蹈学类' },
      { code: '1303', title: '戏剧与影视学类' },
      { code: '1304', title: '美术学类' },
      { code: '1305', title: '设计学类' }
    ],
    current: 'tab1',
    current_scroll: 'tab1',
    name: 'name1',
    show:true,
    imodalShow:false,
    majorTittle:"详细信息"
  },

  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
    if (detail.key =="tab2"){
      this.setData({
        show: false
      });
    }else{
      this.setData({
        show: true
      });
    }
  },

  handleChangeScroll({ detail }) {
    this.setData({
      current_scroll: detail.key
    });
  },
  showMajorModal:function(e){
    var that = this
    var code = e.currentTarget.dataset.text.split("-")[0]
    var name = e.currentTarget.dataset.text.split("-")[1]
    this.setData({
      imodalShow:true
    })
    wx.request({
      url: 'https://www.yifzy.com/weapp/getMajorInfo',
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      data: {
        majorCode:code
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      }, // 设置请求的 header
      success: function (res) {
        that.setData({
          majorTittle: res.data.majrName,
          majrSchedule:res.data.majrSchedule,
          majrDegree:res.data.majrDegree,
          majrIntroduce:res.data.majrIntroduce,
          majrAim:res.data.majrAim,
          majrRequire:res.data.majrRequire,
          majrFamous:res.data.majrFamous,
          majrClasses:res.data.majrClasses,
          uire:res.data.majrSubjectRequire,
          ower:res.data.majrKnowledgePower,
          majrDirection:res.data.majrDirection,
          majrOccupation:res.data.majrOccupation
        })
      },
      fail: function (err) {
        console.log(err);
      }
    })
  },
  handleClose1() {
    this.setData({
      imodalShow: false
    });
  },

  // majorInfo:function(event){
  //   var that = this
  //   var major_code = event.currentTarget.dataset.code
  //   var major_tittle = event.currentTarget.dataset.tittle
  //   console.log(major_code)
  //   if (major_code.length==6){
  //     this.setData({
  //       imodalShow: true,
  //       majorTittle: major_tittle
  //     });
  //   }
  // },
  // handleClick3({ detail }) {
  //   const index = detail.index;

  //   if (index === 0) {
  //     //显示基本信息
  //     this.setData({
  //       info: "展示基本信息",
  //     })
  //     return false;
  //   } else if (index === 1) {
  //     //显示就业信息
  //     this.setData({
  //       info: "展示就业信息",
  //     })
  //     return false;
  //   }

  //   this.setData({
  //     imodalShow: false
  //   });
  // },
  /**
   * 生命周期函数--监听页面加载
   */
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
   * 页面相关事件处理函数-d-监听用户下拉动作
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
  // SSSSSS

  panel: function (e) {
    this.setData({
      majrSchedule:"",
      majrDegree:"",
      majrIntroduce:"",
      majrAim:"",
      majrRequire:"",
      majrFamous:"",
      majrClasses:"",
      uire:"",
      ower:"",
      majrDirection:"",
      majrOccupation:""
    })
    var that=this
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      var code = e.currentTarget.dataset.code;
      wx.request({
        url: 'https://www.yifzy.com/weapp/getMajorRepo',
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        data: {
          majorCode: code
        },
        header: {
          'content-type': "application/x-www-form-urlencoded",
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            showIndex: e.currentTarget.dataset.index,
            majors: res.data
          })
        },
        fail: function () {
          console.log("fail")
        }
      })
    } else {
      this.setData({
        showIndex: 0
      })
    }
  },
    // EEEEEE
  toBack:function(){
    wx.navigateBack();
  }
})