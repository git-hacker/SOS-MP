//app.js
const AV = require('./libs/av-weapp-min.js');
const configs = require('./configs/index.js')

AV.init({
  appId: configs.leancloudAppID,
  appKey: configs.leancloudAppKey,
});

App({
  onLaunch: function () {


     
  },
  globalData: {
    
  }
})