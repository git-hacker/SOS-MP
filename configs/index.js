const leancloud = require('./leancloud.js')
const paths = require('./paths.js')

module.exports = {
 ...leancloud,
 ...paths
}