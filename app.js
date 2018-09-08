//app.js
const AV = require('./libs/av-weapp-min.js');
const configs = require('./configs/index.js')

AV.init({
  appId: configs.leancloudAppID,
  appKey: configs.leancloudAppKey,
});

App({
  onLaunch: function () {

    AV.User.loginWithWeapp()
    .then(user => {

      this.globalData.user = user.toJSON();

      console.log(333,this.globalData)
      return user
      // return this.globalData.user
    })
    .catch(console.error);
     
  },
  globalData: {
    
  }
})