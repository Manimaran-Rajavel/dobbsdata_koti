$(document).ready(function(){

    $(".contact-cont").click(function(){
        $(".contact-popup-cont").show();
    });

    $(".contact-close-btn").click(function(){
        $(".contact-popup-cont").hide();
    });


    const container = document.querySelector('.testimonial-right');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let cardWidth = document.querySelector('.testimonial-card').offsetWidth + 16; // Card width + gap

    nextBtn.addEventListener('click', () => {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });

    // Update card width on resize
    window.addEventListener('resize', () => {
        cardWidth = document.querySelector('.testimonial-card').offsetWidth + 16;
    });


    const elements = document.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // run once
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));

});