//app.js
const AV = require('./libs/av-weapp-min.js');
const configs = require('./configs/leancloud.js')

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