////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) { 
    if (move === null) {
        move = getInput();
        return move;
    }
    else {
        //We know move already has some value
        return move;
    }
}

function getComputerMove(move) {
    if (move === null) {
        move = randomPlay();
    return move;
    }
    else {
        //We know move already has a value
        return move;
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove == computerMove) {
        winner = 'tie';
    }
    else if (playerMove == 'rock' && computerMove == 'scissors') {
        winner = 'player';
    }
    else if (playerMove == 'rock' && computerMove == 'paper') {
        winner = 'computer';
    }
    else if (playerMove == 'paper' && computerMove == 'rock') {
        winner = 'player';
    }
    else if (playerMove == 'paper' && computerMove == 'scissors') {
        winner = 'computer';
    }
    else if (playerMove == 'scissors' && computerMove == 'paper') {
        winner = 'player';
    }
    else if (playerMove == 'scissors' && computerMove == 'rock') {
        winner = 'computer'
    }
    return winner;
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;
    //This function should continue to play Rock Paper Scissors until either the player or the computer has
    //won 5 times. After each 'round', display some text in the console indicating who played 
    //Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while ((playerWins < 5) && (computerWins < 5)){
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove, computerMove);
        console.log ('winner: ' + winner);
        if (winner === 'player') {
            playerWins += 1;
        }; else if (winner === 'computer') {
            computerWins += 1;
        }
    console.log('Player chose ' + playerMove + '.' + 'Computer chose ' + computerMove + '.')
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '.')
    //return [playerWins, computerWins]
    }
    console.log("Good Game!" + winner + " is the winner!")
    return [playerWins, computerWins];
}

