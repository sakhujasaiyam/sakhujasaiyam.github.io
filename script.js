// 🌙 Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = '🌙 Toggle Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px 15px';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.border = 'none';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.background = '#007bff';
darkModeToggle.style.color = '#fff';

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.innerText = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// 🏆 Hover Effect for Projects
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'translateY(-10px) scale(1.02)';
    });

    project.addEventListener('mouseleave', () => {
        project.style.transform = 'translateY(0) scale(1)';
    });
});
