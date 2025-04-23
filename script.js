document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');

    mobileMenuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        authButtons.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link 
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                authButtons.classList.remove('active');
            }
        });
    });
});