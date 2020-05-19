//check for keyboard input in Browser window
document.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
  toggleClasslist(key);
});

//remove "playing" css rule
const toggleClasslist = (key) => {
  setTimeout(() => {
    key.classList.remove("playing");
  }, 80);
};
