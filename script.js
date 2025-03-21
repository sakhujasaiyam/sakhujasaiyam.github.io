document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    const scrollToTopBtn = document.createElement('button');

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Navigation scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }

        // Show/hide scroll to top button
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
        scrollToTopBtn.style.display = 'none'; 
    }
})
