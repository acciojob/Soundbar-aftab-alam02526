//your JS code here. If required.
let currentAudio = null;

// Handle playing sound
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const soundFile = button.getAttribute('data-sound');

    // Stop any currently playing sound before playing a new one
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Play the new sound
    currentAudio = new Audio(`sounds/${soundFile}`);
    currentAudio.play();
  });
});

// Handle stop button
document.querySelector('.stop').addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
});
});
