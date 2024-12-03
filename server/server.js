//Backend Modules
const express = require('express');
const mongoose = require('mongoose');
var path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
var dotenv = require("dotenv");

//Dotenv connects the config file
//Create a .env config file
dotenv.config();

//Express creates servers for non-static pages
const app = express();
app.use(cors());


//Mongoose is a schema creator for MongoDB
mongoose.connect(process.env.MONGODBURI, {useNewUrlParser: true})
    .then(() => console.log("Connected to MongoDB"))
    .catch(console.error);

//MongoDB Models
const Contact = require("./models/Contact");
const Chat = require("./models/Chat");

//Global Middleware
//Body parser is necessary to combine front- and back-end on different localhosts
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json());


//Contact Route
//The Create API
app.post('/contact/new', (req, res) => {
	const contact = new Contact({
		name: req.body.name,
        email: req.body.email,
        message: req.body.message
	})
	contact.save();
	res.json(contact);
});

//Chat Create
//The Create API
app.post('/chat/new', (req, res) => {
	const chat = new Chat({
		text: req.body.text,
        date: Date.now(),
        creator: req.body.creator,
        chatRoomID: req.body.chatRoomID
	})
	chat.save();
	res.json(chat);
});


//Port Creation
//Rendering to strings
const port = 4555;
app.listen(port, () => console.log(`Server started on port ${port}`));

