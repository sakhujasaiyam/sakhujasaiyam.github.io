document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    const scrollToTopBtn = document.createElement('button');
    const experienceSlider = document.querySelector('.experience-slider');
    const experienceItems = document.querySelectorAll('.experience-item');

    let currentIndex = 0;
    let slideInterval;
    const slideDuration = 3000; // Time between slides (milliseconds)

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.isIntersecting) {
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
        });

        // Experience slider functions
        function slideTo(index) {
            experienceSlider.style.transform = `translateX(${-index * 100}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % experienceItems.length;
            slideTo(currentIndex);
        }

        function startSlideInterval() {
            slideInterval = setInterval(nextSlide, slideDuration);
        }

        function stopSlideInterval() {
            clearInterval(slideInterval);
        }

        // Initialize slider and animation
        slideTo(currentIndex); // Show the first card
        startSlideInterval();

        // Hover effect
        experienceSlider.addEventListener('mouseenter', () => {
            stopSlideInterval();
            experienceItems.forEach(item => {
                item.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out'; // Re-apply transitions
            });
        });

        experienceSlider.addEventListener('mouseleave', () => {
            startSlideInterval();
            experienceItems.forEach(item => {
                item.style.transition = 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out'; // Re-apply transitions
            });
        });
    });
