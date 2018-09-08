// pages/landing/index.js
const AV = require('../../libs/av-weapp-min.js');
const app = getApp()

Page({


  data: {
  
  },

  onLoad: function (options) {

    // Get Current User from LeanCloud
    let user = AV.User.current()
    


  },

})