window.history.forward(1);

const dnb1 = document.getElementById('dnb1');

dnb1.volume = 0.2;

document.addEventListener("mousemove", () => {
    dnb1.play();
})

document.addEventListener("click", () => {
    dnb1.play();
})

// Check if the device is a mobile phone
function isMobile() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
  // Function to handle touch event
  function handleTouchStart(event) {
    // Your code to handle the touch event goes here
    dnb1.play();
  }
  
  // Add the event listener if the device is a mobile phone
  if (isMobile()) {
    document.addEventListener('touchstart', handleTouchStart);
  }