// Smooth Scrolling Effect
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Fade-in animation when scrolling
const fadeElements = document.querySelectorAll('.fade-in');

function handleScroll() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll();  // Run on load to check if elements are already visible
