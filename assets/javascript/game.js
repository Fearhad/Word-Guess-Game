var audio = new Audio();
audio.src = 'assets/music/OttoHalmén-SylvanWaltz.mp3';
audio.controls = true;
audio.autoplay = true;
document.body.appendChild(audio);

var context = new AudioContext();
var analyser = context.createAnalyser();


window.addEventListener('load', function(e) {
  // Our <audio> element will be the audio source.
  var source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);


}, false);

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