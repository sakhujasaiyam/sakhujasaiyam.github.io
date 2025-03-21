document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    let delay = 0.3; // Increased delay for smoother animation

    sections.forEach(function (section, index) {
        setTimeout(function () {
            section.classList.add('show');

            // Animate elements within the section
            const sectionElements = section.querySelectorAll('h2, p, .experience-item, .project-item, ul');
            sectionElements.forEach((element, elementIndex) => {
                element.style.opacity = 0;
                element.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    element.style.opacity = 1;
                    element.style.transform = 'translateY(0)';
                    element.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
                }, 100 * elementIndex); // Staggered animation within section
            });

        }, delay * 1000 * (index + 1));
    });
});
