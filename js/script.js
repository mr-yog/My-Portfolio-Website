// Smooth scroll + highlight active link + close hamburger menu on link click
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Remove active class from all links, then add to clicked link
    document.querySelectorAll('nav a').forEach(el => el.classList.remove('active'));
    link.classList.add('active');

    // Smooth scroll to target section
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });

    // Close the hamburger menu if open (on small screens)
    const nav = document.getElementById('navbar');
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      document.getElementById('menu-toggle').setAttribute('aria-expanded', 'false');
    }
  });
});

// Hamburger menu toggle button
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.classList.toggle('opened');
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  once: false,  // Animations happen every time on scroll
  duration: 800,
  easing: 'ease-in-out'
});
