/* =========================== TOGGLE ICON NAVBAR ========================= */
let menuIcon = document.querySelector('#Menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/* =========================== SCROLL SECTION ACTIVE LINK ========================= */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* =========================== STICKY NAVBAR ========================= */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* =========================== REMOVE TOGGLE ICON NAVBAR ========================= */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* =========================== SCROLL REVEAL EFFECT ========================= */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content img, .home-body1 img, .home-body2 img, .portofolio-box img', { origin: 'left' });
ScrollReveal().reveal('.slide-text, .teks1, .teks2, .portofolio-layer, .contact-teks', { origin: 'right' });
ScrollReveal().reveal('.home-content, .contactus, .informasi', { origin: 'top' });
ScrollReveal().reveal('.footer, .social-media', { origin: 'bottom' });
