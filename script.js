/* Fade-Up Animation */
const fadeElements = document.querySelectorAll('.fade-up');

function fadeInOnScroll() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll();

/* Mobile Menu */
const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });
}
