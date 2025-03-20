// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll Fade-in Animation
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
handleScroll(); // Run on load

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = 'Toggle Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px 15px';
darkModeToggle.style.borderRadius = '20px';
darkModeToggle.style.background = '#222';
darkModeToggle.style.color = 'white';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.border = 'none';
darkModeToggle.style.zIndex = '1000';

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
