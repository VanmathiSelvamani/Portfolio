const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

// Toggle navigation links on burger click
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Close the navigation when clicking outside of it
document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !burger.contains(event.target)) {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
    }
});


