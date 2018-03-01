const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const contactsSchema = new Schema({
    phoneNumber: {type: Number}
});

module.exports = mongoose.model('Contacts', contactsSchema);