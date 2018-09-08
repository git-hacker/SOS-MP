// pages/location/index.js
// pages/landing/index.js
const AV = require('../../libs/av-weapp-min.js');
const LOCATION = require('../../models/location.js')

const app = getApp()


Page({


  data: {
  
  },
  
  showMap: function(e) {
    console.log(656565, e)
    let longitude = e.currentTarget.dataset.longitude
    let latitude = e.currentTarget.dataset.latitude

    // FOR JUMPING TO MAP PAGE
    // var url = `/pages/map/index?latitude=${latitude}&longitude=${longitude}`
    // console.log(444444343432,url)
    // wx.navigateTo({url})

   
    wx.authorize({
      scope: 'scope.userLocation',
      success(res) {
          console.log(33,res)
          console.log(22,longitude, latitude)
          wx.openLocation({
            latitude: longitude,
            longitude: latitude,
            scale: 30
          }) 
      },
      fail(err) {
              console.log(44,err)
      } 
    })
      
  },


  onLoad: function (options) {
    let that = this
    var user = options.user

    this.setData({user})

    // Query location under User
    LOCATION.queryLocation(user)
      .then( results => {
        console.log(7777,results)
        that.setData({results})
        
      })
    }
})