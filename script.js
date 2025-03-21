document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    let delay = 0.2; // Initial delay in seconds

    sections.forEach(function(section, index) {
        setTimeout(function() {
            section.classList.add('show');
        }, delay * 1000 * (index + 1)); // Delay each section
    });
});
