var wordList = [
  ['Ancient Land of Ys', 'an action role-playing video game series developed by Nihon Falcom in 1987'],
  ['The Bards Tale', 'a fantasy role-playing video game designed and programmed by Michael Cranford, produced by Interplay Productions in 1985 and distributed by Electronic Arts.'],
  ['BattleTech', 'a turn-based adventure/role-playing video game released in 1988 by Westwood Associates and based on the franchise of the same name'],
  ['Curse of the Azure Bonds', 'a role-playing video game developed and published by Strategic Simulations, Inc (SSI) in 1989. It is the second in a four-part series of Forgotten Realms Advanced Dungeons & Dragons Gold Box adventure computer games, continuing the events after the first part, Pool of Radiance.'],
  ['Dungeon Master', 'a realtime role-playing video game featuring a pseudo-3D first-person perspective. It was developed and published by FTL Games for the Atari ST in 1987,[5] almost identical Amiga and PC (DOS) ports following in 1988 and 1989.'],
  ['Pool of Radiance', 'a role-playing video game developed and published by Strategic Simulations, Inc (SSI) in 1988. It was the first adaptation of TSRs Advanced Dungeons & Dragons (AD&D) fantasy role-playing game for home computers, becoming the first episode in a four-part series of D&D computer adventure games.'],
  ['Hack', 'a 1982 roguelike video game that introduced shops as gameplay elements and expanded available monsters, items, and spells.'],
  ['Might and Magic', 'a series of role-playing video games from New World Computing'],
  ['Ultima', 'a series of open world fantasy role-playing video games from Origin Systems, Inc'],
  ['Wizardry', 'a series of open world fantasy role-playing video games from Sir-Tech'],
  ['Phantasie', "a fantasy role-playing video game series designed by Winston Douglas Wood and published by Strategic Simulations in 1985."],
  ['The Magic Candle', 'a role-playing video game designed by Ali Atabek and developed and published by Mindcraft in 1989.'],
  ['Rogue', 'a dungeon crawling video game by Michael Toy and Glenn Wichman and was originally developed around 1980 for Unix-based mainframe systems as a freely-distributed executable'],
  ["Wasteland", 'a science fiction open world role-playing video game developed by Interplay and published by Electronic Arts in 1988'],
  ['Times of Lore', 'a 1988 action role-playing game that was developed and published by Origin Systems for several platforms, including PC, Commodore 64/128, ZX Spectrum, Amstrad, Atari ST, Apple II, NES, and Amiga.'],
  ['Questron', 'a fantasy role-playing video game series produced by Strategic Simulations, Inc.'],
  ['Legacy of the Ancients', 'a fantasy role-playing video game published by Electronic Arts in 1987 from the creators of Questron'],
  ['Ultima Underworld', 'a first-person role-playing video game (RPG) developed by Blue Sky Productions (later Looking Glass Studios) and published by Origin Systems.'],
  ['System Shock', 'a 1994 first-person action-adventure video game developed by Looking Glass Technologies and published by Origin Systems'],
  ['Temple of Asphai', ' a dungeon crawl role-playing video game developed and published by Automated Simulations (later renamed to Epyx) in 1979']
]

var menu = document.getElementById('menu');
var gameScreen = document.getElementById('gameScreen');
var credits = document.getElementById('credits');

var menuSong = document.getElementById("menuSong");
var gameSong = document.getElementById("gameSong");
var creditSong = document.getElementById("creditSong");

var hideWord = document.getElementById("hideWord");
var hint = document.getElementById("hint");
var scoreBoard = document.getElementById("scoreBoard");
var winCount = document.getElementById("winCount");
var lossCount = document.getElementById("lossCount")
var guessesLeft = document.getElementById("guessesLeft")
var currentGuesses = document.getElementById("currentGuesses");

var displayScreens = [menu, gameScreen, credits];
var getHiddenWord;



