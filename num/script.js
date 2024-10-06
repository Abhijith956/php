// const minNum = 1;

// const maxNum = 100;

// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// const userinput =document.getElementById("userinput").value;
// const button = document.getElementById("btn");
// function enter() {
//     console.log(userinput);
// }
// let attempts = 0;

// let guess;

// let running = true;

// while(running){

// guess = window.prompt('Guess a number between 1 and 100');

// guess = Number(guess);

// if(isNaN(guess)){

// window.alert("Please enter a valid number"); }

// else if(guess < minNum || guess > maxNum){ window.alert("Please enter a valid number");

// }

// else{

// attempts++;

// if(guess < answer){

// window.alert("TOO LOW! TRY AGAIN!");
// }
// else if(guess > answer){

//     window.alert("TOO HIGH! TRY AGAIN!");
    
//     }
    
//     else{
    
//     window.alert('CORRECT! The answer was ${answer). It took you ${attempts) attempts');
    
//     running = false;
    


// }
// }
// }


// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// let attempts = 0;
// let running = true;

// function enter() {
//     if (!running) return;  // Exit if the game is over

//     const userinput = document.getElementById("userinput").value;
//     const message = document.getElementById("message");
//     const attemptsEl = document.getElementById("attempts");

//     let guess = Number(userinput);

//     if (isNaN(guess)) {
//         message.textContent = "Please enter a valid number";
//     } else if (guess < minNum || guess > maxNum) {
//         message.textContent = "Please enter a number between 1 and 100";
//     } else {
//         attempts++;
//         if (guess < answer) {
//             message.textContent = "TOO LOW! TRY AGAIN!";
//         } else if (guess > answer) {
//             message.textContent = "TOO HIGH! TRY AGAIN!";
//         } else {
//             message.textContent = "CORRECT! The answer was ${answer}. It took you ${attempts} attempts";
//             running = false;  // Stop the game after correct guess
//         }
//         attemptsEl.textContent = "Attempts : ${attempts}";
//     }

//     // Clear input field after each attempt
//     document.getElementById("userinput").value = '';
// }


let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function enter() {
    let userGuess = document.getElementById("userinput").value;
    let message = document.getElementById("message");
    let attemptsDisplay = document.getElementById("attempts");

    attempts++;

    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high! Try again.";
    } else {
        message.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
}