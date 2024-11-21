// Carousel Functionality
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    if (carouselContainer) {
        let scrollAmount = 0;

        nextBtn.addEventListener('click', () => {
            carouselContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            carouselContainer.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }
});

// Contact Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
