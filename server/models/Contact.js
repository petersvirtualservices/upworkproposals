const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
	name: String,
    email: String,
	message: String
});

const Contact = mongoose.model("contact", ContactSchema);

module.exports = Contact;