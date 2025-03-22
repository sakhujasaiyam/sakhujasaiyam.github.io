document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    const scrollToTopBtn = document.getElementById('scroll-to-top'); // Get the button by ID
    const experienceSlider = document.querySelector('.experience-slider');
    const experienceItems = document.querySelectorAll('.experience-item');
    const cardCount = experienceItems.length;
    const slideDuration = 5000; // Time each slide stays (milliseconds)

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
        experienceSlider.style.transition = isHovering ? 'none' : 'transform 0.5s ease-in-out';
        experienceSlider.style.transform = `translateX(${-index * 100 / cardCount}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % cardCount;
        slideTo(currentIndex);
        startSlideInterval(); // Restart the interval after a slide
    }

    function startSlideInterval() {
        clearInterval(slideInterval); // Clear any existing interval
        slideInterval = setTimeout(nextSlide, slideDuration);
    }

    function stopSlideInterval() {
        clearTimeout(slideInterval);
    }

    // Initialize slider and animation
    slideTo(currentIndex);
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
            behavior: 'smooth' // For smooth scrolling
        });
    });

    // Contact form submission (basic example)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the default form submission

            // Basic form validation (you can add more robust validation)
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            // You would typically send this data to a server using fetch or AJAX
            // For this example, we'll just log it to the console
            console.log('Form Data:', { name: name, email: email, message: message });
            alert('Message sent successfully! (This is a simulation)');

            // Clear the form
            contactForm.reset();
        });
    }
});
