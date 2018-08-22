// Game values
let min = 1,
  max = 100,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(e) {
  let guess = parseInt(guessInput.value);

  // Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // game over - win
    gameOver(true, `${winningNum} is correct! You win!`);
  } else {
    // Wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // game over - lose
      gameOver(false, `Game over, you lost. Winning number was ${winningNum}`);
    } else {
      // game continues - answer wrong
      // Change border color
      guessInput.style.borderColor = 'red';
      // Clear Input
      guessInput.value = '';
      // Incorrect guess message
      setMessage(
        `${guess} is not correct, ${guessesLeft} guesses remaining`,
        'red'
      );
    }
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;

  setMessage(msg, color);
}

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
