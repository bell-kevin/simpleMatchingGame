# Symbol Match Game
In this challenging activity, you'll be using the following concepts:

manipulating the DOM
setting DOM element attributes
handling events with addEventListener
Required Features
(5 points) Use the following markup - EVERYTHING ON ONE PAGE ONLY

Start with boilerplate HTML to specify a head and body… and load your own external JavaScript file
You may only edit this HTML content to add a linked style sheet or an event listener to the button.  Generate everything else through JavaScript.
Do not use any JavaScript libraries (like JQuery.  Stick with plain JS).
<h1>Match Game</h1>
<div id="game">
    <div id="startForm">
        I Want <input type="number" id="numSymbols" min="1" max="6"> Symbols.
        <button id='startButton'>Play Now</button>
    </div>
</div>
<script src="javascript/game.js"></script>
(5 points) Setup your JavaScript accordingly

All of your JavaScript should go in an external file (game.js)
All of your JavaScript, with the exception of adding an event listener for the first click, should be within functions (global variables can be used to keep track of the matches/wins and number of card flips).
 

(10 points) Start with a form that allows the user to pick the number of symbols to be used

Add an event listener to listen for clicks on the startButton
When the "Play Now" button is pressed, the event listener should:
Determine the value of the input field (you can use whatever method you like to retrieve this value)
The number of symbols should have a max value of 8 (though no error will show up, the game will just start with the max number of symbols if the input is over 8)
The symbols can be any character set you'd like (I used !@#$%^&*)
The startForm division should be removed (or hidden if you're comfortable manipulating style sheets)
The game board should be displayed
 

(10 points) Generate a game board

Based on the number submitted, generate a game board
The number of cards should be equal to 2 x the number of symbols (you'll need matching pairs, of course!)
The cards should be arranged as a square if possible (for example, 8 symbols means 16 cards, which means a 4 x 4 grid)
If they cannot be a square (there aren't an equal number of columns and rows), arrange them in any way you like
Regardless of the number of cards, the arrangement must be in a grid. Consider using:
display: inline-block;
a table
floated elements
(10 points) Assign a random symbol to each card

Find a way to assign a symbol from the set of available symbols to each card
The symbol assignment should be randomized!
The symbol should not appear in the user interface at the beginning of the game
However, it does not matter if the symbol is viewable in the source code
Some potential solutions for associating a symbol with a card may include:
An object that serves as a lookup table
Setting the value as a custom attribute 
Perhaps creating an object model that drives your game
Or… any other scheme that you can come up with
 

(5 points) Allow the user to click on cards

Assign an event listener to each card
When a card is clicked show the card's symbol
Either add a text node to the card
Or use CSS
If you're using CSS, only manipulate the classes, don't assign styles directly
Some options for toggling classes include:
classListLinks to an external site.
setAttributeLinks to an external site.
Do not allow more than two flipped cards at once
 

(5 points) Handle two consecutive clicks / two flipped cards

If there are two cards flipped after two clicks
If they don't match, flip them back so that the symbols don't show
If they do match, leave them around so that the symbols remain revealed
If there's only one card flipped, allow another card to be flipped
Again there are matches that are already flipped, don't unflip them
 

(5 points) Keep track of the number of flip pairs

Create an element that shows you the number of guesses
Add a guess after every two cards are flipped
(5 points) Determine when someone wins

If all of the revealed cards are matches, end the game
Clear the board and show a thank you message
Add a play again button


![p](https://github.com/bell-kevin/simpleMatchingGame/blob/main/Capture.PNG)

== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
