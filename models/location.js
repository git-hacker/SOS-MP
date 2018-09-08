const AV = require('../libs/av-weapp-min.js')

class LOCATION extends AV.Object {
    // allows to read local data
    // get upvote() { return this.get('upvote') }
    
    // allows to write local data
    // set upvote(value) { this.set('upvote',value) }
}

// Export Object
AV.Object.register(LOCATION, 'Location')
module.exports = LOCATION