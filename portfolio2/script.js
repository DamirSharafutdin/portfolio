// Function to toggle modal visibility
function toggleModal(id) {
    const modal = document.getElementById('modal');
    const projectImg = document.querySelector('#' + id + ' img');
    modal.style.display = 'block';
    document.getElementById('project-name').innerHTML = projectImg.alt;
    document.getElementById('modal-project-img').src = projectImg.src;
    document.getElementById('project-description').innerHTML = projectImg.dataset.description;
    document.getElementById('project-code').innerHTML = projectImg.dataset.code;
    const video = document.createElement('video');
    video.src = projectImg.dataset.video;
    video.width = 800;
    video.height = 600;
    const projectVideo = document.querySelector('.modal-project-video');
    projectVideo.innerHTML = '';
    projectVideo.appendChild(video);
    const closeBtn = document.querySelector('.close');
    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };

    // Close modal when click on outside
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
};

// Add event listener to each gallery image
const galleryImages = document.querySelectorAll('.gallery-img');
galleryImages.forEach((image) => {
    image.addEventListener('click', function () {
        toggleModal(this.id);
    });
});
