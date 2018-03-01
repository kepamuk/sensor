const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const goodsSchema = new Schema({
    name: {type: String}
});

module.exports = mongoose.model('Goods', goodsSchema);