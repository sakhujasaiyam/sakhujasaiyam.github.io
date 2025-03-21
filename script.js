// console.log("JS Loaded");
// document.addEventListener("DOMContentLoaded", function () {
//     gsap.from("nav ul li", { opacity: 0, y: -20, duration: 1, stagger: 0.2 });
//     gsap.from("header h1, header p", { opacity: 0, y: 30, duration: 1, delay: 0.5 });

//     document.querySelectorAll(".fade-in").forEach(section => {
//         gsap.from(section, {
//             scrollTrigger: {
//                 trigger: section,
//                 start: "top 80%",
//                 toggleActions: "play none none reverse"
//             },
//             opacity: 0,
//             y: 50,
//             duration: 1
//         });
//     });

//     // Fetching Medium Blog Posts
//     fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yourmediumusername')
//         .then(response => response.json())
//         .then(data => {
//             let blogs = data.items.slice(0, 3).map(blog => `<p><a href="${blog.link}" target="_blank">${blog.title}</a></p>`).join("");
//             document.querySelector("#blog").innerHTML += blogs;
//         });
// });

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

    // ✅ Removed the RSS Feed API issue temporarily
    // fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yourusername")
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error("Error fetching RSS feed:", error));
});

