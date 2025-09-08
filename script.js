document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Simulate form submission (no backend)
  const status = document.getElementById('form-status');
  status.textContent = '✅ Message sent successfully!';
  status.style.color = 'green';

  // Reset form
  this.reset();

  // Clear message after 3 seconds
  setTimeout(() => {
    status.textContent = '';
  }, 3000);
});
