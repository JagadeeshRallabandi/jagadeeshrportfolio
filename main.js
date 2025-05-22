document.addEventListener('DOMContentLoaded', () => {
  // Typed.js
  var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "AI Engineer", "Java Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
  });
 
  // Navbar Toggle
  const toggleBtn = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.querySelectorAll('.navbar a');

  toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-menu');
    menuIcon.classList.toggle('bx-x');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      menuIcon.classList.add('bx-menu');
      menuIcon.classList.remove('bx-x');
    });
  });
});
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xjkwzqnp", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      document.getElementById('status').innerText = "Message sent successfully!";
      form.reset();
    } else {
      document.getElementById('status').innerText = "Something went wrong. Try again.";
    }
  } catch (error) {
    document.getElementById('status').innerText = "Error: " + error.message;
  }
});