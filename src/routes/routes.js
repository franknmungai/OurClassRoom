// ? This file contains user relared routes
const express = require('express');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');
const router = new express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/hello', (req, res) => {
	res.send({
		message: 'Hello'
	});
});

// ? route for creating a new user account
router.post('/join', async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		sendEmail(user.email, user.firstName);
		res.status(201).send(user); //* created
	} catch (e) {
		res.status(400).send(e); //* bad request
	}
});

module.exports = router;
