// Toggle class active
const NavbarNav = document.querySelector('.Navbar-nav');
// Ketika Hamburger menu di klik 
document.querySelector('#Hamburger-menu').onclick = () => {
    NavbarNav.classList.toggle('active');
}
// Menghilangkan sidebar ketika klik di luar side Bar
const Hamburger = document.querySelector("#Hamburger-menu");

document.addEventListener("click", function (e) {
    if (!Hamburger.contains(e.target) && !NavbarNav.contains(e.target)) {
        NavbarNav.classList.remove("active");
    }
});
// GSAP ANIMATION
gsap.registerPlugin(TextPlugin)
gsap.from('.Navbar', { duration: 1.5, y: '-100', opacity: 0, ease: 'bounce' });
gsap.to('.lead', { duration: 5, text: "Buka pintu gerbang menuju Karier digital", ease: "none", });
gsap.from('.cta', { duration: 1.3, x: -100, opacity: 0, delay: 0.5 });