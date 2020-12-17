const User = require('../models/user');
const Friends = require('../models/friends')

module.exports.create = async (id1, id2) => {
    check(id1,id2);
    Friends.create({
        'id_1' : id1,
        'id_2' : id2
    })
}
async function check(id1, id2){
    if (id1 > id2){
        const temp = id2;
        id2 = id1;
        id1 = temp;
    }
}