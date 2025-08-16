$(document).ready(function () {

    // Show popup
    $(".contact-cont").click(function () {
        $(".contact-popup-cont").show();
    });

    $(".contact-close-btn").click(function () {
        $(".contact-popup-cont").hide();
    });

    // Testimonial slider only if elements exist
    const container = document.querySelector('.testimonial-right');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const firstCard = document.querySelector('.testimonial-card');

    if (container && prevBtn && nextBtn && firstCard) {
        let cardWidth = firstCard.offsetWidth + 16; // Card width + gap

        nextBtn.addEventListener('click', () => {
            container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });

        // Update card width on resize
        window.addEventListener('resize', () => {
            cardWidth = firstCard.offsetWidth + 16;
        });
    }

    // Scroll animation
    const elements = document.querySelectorAll('.scroll-animate');

    if (elements.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // run once
                }
            });
        }, { threshold: 0.2 });

        elements.forEach(el => observer.observe(el));
    }

});
