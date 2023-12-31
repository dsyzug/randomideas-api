const express = require('express');
require('dotenv').config(); // load .env file
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Random Ideas API' });
});

const ideaRounter = require('./routes/ideas');
app.use('/api/ideas', ideaRounter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
