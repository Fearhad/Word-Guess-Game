var game = {
  gameState: "newGame",
  gameConsole: 0,
  start: function() {
    this.gameConsole = document.getElementById("gameConsole");
    if (gameConsole) {
      gameConsole.innerHTML = "The Game is a Foot :P!";
    }
    this.gameState = "isPlaying";   
  },
  
  processGuess: function(guess) {
     console.log(guess);
     this.gameConsole.innerHTML = "You guessed " + guess + " and that guess is wrong!";
  },
 }
 
 document.onkeyup = function(event) {
   var letter = event.key.toLowerCase();
   game.processGuess(letter);
 };
 
 if (game.gameState === "newGame") {
  game.start();
 }


 




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

document.querySelectorAll('.play')[0].addEventListener('click', function () {
  hide(menu);
  show(game);
  document.getElementById('menuSong').pause();
  document.getElementById('gameSong').play();

  console.log("test");

  /* startGame(); */
});

document.querySelectorAll('.credits')[0].addEventListener('click', function () {
  hide(menu);
  show(credits);
  document.getElementById('menuSong').pause();
  document.getElementById('creditsSong').play();
  console.log("test");

});
$(".toggle").on("click", function () {
  $(".container").toggleClass("microsoft");
});
mainMenu();

