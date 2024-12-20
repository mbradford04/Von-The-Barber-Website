// Get the popup and its content
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');
const video = document.querySelector('.popup video');  // Get the video element

function showPopup() {
  popup.classList.add('show');
  setTimeout(() => {
    if (video.paused) {
      video.play();
    }
  }, 100); 
}

// Function to hide the popup
function hidePopup() {
  popup.classList.remove('show');
  if (!video.paused) {
    video.pause();
  }
}

// Close the popup if the user clicks outside the popup content
popup.addEventListener('click', function (event) {
  // Check if the click is outside the popup content
  if (event.target === popup) {
    hidePopup();
    setTimeout(showPopup, 7000); 
  }
});

setTimeout(showPopup, 6000); 

// Event listener for detecting clicks/taps outside the popup
document.addEventListener('click', function (event) {
  if (!popupContent.contains(event.target) && !popup.contains(event.target)) {
    hidePopup();
    setTimeout(showPopup, 12000); 
  }
});
