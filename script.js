document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const experienceSlider = document.querySelector('.experience-slider');
    const experienceItems = document.querySelectorAll('.experience-item');
    const sliderPagination = document.querySelector('.slider-pagination');
    const cardCount = experienceItems.length;
    const slideDuration = 5000;

    let currentIndex = 0;
    let slideInterval;
    let isHovering = false;

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
    });

    // Experience slider functions
    function slideTo(index) {
        currentIndex = index; // Update currentIndex immediately
        experienceSlider.style.transition = isHovering ? 'none' : 'transform 0.5s ease-in-out';
        experienceSlider.style.transform = `translateX(${-index * 100}%)`; // Calculate transform based on index
        updatePagination();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % cardCount;
        slideTo(currentIndex);
    }

    function startSlideInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    function stopSlideInterval() {
        clearInterval(slideInterval);
    }

    function createPagination() {
        sliderPagination.innerHTML = ''; // Clear existing dots (important for re-creation)
        for (let i = 0; i < cardCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            dot.addEventListener('click', () => {
                slideTo(i); // Slide directly to the clicked index
                startSlideInterval(); // Restart interval on dot click
            });
            sliderPagination.appendChild(dot);
        }
        updatePagination();
    }

    function updatePagination() {
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Initialize slider and animation
    createPagination(); // Create pagination first
    slideTo(currentIndex); // Then slide to the initial slide
    startSlideInterval();

    // Hover effect
    experienceSlider.addEventListener('mouseenter', () => {
        isHovering = true;
        stopSlideInterval();
    });

    experienceSlider.addEventListener('mouseleave', () => {
        isHovering = false;
        startSlideInterval();
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Contact form submission (basic example)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            console.log('Form Data:', {
                name: name,
                email: email,
                message: message
            });
            alert('Message sent successfully! (This is a simulation)');

            contactForm.reset();
        });
    }
});
