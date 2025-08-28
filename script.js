// ================================
// Part 1: Variables & Conditionals
// ================================

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded, JS is running!");

    // Example variable & conditional
    let visitorName = prompt("Welcome! What's your name?");
    if(visitorName) {
        console.log(`Hello, ${visitorName}! Welcome to Canvas Clique Designs.`);
    } else {
        console.log("Hello! Welcome to Canvas Clique Designs.");
    }

    // ============================
    // Part 2: Custom Functions
    // ============================

    // Function 1: Update hero greeting
    function updateHeroGreeting(name) {
        const heroH3 = document.querySelector('.hero-text h3');
        if(heroH3) {
            heroH3.textContent = name ? `Hello, ${name}! I am a Graphic Designer and Software Developer` : "I am a Graphic Designer and Software Developer";
        }
    }
    updateHeroGreeting(visitorName);

    // Function 2: Toggle project descriptions
    function setupProjectToggles() {
        const toggles = document.querySelectorAll('.project-card input.toggle');
        toggles.forEach(toggle => {
            toggle.addEventListener('change', (e) => {
                const projectCard = toggle.closest('.project-card');
                const moreText = projectCard.querySelector('.more-text');
                const label = projectCard.querySelector('.read-more-btn');
                if(toggle.checked) {
                    moreText.style.display = 'inline';
                    label.textContent = "Show Less";
                } else {
                    moreText.style.display = 'none';
                    label.textContent = "Learn More";
                }
            });
        });
    }
    setupProjectToggles();

    // ============================
    // Part 3: Loops
    // ============================

    // Loop 1: Highlight all service cards
    const serviceCards = document.querySelectorAll('.service-card');
    for(let i = 0; i < serviceCards.length; i++) {
        serviceCards[i].style.border = "2px solid #0048A7"; // example visual
    }

    // Loop 2: Add target="_blank" to all social links
    const socialLinks = document.querySelectorAll('.social-icons a');
    socialLinks.forEach(link => {
        link.setAttribute('target', '_blank');
    });

    // ============================
    // Part 4: DOM Interactions
    // ============================

    // Form validation
    const form = document.querySelector('.contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // prevent actual submission
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if(name && email && message) {
                alert(`Thank you ${name}! Your message has been received.`);
                form.reset();
            } else {
                alert("Please fill in all fields before submitting.");
            }
        });
    }

    // Highlight navbar links on click
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Bonus: Animate hero image on load
    const heroImage = document.querySelector('.hero-image img');
    if(heroImage) {
        heroImage.style.transition = "transform 1s ease";
        heroImage.style.transform = "scale(0.95)";
        setTimeout(() => {
            heroImage.style.transform = "scale(1)";
        }, 500);
    }

}); // DOMContentLoaded end
