const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files

app.get('/comments', (req, res) => {
    // Read comments from the text file and send as JSON
    fs.readFile('comments.txt', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send({ message: 'Error reading comments' });
            return;
        }
        // Parse the text file into array of comments
        const comments = data.trim().split('\n').map(line => {
            const [name, comment, date] = line.split('|');
            return { name, comment, date };
        });
        res.json(comments);
    });
});

app.post('/comments', (req, res) => {
    const { name, comment, date } = req.body;
    const commentLine = `${name}|${comment}|${date}\n`;
    
    // Append new comment to the text file
    fs.appendFile('comments.txt', commentLine, err => {
        if (err) {
            res.status(500).send({ message: 'Error saving comment' });
        } else {
            res.json({ message: 'Comment saved successfully' });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});