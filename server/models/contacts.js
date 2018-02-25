const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const contactsSchema = new Schema({
    phoneNumber: {type: String}
});

module.exports = mongoose.model('Contacts', contactsSchema);