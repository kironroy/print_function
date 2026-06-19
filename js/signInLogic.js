'use strict';

const form = document.getElementById('printForm');
const cardInput = document.getElementById('library-card');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');

function validateForm() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const hasCard = cardInput.value.trim().length > 0;
  const hasValidEmail = emailPattern.test(emailInput.value.trim());

  submitBtn.disabled = !(hasCard || hasValidEmail);
}

cardInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);

// Redirect to your specific page upon successful click
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevents the form from sending to /submit-print-request
  window.location.href = 'print_screen.html'; // Redirects user
});
