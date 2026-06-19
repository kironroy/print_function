'use strict';

let timer; // Declare timer globally to be accessible by listeners
let interval;

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
  timer = duration;
  const display = document.querySelector('#time');

  // Clear existing interval if it's already running
  clearInterval(interval);

  interval = setInterval(function () {
    display.textContent = timer;

    if (--timer < 0) {
      clearInterval(interval);
      window.location.href = 'index.html';
    }
  }, 1000);
}

// Function to reset the timer
function resetTimer() {
  startCountdown(60); // Reset back to 60
}

window.onload = function () {
  startCountdown(60);

  // Add event listeners for activity
  window.addEventListener('mousemove', resetTimer);
  window.addEventListener('keydown', resetTimer);
};
