// Scroll animation for snapshot cards
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all snapshot cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.snapshot-card');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
    });
});

// Smooth scroll behavior
document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    document.querySelector('.snapshot-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
});