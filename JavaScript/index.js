// Get the popup and its content
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');
const video = document.querySelector('.popup video');  // Get the video element

// Function to show the popup and play the video
function showPopup() {
  popup.classList.add('show');
  
  // Ensure the video plays once the popup is fully visible
  setTimeout(() => {
    if (video.paused) {
      video.play();
    }
  }, 100);  // Slight delay to ensure the popup is fully shown
}

// Function to hide the popup
function hidePopup() {
  popup.classList.remove('show');
  
  // Pause the video when the popup is hidden
  if (!video.paused) {
    video.pause();
  }
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
  if (!popupContent.contains(event.target) && !popup.contains(event.target)) { 
    // If the click is outside the popup and its content
    hidePopup();
    // Show the popup again after 12 seconds
    setTimeout(showPopup, 12000); // Shows the popup again after 12 seconds
  }
});
