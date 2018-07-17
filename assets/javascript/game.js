
(function () {
    'use strict';
  
    const URL = 'assets/music/OttoHalmén-SylvanWaltz.mp3';
      
    const context = new AudioContext();
    const playButton = document.querySelector('#play');
      
    let yodelBuffer;
  
    window.fetch(URL)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        playButton.disabled = true;
        yodelBuffer = audioBuffer;
      });
      
      playButton.onclick = () => play(yodelBuffer);
  
    function play(audioBuffer) {
      const source = context.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(context.destination);
      source.start();
    }
  }());

/**
 * Load the main menu
 */
var main = document.getElementById('main');
/**
 * Hide element
 */
function hide(el) {
  el.style.display = 'none';
  
}
/**
 * Show element
 */
function show(el) {
  el.style.display = 'block';
} 
/**
 * Show the main menu after loading all assets
 */
function mainMenu() {
  show(main);
//   $('#menuSong')[0].play();
}
/**
 * Click handlers for the different menu screens
 */

document.querySelectorAll('.play')[0].addEventListener('click', function() {
  hide(menu);
  document.getElementById('menuSong').pause();
  
  console.log("test");

  /* startGame(); */
});

mainMenu();