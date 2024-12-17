// Get the popup and its content
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');

// Function to show the popup
function showPopup() {
  popup.classList.add('show');
}

// Function to hide the popup
function hidePopup() {
  popup.classList.remove('show');
}

// Close the popup if the user clicks outside the popup content
popup.addEventListener('click', function (event) {
  // Check if the click is outside the popup content
  if (event.target === popup) {
    hidePopup();
    // Show the popup again after 7 seconds when the user clicks away
    setTimeout(showPopup, 7000); // Show popup after 7 seconds
  }
});

// Example: Show the popup after a delay for demonstration
setTimeout(showPopup, 6000); // Shows the popup after 6 seconds for demonstration purposes

// Event listener for detecting clicks/taps outside the popup
document.addEventListener('click', function (event) {
  if (!popup.contains(event.target)) { // If the click is outside the popup
    hidePopup();
    // Show the popup again after 7 seconds
    setTimeout(showPopup, 7000); // Shows the popup again after 7 seconds
  }
});
