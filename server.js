const express = require('express');
const port = 5000;
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
