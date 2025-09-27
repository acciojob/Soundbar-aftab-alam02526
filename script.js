//your JS code here. If required.
// List of 7 sounds (names should match the files in 'sounds' folder)
const sounds = ['sound1', 'sound2', 'sound3', 'sound4', 'sound5', 'sound6', 'sound7'];

const container = document.getElementById('soundButtons');

sounds.forEach(sound => {
  // Create button for each sound
  const btn = document.createElement('button');
  btn.innerText = sound.charAt(0).toUpperCase() + sound.slice(1); // Capitalize

  // Play sound on click
  btn.addEventListener('click', () => {
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
  });

  container.appendChild(btn);
});