var game = {

    wins: 0,
    losses: 0,
    remainingGuesses: 9,
    guessArray: [],
    guessString: "Guesses So Far: None",
    showScreen: function (activeDisplay) {
      displayScreens.forEach(function (currentDisplay) {
        if (currentDisplay == activeDisplay) {
          currentDisplay.style.display = "block";
        } else {
          currentDisplay.style.display = "none";
        }
      })
    },

    gameState: "newGame",
    gameConsole: 0,
    start: function () {
      this.gameConsole = document.getElementById("gameConsole");
      gameConsole.innerHTML = "Good Luck on your Adventure!";
      
      this.gameState = "isPlaying";
    },

    processGuess: function (guess) {
      if (event.keyCode >= 65 && event.keyCode <= 90) {

        if (this.guessArray.indexOf(guess) > -1) {
          this.gameConsole.innerHTML = "You already guessed this letter! Lord British places his face in his palm. Please try again!";
        } else {
          if (getHiddenWord[0].toLowerCase().includes(guess)) {
            this.gameConsole.innerHTML = "You are one step closer to saving the day! " + guess + " was correct!";
            this.replaceLetters(guess);
            hideWord.innerHTML = getHiddenWord[2];
          } else {
            this.gameConsole.innerHTML = "A fire trap goes off and incinerates you for incorrectly guessing that letter!"
            this.remainingGuesses--;
            guessesLeft.innerHTML = "Lives: " + this.remainingGuesses
          }
          this.guessArray.push(guess);
        }
      } else {
        this.gameConsole.innerHTML = "Invalid selection. Please pick a letter or be eaten by a Grue!";
      }
      this.guessString = this.guessArray.toString();
      currentGuesses.innerHTML = "<p> Guesses So Far : " + this.guessString + "</p>";
      if (!getHiddenWord[2].toLowerCase().includes("_")) {
        this.gameUI.winCondition();
      }
    },

    replaceLetters: function (guess) {
      var myString = getHiddenWord[2]; 

      function replaceAt(string, index, replace) {
        return string.substring(0, index) + replace + string.substring(index + 1);
      }
      for (var i = 0; i < myString.length; i++) {
        if (getHiddenWord[0].charAt(i).toLowerCase() == guess) {
          myString = replaceAt(myString, i, guess)   
          getHiddenWord[2] = myString;
        } 
  }
},

  gameUI: {

    findWord: function () {
      var wordListArray = wordList[Math.floor(wordList.length * Math.random())];
      return wordListArray.concat(this.hiddenWord(wordListArray[0]));
    },

    hiddenWord: function (newWord) {
      var hiddenString = "";
      for (var j = 0; j < newWord.length; j++) {
        if (newWord[j] == ' ') {
          hiddenString = hiddenString + " ";
        } else {
          hiddenString = hiddenString + "_";
        }
      }
      return hiddenString;
    },

    initGame: function () {
      getHiddenWord = this.findWord();
      game.showScreen(gameScreen);
      hideWord.innerHTML = getHiddenWord[2];
      hint.innerHTML = "<h2>Hint</h2><hr><p>" + getHiddenWord[1] + "</p>";
      menuSong.pause();
      gameSong.play();
    },

    updateScoreBoard: function (result) {
      if (result == "win") {
        this.wins++;
        winCount.innerHTML = "Wins: +" + this.wins;
      } else {
        this.losses++;
        lossCount.innerHTML = "Wins: +" + this.losses;
      }
    },

    winCondition: function () {
      gameConsole.innerHTML = "You win! The Classic RPG was " + getHiddenWord[0];
      this.gameUI.updateScoreBoard("win");
    },

    lossCondition: function () {
      gameConsole.innerHTML = "You Lost! You have met your fate at the Gallows Pole! The Classic RPG was " + getHiddenWord[0];
      this.gameUI.updateScoreBoard("loss");
    }

  }


}

document.onkeyup = function (event) {
  var letter = event.key;
  if (game.gameState === "newGame") {
    game.start();
  } else {
    game.processGuess(letter);
  }
};



function mainMenu() {
  game.showScreen(menu);
  document.getElementById('menuSong').play();
  //   $('#menuSong')[0].play();
}
/**
 * Click handlers for the different menu screens
 */

document.querySelectorAll('.play')[0].addEventListener('click', function () {
  game.showScreen(gameScreen);
  game.gameUI.initGame();
  document.getElementById('menuSong').pause();
  document.getElementById('gameSong').play();

  /* startGame(); */
});

document.querySelectorAll('.credits')[0].addEventListener('click', function () {
  game.showScreen(credits)
  document.getElementById('menuSong').pause();
  document.getElementById('creditsSong').play();

});
$(".toggle").on("click", function () {
  $(".container").toggleClass("microsoft");
});

mainMenu();