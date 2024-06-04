document.addEventListener('DOMContentLoaded', (event) => {
  const emailInput = document.getElementById('Write your e-mail...');
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
      if (!validateEmail(emailInput.value)) {
          event.preventDefault();
          alert('Please enter a valid email address.');
          emailInput.focus();
      }
  });

  function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(String(email).toLowerCase());
  }
});