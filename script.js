function showMenu() {
    document.getElementById('navLinks').classList.add('active');
}

function hideMenu() {
    document.getElementById('navLinks').classList.remove('active');
}

// Sticky navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.querySelector('.hero-btns .btn-primary');
    
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Find the contact section
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                // Scroll to it
                window.scrollTo({
                    top: contactSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Active link highlight
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links ul li a');
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});