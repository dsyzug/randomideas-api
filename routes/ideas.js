const express = require('express');
const router = express.Router();

const ideas = [
    {
        id: 1,
        text: 'Positive NewsLetter, a newsletter that only shared positive, uplifting news',
        tag: 'Technology',
        username: 'TonyStark',
        date: '2022-01-02',
    },
    {
        id: 2,
        text: 'Milk cartons that turn a different color the older that your milk is getting',
        tag: 'Inventions',
        username: 'SteveRogers',
        date: '2022-01-02',
    },
    {
        id: 3,
        text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
        tag: 'Software',
        username: 'BruceBanner',
        date: '2022-01-02',
    },
];

// get all ideas
router.get('/', (req, res) => {
    res.json({ success: true, data: ideas });
});

// get idea by id
router.get('/:id', (req, res) => {
    const id = +req.params.id;
    const idea = ideas.find((idea) => idea.id === id);
    if (!idea) {
        return res.status(404).json({ success: false, message: 'Resource not found' });
    }
    res.json({ success: true, data: idea });
});

// Add an idea
router.post('/', (req, res) => {
    // console.log(req.body);
    const idea = {
        id: ideas.length + 1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0, 10),
    };

    ideas.push(idea);

    res.send({ success: true, data: idea });
});

// Update an idea
router.put('/:id', (req, res) => {
    const id = +req.params.id;
    const idea = ideas.find((idea) => idea.id === id);
    if (!idea) {
        return res.status(404).json({ success: false, message: 'Resource not found' });
    }
    idea.text = req.body.text || idea.text;
    idea.tag = req.body.tag || idea.tag;
    idea.date = new Date().toISOString().slice(0, 10);

    res.json({ success: true, data: idea });
});

// Delete an idea
router.delete('/:id', (req, res) => {
    const id = +req.params.id;
    const idea = ideas.find((idea) => idea.id === id);
    console.log(idea);
    if (!idea) {
        return res.status(404).json({ success: false, error: 'Resource not found' });
    }
    const index = ideas.indexOf(idea);
    const deletedIdea = ideas.splice(index, 1)[0];
    res.json({ success: true, data: deletedIdea });
});

module.exports = router;
