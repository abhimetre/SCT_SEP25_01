// Scroll effect for navbar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Toggle scrolled class on navbar
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    scrollToTopBtn.style.display = 'block';
  } else {
    navbar.classList.remove('scrolled');
    scrollToTopBtn.style.display = 'none';
  }

  // Highlight active section in nav
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Mobile menu toggle
document.getElementById('mobile-menu').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('show');
});

// Scroll to top button
document.getElementById('scrollToTopBtn').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
