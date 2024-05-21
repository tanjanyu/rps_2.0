// Initiate an array with rock paper and scissors
let numOfOptions = 3;
let numOfGames = 5;
let options = ["rock", "paper", "scissors"];
let capitalizedOptions = ["Rock", "Paper", "Scissors"];
//playGame();

// Function Declerations
// Randomly return either rock paper or scissors
function getComputerChoice() {
    // Obtain a random integer between 0-2
    let randomNum = Math.floor(Math.random() * numOfOptions);
    // Return the random integer
    return randomNum;
}

// Play one game of rock paper scissors and declare the winner
function calcGameResult(playerSelection, computerSelection) {
    // Find the array position for computerSelection, then store that in a variable (That variable will be computerSelection)
    // Find the array position for playerSelection

    let playerSelectionNum = 0;
    for (let i = 0; i < numOfOptions; i++) {
        if (playerSelection === options[i]) {
            playerSelectionNum = i;
        }
    }
    // Initiate gameStatus variable and winner/loserNum variables
    let gameStatus = "drew", winnerNum = 0, loserNum = 0;
    // Using a switch statement, find if the playerSelection is equal to the losing, draw, or winning values
    // If player wins/loses/draw, say, You ${win/lose/draw}! {Winner array value} beats {Loser array value}
    switch(playerSelectionNum) {
        case loser(computerSelection):
            gameStatus = "lose";
            winnerNum = computerSelection;
            loserNum = playerSelectionNum;
            break;


        case winner(computerSelection):
            gameStatus = "win";
            loserNum = computerSelection;
            winnerNum = playerSelectionNum;
            break;
    }

    // Return statement
    if (gameStatus !== "drew") {
        return `You ${gameStatus}! ${capitalizedOptions[winnerNum]} beats ${options[loserNum]}`;
    } else {
        return `You drew! You both picked ${options[computerSelection]}`;
    }

}

// This function should find the losing value in the array
function loser(input) {
    let potentialLoserValue = input - 1;
    if (potentialLoserValue >= 0) {
        return potentialLoserValue;
    } else {
        return (numOfOptions - 1);
    }
}

// This function should find the winning value in the array
function winner(input) {
    let potentialWinnerValue = input + 1;
    if (potentialWinnerValue <= (numOfOptions - 1)) {
        return potentialWinnerValue;
    } else {
        return 0;
    }

}

// Gets case insensitive player selection
function getPlayerSelection() {
    // Use prompt to obtain a string from the player
    let userInput = prompt("Rock, paper, or scissors?", '');
    // Make string completely lowercase
    // Return the string
    return userInput.toLowerCase();
}

// Plays 5 rounds of rock, paper, scissors
function playGame() {
    let playerSelection, computerSelection;
    for (let i = 0; i < numOfGames; i++) {
        playerSelection = getPlayerSelection();
        computerSelection = getComputerChoice();
        console.log(calcGameResult(playerSelection, computerSelection));
    }
}



// New functions
function newPlayGame(playerInput) {
    playerSelection = playerInput.toLowerCase();
    computerSelection = getComputerChoice();
    appendLog(playerSelection, computerSelection);
    
}

function appendLog(playerSelection, computerSelection) {
    let div = createElement("div");
    div.textContent = calcGameResult(playerSelection, computerSelection);
    // Might need to add css class to the new div
    document.querySelector(".logs").appendChild(div);
}

fucntion updateScore(playerSelection, computerSelection) {
    if (
}
