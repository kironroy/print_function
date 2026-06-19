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