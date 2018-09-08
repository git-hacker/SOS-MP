//index.js
const AV = require('../../libs/av-weapp-min.js');
const app = getApp()

Page({
  data: {
   
  },
 
  onLoad: function () {
    let that = this

    // Login with LeanCloud
    AV.User.loginWithWeapp()
    .then(user => {

      app.globalData.user = user.toJSON();
      return user
      // return this.globalData.user
    })
    .then( res => {
      console.log(5555,res)
      console.log(666,app.globalData)

      wx.redirectTo({
        url: '/pages/landing/index',
      })
      
      return res
    })
    .catch(console.error);
   

    

  
  }
})
