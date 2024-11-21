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

// maps
// Initialize Google Maps for Maps Page
function initMap() {
    const storeLocation = { lat: -6.2088, lng: 106.8456 }; // Contoh lokasi di Jakarta
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: storeLocation,
        styles: [
            {
                featureType: 'all',
                stylers: [{ saturation: -80 }]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{ hue: '#00ffee' }, { saturation: 50 }]
            },
            {
                featureType: 'poi.business',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }
        ]
    });

    const marker = new google.maps.Marker({
        position: storeLocation,
        map: map,
        title: 'Streetwear Store'
    });

    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="text-align: center;">
                <h3>Streetwear Store</h3>
                <p>Your go-to destination for urban fashion!</p>
                <p><strong>Address:</strong> Jl. Streetwear No.123, Jakarta</p>
            </div>
        `
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });

    infoWindow.open(map, marker); // Automatically show info on load
}
