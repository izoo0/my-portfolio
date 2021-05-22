const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')


    burger.addEventListener('click', () => {

        //tooglr nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });
        burger.classList.toggle('toggle')
    });
}

const navActive = () => {
    const navUl = document.querySelector('.nav-links');
    const navLi = document.querySelector('.nav-item');
    navLi.forEach(el => {
        el.addEventListener('click', function() {
            navUl.querySelector('active').classList.remove('active');
            el.classList.add('active');
        });
    });

}
navSlide();
navActive();