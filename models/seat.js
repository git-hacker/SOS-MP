const AV = require('../libs/av-weapp-min.js')


let newSeat = (seatData) => {
    let restaurant = seatData.restaurant;
    if (restaurant == undefined) throw new Error('一个座位必须属于一个餐厅啊，亲 🏚');
    let capacity = seatData.capacity || 1;
    let seat = new AV.Object('Seat');
    let id = seatData.id || '';
    seat.set('under', restaurant);
    seat.set('id', id);
    seat.set('capacity', capacity);

    return seat.save();
}

module.exports = {
    newSeat
}
