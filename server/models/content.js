const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const contentSchema = new Schema({

});

module.exports = mongoose.model('Content', contentSchema);