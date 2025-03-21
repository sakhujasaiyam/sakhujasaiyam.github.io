// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    console.log("JS Loaded");

    // Ensure GSAP and ScrollTrigger are available
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        console.error("GSAP or ScrollTrigger not loaded.");
        return;
    }

    // Register GSAP ScrollTrigger Plugin
    gsap.registerPlugin(ScrollTrigger);

    // Apply fade-in animation to sections
    gsap.utils.toArray("section.fade-in").forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    console.log("GSAP animations applied successfully.");
});
