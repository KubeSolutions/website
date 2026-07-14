const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

navToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('active');
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = 'Please complete all fields before sending.';
    return;
  }

  formStatus.textContent = 'Thank you! Your request has been captured for the prototype.';
  contactForm.reset();
});
