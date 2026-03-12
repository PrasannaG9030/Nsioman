document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }


    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                faq.querySelector('.faq-answer').style.maxHeight = null;
                // Restore '+' icon for closed items
                const icon = faq.querySelector('.icon');
                if (icon) icon.textContent = '+';
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + "px";
                // Change icon to '−' for open item
                const icon = item.querySelector('.icon');
                if (icon) icon.textContent = '−';
            }
        });
    });

    // Slideshow Functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slideshow-dots .dot');

    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;

        const goToSlide = (index) => {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');

            currentSlide = (index + slides.length) % slides.length;

            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        };

        const nextSlide = () => {
            goToSlide(currentSlide + 1);
        };

        const startSlideshow = () => {
            slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        };

        const resetSlideshow = () => {
            clearInterval(slideInterval);
            startSlideshow();
        };

        // Add click events to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetSlideshow();
            });
        });

        startSlideshow();
    }

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
            navbar.style.backgroundColor = 'rgba(184, 196, 185, 0.98)'; // Scrolled Muted Sage Green
            navbar.style.padding = '12px 0'; // Keep original padding adjustment
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.backgroundColor = 'rgba(184, 196, 185, 0.85)'; // Transparent Muted Sage Green
            navbar.style.padding = '16px 0'; // Keep original padding adjustment
        }
    });
});
