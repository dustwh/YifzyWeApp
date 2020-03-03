Page({
  data: {
    latitude: 41.7582700000,
    longitude: 123.4232860000,
    markers: [{
      id: 1,
      latitude: 41.7582700000,
      longitude: 123.4232860000,
      name: '新世界丰盛商务大厦'
    }],
    covers: [{
      latitude: 41.7582700000,
      longitude: 123.4232860000,
      iconPath: '/img/location.png'
    }, {
      latitude: 41.7582700000,
      longitude: 123.4232860000,
      iconPath: '/img/location.png'
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  // getCenterLocation: function () {
  //   this.mapCtx.getCenterLocation({
  //     success: function (res) {
  //       console.log(res.longitude)
  //       console.log(res.latitude)
  //     }
  //   })
  // },

    moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  // translateMarker: function() {
  //   this.mapCtx.translateMarker({
  //     markerId: 1,
  //     autoRotate: true,
  //     duration: 1000,
  //     destination: {
  //       latitude:23.10229,
  //       longitude:113.3345211,
  //     },
  //     animationEnd() {
  //       console.log('animation end')
  //     }
  //   })
  // },
  includePoints: function() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude:41.7582700000,
        longitude:123.4232860000,
      }, {
        latitude:41.7582700000,
        longitude:123.4232860000,
      }]
    })
  }


})
