document.getElementById('show-details-btn').addEventListener('click', function() {
    const details = document.getElementById('project-details');
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        this.textContent = 'Hide Details';
    } else {
        details.classList.add('hidden');
        this.textContent = 'Show Details';
    }
});