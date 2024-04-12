// Your code here
function moveDodgerLeft() {
  const dodger = document.getElementById('dodger');
  const left = parseInt(dodger.style.left) || 0;
  const newLeft = Math.max(left - 1, 0);
  dodger.style.left = `${newLeft}px`;
}

function moveDodgerRight() {
  // Get the element with the ID 'dodger'
  const dodger = document.getElementById('dodger');

  // Get the current left position of the dodger (parse the 'left' style property as an integer, defaulting to 0 if not set)
  let currentLeft = parseInt(dodger.style.left) || 0;

  // Define the maximum position the dodger can move to (assumed window width is 360px)
  const maxPosition = 360;

  // Calculate the new left position for the dodger, ensuring it doesn't go beyond maxPosition
  const newLeft = Math.min(currentLeft + 10, maxPosition); // Move by 10px to the right

  // Update the 'left' style property of the dodger element with the newLeft value
  dodger.style.left = `${newLeft}px`;
}


