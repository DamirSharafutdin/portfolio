const filterBtn = document.getElementById('filter-btn');
const filters = document.querySelector('.filter');
const homeSection = document.getElementById('home');

filterBtn.addEventListener('click', () => {
    filters.classList.toggle('active');
});

const filterOptions = {
    'all': () => homeSection.style.display = 'block',
    'web': () => homeSection.style.display = 'none',
};

for (let option in filterOptions) {
    const filterButton = document.createElement('button');
    filterButton.textContent = option.toUpperCase();
    filterButton.addEventListener('click', () => {
        homeSection.style.display = 'block';
        const projects = document.querySelectorAll('#home .project-card');
        projects.forEach(card => {
            if (option !== 'all') {
                card.style.display = option === card.dataset.category ? 'block' : 'none';
            } else {
                card.style.display = 'block';
            }
        });
        filters.classList.toggle('active');
    });
    filters.appendChild(filterButton);
}

document.addEventListener('DOMContentLoaded', () => {
    homeSection.style.display = 'block';
});