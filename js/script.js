// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We\'ll get back to you soon. 🎂');
        this.reset();
    });
}

// CTA button handler
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe menu items and features
document.querySelectorAll('.menu-item, .feature').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Scroll Indicator Button
const scrollIndicator = document.getElementById('scrollIndicator');
let lastScrollTop = 0;
const scrollThreshold = 100; // Show button after scrolling 100px

function updateScrollIndicator() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const hasScrollableContent = documentHeight > windowHeight;
    
    // Show button if there's scrollable content
    if (hasScrollableContent) {
        scrollIndicator.classList.add('visible');
    } else {
        scrollIndicator.classList.remove('visible');
    }
    
    // Change arrow direction based on scroll position
    // If scrolled significantly, show up arrow; otherwise show down arrow
    if (scrollTop > scrollThreshold) {
        scrollIndicator.classList.add('scrolled');
    } else {
        scrollIndicator.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
}

// Scroll behavior when button is clicked
scrollIndicator.addEventListener('click', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > scrollThreshold) {
        // Scroll to top if already scrolled down
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // Scroll down to next section if at top
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            const heroHeight = heroSection.offsetHeight;
            window.scrollTo({
                top: heroHeight,
                behavior: 'smooth'
            });
        }
    }
});

// Update on scroll
window.addEventListener('scroll', updateScrollIndicator);

// Initial check
updateScrollIndicator();


