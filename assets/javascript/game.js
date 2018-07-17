/**
 * Load the main menu
 */
var main = document.getElementById('main');
var game = document.getElementById('game');
var credits = document.getElementById('credits');
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
  document.getElementById('menuSong').play();
//   $('#menuSong')[0].play();
}
/**
 * Click handlers for the different menu screens
 */

document.querySelectorAll('.play')[0].addEventListener('click', function() {
  hide(menu);
  show(game);
  document.getElementById('menuSong').pause();
  document.getElementById('gameSong').play();
 
  console.log("test");

  /* startGame(); */
});

document.querySelectorAll('.credits')[0].addEventListener('click', function() {
    hide(menu);
    show(credits);
    document.getElementById('menuSong').pause();
    document.getElementById('creditsSong').play();
    console.log("test");
});

mainMenu();