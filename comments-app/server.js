const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const commentsFilePath = path.join(__dirname, 'data', 'comments.txt');

app.use(bodyParser.json());
app.use(express.static('public'));

// Route to get comments
app.get('/comments', (req, res) => {
    fs.readFile(commentsFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading comments file.');
        }
        const comments = data.split('\n').filter(Boolean).map(line => JSON.parse(line));
        res.json(comments);
    });
});

// Route to post a comment
app.post('/comments', (req, res) => {
    const { name, comment } = req.body;
    const newComment = { name, comment };

    fs.appendFile(commentsFilePath, JSON.stringify(newComment) + '\n', (err) => {
        if (err) {
            return res.status(500).send('Error writing to comments file.');
        }
        res.status(201).json(newComment);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});