document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const numSymbolsInput = document.getElementById('numSymbols');
    const gameBoard = document.getElementById('gameBoard');
    const guessesDisplay = document.getElementById('guesses');
    const playAgainButton = document.getElementById('playAgain');
    const messageDisplay = document.getElementById('message');

    let symbols = '!@#$%^&*'.split('');
    let numSymbols = 0;
    let flippedCards = [];
    let matchedCards = [];
    let numGuesses = 0;

    startButton.addEventListener('click', function() {
        numSymbols = parseInt(numSymbolsInput.value);
        if (numSymbols < 1 || numSymbols > 8) {
            numSymbols = 8; // Default to 8 symbols if input is invalid
        }

        startGame();
    });

    function startGame() {
        const totalCards = numSymbols * 2;
        const shuffledSymbols = shuffleArray(symbols.slice(0, numSymbols).concat(symbols.slice(0, numSymbols)));

        for (let i = 0; i < totalCards; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.symbol = shuffledSymbols[i];
            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
        }

        gameBoard.classList.remove('hidden');
        startForm.classList.add('hidden');
    }

    function flipCard() {
        if (flippedCards.length < 2 && !flippedCards.includes(this) && !matchedCards.includes(this)) {
            this.textContent = this.dataset.symbol; // Show symbol on card
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                numGuesses++;
                guessesDisplay.textContent = `Guesses: ${numGuesses}`;
                setTimeout(checkMatch, 1000); // Check for a match after 1 second
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;
        if (card1.dataset.symbol === card2.dataset.symbol) {
            matchedCards.push(card1, card2);
            if (matchedCards.length === numSymbols * 2) {
                endGame();
            }
        } else {
            card1.textContent = '';
            card2.textContent = '';
        }
        flippedCards = [];
    }

    function endGame() {
        messageDisplay.textContent = 'Congratulations! You won!';
        messageDisplay.classList.remove('hidden');
        playAgainButton.classList.remove('hidden');
        playAgainButton.addEventListener('click', resetGame);
    }

    function resetGame() {
        gameBoard.innerHTML = '';
        flippedCards = [];
        matchedCards = [];
        numGuesses = 0;
        guessesDisplay.textContent = '';
        messageDisplay.classList.add('hidden');
        playAgainButton.classList.add('hidden');
        startForm.classList.remove('hidden');
    }

    // Function to shuffle array elements
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
