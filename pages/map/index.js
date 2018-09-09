// pages/map/index.js
const LOCATION = require('../../models/location.js')

Page({
  data: {
    user: '',
    list: [],

    latitude: 0,
    longitude: 0,
    polyline: [],
    markers: []
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

    this.setData({ user })

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
      const { latitude, longitude } = list[0]

      that.setData({
        latitude,
        longitude,
        markers: [{ latitude, longitude }],
        polyline,
        list
      })
    })
  }
})
