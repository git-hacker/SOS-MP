// pages/landing/index.js
const AV = require('../../libs/av-weapp-min.js');
const LOCATION = require('../../models/location.js')
const RESTAURANT = require('../../models/restaurant.js')
const SEAT = require('../../models/seat.js')
const app = getApp()

 // LeanCloud Acess Permission
 const acl = new AV.ACL()
 acl.setPublicReadAccess(true)
 acl.setPublicWriteAccess(true)

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
    
    // RESTAURANT.newRestaurant(restaurantData)
    //   .then(result => {
    //     console.log(11, result);
    //   });
    

    RESTAURANT.newRestaurant(restaurantData)
      .then(restaurant => {
        console.log(222,restaurant)
        let seatData = {
            capacity: 5,
            restaurant: restaurant
        }
        return SEAT.newSeat(seatData)
      }).then(result => {
          console.log(999,result)
      }).catch(error => {
          console.log(error);
      });  



    // Create new Location on LeanCloud
    //  new LOCATION({
    //   lat: 1234,
    //   longitude: 1234,
    //   userId: 99999
    // }).setACL(acl).save().catch(console.error)


  },

})