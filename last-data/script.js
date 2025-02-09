// Main JavaScript File
// Author: Replit User
// Description: Handles form submission and interactions

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Get form data
    const email = this.querySelector('input[type="email"]').value;
    
    // Simple validation
    if (email) {
        console.log('Form submitted:', email);
        // Here you would typically send the data to a server
    }
});

// Scroll handling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Smooth scroll to sections
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
