// pages/location/index.js
// pages/landing/index.js
const AV = require('../../libs/av-weapp-min.js');
const LOCATION = require('../../models/location.js')

const app = getApp()


Page({


  data: {
  
  },


  onLoad: function (options) {
    var user = options.user

    this.setData({user})

    // Query location under User
    LOCATION.queryLocation(user)
      .then( result => {
        console.log(7777,result)
      })
    }
})