// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
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
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    // ✅ RSS Feed API temporarily disabled due to 500 Internal Server Error
    // fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yourusername")
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error("Error fetching RSS feed:", error));
});
