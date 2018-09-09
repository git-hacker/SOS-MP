// pages/map/index.js
const LOCATION = require('../../models/location.js')
let timer

Page({
  data: {
    latitude: 0,
    longitude: 0,
    polyline: [],
    markers: [],
    list: []
  },

  updateMarkers: function (e) {
    const { latitude, longitude, id } = e.currentTarget.dataset
    this.setData({
      latitude,
      longitude,
      markers: [{ latitude, longitude, id }]
    })
  },

  onLoad: function (options) {
    const that = this
    const user = options.user

    const queryLocation = function (user) {
      // Query location under User
      LOCATION.queryLocation(user).then(results => {
        const list = results.map(i => ({
          id: i.id,
          latitude: i.attributes.longitude, // !!!
          longitude: i.attributes.latitude, // !!!
          createdAt: i.createdAt
        }))
        const polyline = [
          {
            points: list.map(({ latitude, longitude }) => ({
              latitude,
              longitude
            })),
            color: '#FF0000DD',
            width: 2,
            dottedLine: true
          }
        ]
        const { latitude, longitude, id } = list[0]

        that.setData({
          latitude,
          longitude,
          markers: [{ latitude, longitude, id }],
          polyline,
          list
        })
      })
    }

    timer = setInterval(function () {
      queryLocation(user)
    }, 60000)
    queryLocation(user)
  },

  // Clear timer when unloading page
  onUnload: function () {
    clearInterval(timer)
  }
})
