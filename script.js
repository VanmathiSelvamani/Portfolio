// Select the burger menu and navigation links
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

// Toggle navigation menu and burger styles on click
burger.addEventListener('click', () => {
    nav.classList.toggle('active');    // Toggle navigation visibility
    burger.classList.toggle('toggle'); // Add/remove toggle style for burger
});

// Close the menu when a navigation link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('active');  // Close the menu
        burger.classList.remove('toggle'); // Reset burger style
    });
});


// Select the sticky arrow element
const stickyArrow = document.querySelector('.sticky-arrow');

// Detect scroll event to show/hide the arrow
window.addEventListener('scroll', () => {
    // Check if the user has scrolled down more than 100px
    if (window.scrollY > 100) {
        stickyArrow.classList.add('visible');
        stickyArrow.classList.remove('hidden');
    } else {
        stickyArrow.classList.add('hidden');
        stickyArrow.classList.remove('visible');
    }
});

// Add click event to navigate to the home section
stickyArrow.addEventListener('click', () => {
    // Smooth scroll to the home section
    document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
});









function sendemail(){

    var email=document.getElementById("email").value;
    var name=document.getElementById("name").value;
    var from_name=document.getElementById("name").value;
    var message=document.getElementById("message").value;
    
    var templateParams = {
      from_name : from_name,
          email: email,
          name: name,
      message: message
        };
    
        emailjs.send('service_1z4b6ld', 'template_8b6fcnl', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       window.alert("Sent successfully!");
       
    })
    
       
    }


