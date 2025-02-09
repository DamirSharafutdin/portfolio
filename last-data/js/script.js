// Function to retrieve comments from the txt file
function getComments() {
    fetch('comments.txt')
        .then(response => response.text())
        .then(commentsText => {
            const comments = JSON.parse(commentsText);
            let commentsHTML = '';

            comments.forEach(comment => {
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerHTML = `<p class="comment-name">${comment.name} says:</p><p>${comment.comment}</p>`;

                commentsHTML += commentDiv.outerHTML;
            });

            document.getElementById('comments-section').innerHTML = commentsHTML;
        })
        .catch(error => console.error(error));
}

// Function to add a new comment to the txt file and comments section
function addComment() {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    if (name && comment) {
        const commentJSON = {
            name,
            comment
        };

        // Create a new comment string
        const newComment = `${JSON.stringify(commentJSON)}\n`;

        // Read the existing comments
        fetch('comments.txt')
            .then(response => response.text())
            .then(commentsText => {
                const existingComments = commentsText ? JSON.parse(commentsText) : [];

                // Update the existing comments with the new comment
                const updatedComments = existingComments.concat(commentJSON);

                // Write the updated comments to the txt file
                return fetch('comments.txt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: JSON.stringify(updatedComments)
                });
            })
            .then(() => {
                // Add the new comment to the comments section
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerHTML = `<p class="comment-name">${name} says:</p><p>${comment}</p>`;

                document.getElementById('comments-section').appendChild(commentDiv);

                // Clear the input fields
                document.getElementById('name').value = '';
                document.getElementById('comment').value = '';
            })
            .catch(error => console.error(error));
    } else {
        alert('Please fill in both fields.');
    }
}

// Load comments from the txt file when the page loads
getComments();
