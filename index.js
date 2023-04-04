window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[datakey="${e.keyCode}"]`);
    const key = document.querySelector(`.key[datakey="${e.keyCode}"]`);
    if(!audio) return; //stop function from running
    audio.currentTime = 0;
    audio.play();
   console.log("keeeaay");
});