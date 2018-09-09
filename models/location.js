const AV = require('../libs/av-weapp-min.js')


let newLocation = (locationData) => {
    let user = locationData.user;
    if (user == undefined) throw new Error('Wrong type');
    let longitude = locationData.longitude || 0;
    let latitude = locationData.latitude || 0;
    let location = new AV.Object('Location');

    location.set('under', user);
    location.set('longitude', longitude);
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
    query.descending('createdAt');
    // let query = AV.Query.doCloudQuery(`select * from Location where under=${user.}`)
    // SELECT * FROM SomeTable WHERE ID=6-4
    // update TodoFolder set name="家庭" where objectId="558e20cbe4b060308e3eb36c"
    return query.find()
}

let clearLocation = (user) => {
    let that = this

    var userId = user.id
    // var cql = `select * from Location where under=pointer('_User','${userId}')`;
    var cql = `select * from Location where under={__type: 'Pointer', objectId: '${userId}', className:'_User'}`;
    // var cql = `select * from Location `;
    console.log(34324234324,cql)

    AV.Query.doCloudQuery(cql)
        .then( (data) => {   
            // var results = data.results;
            console.log(4444,data)
            return data.results
        }).then( (results) => {
            console.log(6666,results)

            results.forEach( (location) => {
                console.log(111,location.id)
                var objectId = location.id
                var cql_delete = `delete from Location where objectId="${objectId}"`
                AV.Query.doCloudQuery(cql_delete)
                    .then( (res) => {
                        console.log(99999,res)
                    })
            })

        })

    console.log(3343434, userId)
}


module.exports = {
    newLocation,
    queryLocation,
    clearLocation
}
