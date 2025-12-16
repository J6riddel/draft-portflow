// Smooth scroll behavior
document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    document.querySelector('.transition-wrapper').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Intersection Observer for panel animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe white panel
document.addEventListener('DOMContentLoaded', () => {
    const panel = document.querySelector('.white-panel');
    if (panel) {
        observer.observe(panel);
    }
});