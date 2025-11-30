// server.js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let currentMessage = 'No message yet';
// GET — return message
app.get('/', (req, res) => {
	res.send('home');
});
app.get('/view', (req, res) => {
	res.send(currentMessage);
});

// POST — update message
app.post('/', (req, res) => {
	const { message } = req.body;

	if (!message?.trim()) {
		return res.status(400).send('Message required');
	}

	currentMessage = message.trim();
	res.send(currentMessage);
});

app.listen(9090, () => console.log('Server running on 9090'));
