'use strict';

window.handlePrint = function () {
  console.log('Button clicked!'); // Check the console to see if this appears
  const checkboxes = document.querySelectorAll('table input[type="checkbox"]');
  const isAnyChecked = Array.from(checkboxes).some(
    checkbox => checkbox.checked,
  );

  if (isAnyChecked) {
    alert('Print successful ✅');
  } else {
    alert('Please select document(s) to print ⚠️');
  }
};

function startCountdown(duration) {
  let timer = duration;
  const display = document.querySelector('#time');

  const interval = setInterval(function () {
    display.textContent = timer;

    if (--timer < 0) {
      clearInterval(interval);
      // Optional: Redirect to index.html when time hits 0
      window.location.href = 'index.html';
    }
  }, 1000);
}

// Start the countdown with 60 seconds
window.onload = function () {
  startCountdown(60);
};