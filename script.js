'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 23;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

    //Again button
document.querySelector('.again').addEventListener('click', function() {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Start guessing';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor ='#222';
        document.querySelector('.number').style.width = '15rem'
        document.querySelector('.number').textContent = '?';
});


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess){
        // document.querySelector('.message').textContent = 'No Number!';
            displayMessage('No Number!')


    // When player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        
        document.querySelector('body').style.backgroundColor ='#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        
        // When guess is to high
    }else if(guess !== secretNumber) {
        if (score > 1) 
        {
        // guess > secretNumber ? displayMessage('Too high!') : displayMessage('Too Low!');
        displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!')
        score--
        document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'You LOST the game!';
            displayMessage('You LOST the game!')
            document.querySelector('.score').textContent = 0;
        }

    // } else if (guess > secretNumber) {
    //     if (score > 1) {document.querySelector('.message').textContent = 'Too high!';
    //     score--
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You LOST the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     //When guess is to low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {document.querySelector('.message').textContent = 'Too low!';
    //     score--
    //     document.querySelector('.score').textContent = score;
    // } else {
    //     document.querySelector('.message').textContent = 'You LOST the game!';
    //     document.querySelector('.score').textContent = 0;
    // }

    }
});