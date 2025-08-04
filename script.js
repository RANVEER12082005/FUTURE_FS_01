document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  for (let i = 0; i < 100; i++) { // Adjust number for star density
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    body.appendChild(star);
  }

  // Existing section and nav link code...
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.addEventListener('mouseover', () => {
      section.style.transform = 'scale(1.05) skewX(2deg)';
      section.style.transition = 'transform 0.3s';
    });
    section.addEventListener('mouseout', () => {
      section.style.transform = 'skewX(2deg)';
    });
  });

  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get values (optional, you can use these to show summary or console log)
  const name = this.from_name.value;
  const email = this.email.value;
  const message = this.message.value;

  // You can log or use the values
  console.log("Form submitted:", { name, email, message });

  // Show confirmation message
  alert('✅ Your message was captured (not sent anywhere).');

  // Optionally reset the form
  this.reset();
});
