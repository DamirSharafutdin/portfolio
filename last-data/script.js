<!DOCTYPE html>
<html>
<head>
<title>Comments Section</title>
<style>
body {
    font-family: sans-serif;
}
.comment {
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
}
.comment-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}
</style>
</head>
<body>

<h1>Comments</h1>

<div>
    <input type="text" id="commentName" placeholder="Your Name">
    <br>
    <textarea id="commentText" placeholder="Your Comment"></textarea>
    <br>
    <button onclick="addComment()">Add Comment</button>
</div>

<div id="commentsList"></div>

<script>
// Main JavaScript File

// Comments functionality
let comments = [];

function addComment() {
    const text = document.getElementById('commentText').value;
    const name = document.getElementById('commentName').value;

    if (!text || !name) {
        alert('Please fill in both name and comment');
        return;
    }

    const comment = {
        id: Date.now(),
        text,
        name,
        date: new Date().toLocaleDateString()
    };

    comments.push(comment);
    displayComments();

    // Clear inputs
    document.getElementById('commentText').value = '';
    document.getElementById('commentName').value = '';
}

function displayComments() {
    const commentsDiv = document.getElementById('commentsList');
    commentsDiv.innerHTML = comments.map(comment => `
        <div class="comment">
            <div class="comment-header">
                <strong>${comment.name}</strong>
                <span>${comment.date}</span>
            </div>
            <p>${comment.text}</p>
        </div>
    `).join('');
}
</script>

</body>
</html>
