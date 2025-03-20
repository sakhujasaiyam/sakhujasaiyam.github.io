// Smooth Scrolling with Cool Effect
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Dark Mode Toggle (Fixed)
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = '🌙 Toggle Dark Mode';
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
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Load Dark Mode Preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Parallax Effect for Sections
window.addEventListener('scroll', function () {
    document.querySelectorAll('section').forEach(section => {
        let speed = section.dataset.speed || 0.5;
        section.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
});

// Neon Glowing Cursor Effect
document.addEventListener("mousemove", function (e) {
    let cursor = document.createElement("div");
    cursor.classList.add("cursor-glow");
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
    document.body.appendChild(cursor);
    setTimeout(() => {
        cursor.remove();
    }, 300);
});
