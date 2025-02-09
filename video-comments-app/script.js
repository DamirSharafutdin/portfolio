document.addEventListener("DOMContentLoaded", fetchComments);

function addComment() {
    const name = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    if (!name || !comment) {
        alert('Please fill out both fields.');
        return;
    }

    const newComment = {
        name,
        comment,
        date: new Date().toLocaleString()
    };

    fetch('/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
    })
    .then(response => response.json())
    .then(commentData => {
        // Display new comment without reloading
        const commentsDisplay = document.getElementById('comments-display');
        const newCommentDiv = document.createElement('div');
        newCommentDiv.classList.add('comment');
        newCommentDiv.innerHTML = `
            <strong>${newComment.name}:</strong>
            <p>${newComment.comment}</p>
            <p>Added on: ${newComment.date}</p>
        `;
        
        commentsDisplay.appendChild(newCommentDiv);
        
        // Clear input fields
        document.getElementById('username').value = '';
        document.getElementById('comment').value = '';
    })
    .catch(error => console.error(error));
}

function fetchComments() {
    fetch('/comments')
        .then(response => response.json())
        .then(comments => {
            const commentsDisplay = document.getElementById('comments-display');
            comments.forEach(commentData => {
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerHTML = `
                    <strong>${commentData.name}:</strong>
                    <p>${commentData.comment}</p>
                    <p>Added on: ${commentData.date}</p>
                `;
                
                commentsDisplay.appendChild(commentDiv);
            });
        })
        .catch(error => console.error(error));
}