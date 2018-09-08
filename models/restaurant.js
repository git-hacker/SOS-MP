const AV = require('../libs/av-weapp-min.js')


let newRestaurant = (restaurantData) => {
    let name = restaurantData.name || '';
    if (name == '') {
        throw new Error('Error，😜');
    }
    let id = restaurantData.id || '';
    let restaurant = new AV.Object('Restaurant');
    restaurant.set('name', name);
    restaurant.set('id', id);
    return restaurant.save();
}

module.exports = {
    newRestaurant
}