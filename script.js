// Mobile menu functions
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
  
  // Smooth scrolling for navigation links and Get Started button
  document.addEventListener('DOMContentLoaded', function() {
    // Get Started button scrolling to contact section
    const getStartedBtn = document.querySelector('.hero-btns .btn-primary');
    if (getStartedBtn) {
      getStartedBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          window.scrollTo({
            top: contactSection.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    }
    
    // Add smooth scrolling to all nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        if(this.getAttribute('href').startsWith('#')) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          if(targetSection) {
            window.scrollTo({
              top: targetSection.offsetTop - 70,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  });
  
  // Active link highlight
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links ul li a');
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
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