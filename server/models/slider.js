const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const sliderSchema = new Schema({

});

module.exports = mongoose.model('Slider', sliderSchema);