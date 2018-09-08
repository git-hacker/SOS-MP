// pages/landing/index.js
const AV = require('../../libs/av-weapp-min.js');
const LOCATION = require('../../models/location.js')

const app = getApp()



 // 调用代码如下:
let restaurantData = {
  id:'r1',
  name: 'Garden Restaurant'
};



Page({


  data: {
  
  },

  onLoad: function (options) {

    // Get Current User from LeanCloud
    let user = AV.User.current()
    
    // Create Location Data
    let locationData = {
      longitude   : 4324234,
      latitude    : 232131,
      user        : user
    }
    console.log(444,locationData)

    LOCATION.newLocation(locationData)
      .then( result => {
        console.log(99999,result)
      })
      .catch( error => {
        console.log(error)
      })

    


  },

})