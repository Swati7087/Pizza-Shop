// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
            .home-text2, .home-img2,
            .home-text3, .home-img3,
            .about-img, .about-text,
            .about2,.about3,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})