// pages/landing/index.js
const AV = require('../../libs/av-weapp-min.js');
const LOCATION = require('../../models/location.js')

const app = getApp()




Page({


  data: {
    
  },

  loopGetLocation: function(timeInterval) {
    let that = this
    that.getLocation()
    
    setInterval( () => {  
      that.getLocation()
    }, timeInterval)
  },

  getLocation: function() {
    let that = this
    let user = AV.User.current()

    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        that.setData({latitude, longitude})
        console.log(3333333,that.data)

        that.sendLocationToLeanCloud(latitude, longitude, user)
      }
    })
    
  },

  sendLocationToLeanCloud: function(longitude, latitude, user) {
    // Create Location Data
    let locationData = {
                        longitude,
                        latitude,
                        user,
                      }
    
    // Create new Location under User
    LOCATION.newLocation(locationData)
      .then( result => {
        console.log(99999,result)
      })
      .catch( error => {
        console.log(error)
      })
  },

  safe: function() {

    let user = AV.User.current()

    LOCATION.clearLocation(user)

    wx.showToast({
      title: 'You are safe',
      icon: 'success',
      duration: 2000
    })

    
  },

  onLoad: function (options) {
    let that = this


    
    // Get Location in every 60 seconds
    this.loopGetLocation(60000)
    

  },


  onShareAppMessage: function () {
    let that = this
    console.log("On Share Message")

    let user = AV.User.current()
    console.log(234324234234,user.id)


    wx.showShareMenu({
      withShareTicket: true
    })


    return {
      title     : "SOS 我现在有危险，请帮助我！",
      path      : "pages/map/index?user=" + user.id,
      imageUrl  : '../../dist/images/help.jpg'
    }
  },
})