function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const cardWidth = document.querySelector('.product-card').offsetWidth;
    const gap = 30; // Adjust based on the gap between cards
    const moveAmount = cardWidth + gap;

    track.scrollBy({ left: direction * moveAmount, behavior: 'smooth' });
}

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});