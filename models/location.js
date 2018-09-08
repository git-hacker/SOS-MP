const AV = require('../libs/av-weapp-min.js')


let newLocation = (locationData) => {
    let user = locationData.user;
    if (user == undefined) throw new Error('Wrong type');
    let longitude = locationData.longitude || 0;
    let latitude = locationData.latitude || 0;
    let location = new AV.Object('Location');

    location.set('under', user);
    location.set('longtitude', longitude);
    location.set('latitude', latitude);

    return location.save();
}

let queryLocation = (user) => {

    if (typeof user == 'string') {

        user = AV.Object.createWithoutData('User', user);

    } else if (typeof restaurant != 'AV.Object') {
        throw new Error('Wrong type nor Strong or AV.Object');
    }

    let query = new AV.Query('Location')
    query.equalTo('under',user)
    // let query = AV.Query.doCloudQuery(`select * from Location where under=${user.}`)
    // SELECT * FROM SomeTable WHERE ID=6-4
    // update TodoFolder set name="家庭" where objectId="558e20cbe4b060308e3eb36c"
    return query.find()
}


module.exports = {
    newLocation,
    queryLocation
}
