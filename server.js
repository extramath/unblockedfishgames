const express = require('express');
const app = express();
const port = 3000;

// In-memory storage for simplicity (replace with a database in production)
const games = [
    { title: 'Game Title 1', description: 'Description of Game 1.' },
    { title: 'Game Title 2', description: 'Description of Game 2.' },
];

app.use(express.static('public'));

app.get('/api/games', (req, res) => {
    res.json(games);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
