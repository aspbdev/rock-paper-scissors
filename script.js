// Computer generates output
    // Computer generates random numder from 1 to 3
    // Computer return value from array

function computerPlay() {
    const gameValues = ['rock', 'paper', 'scisssors'];
    return gameValues[Math.round(Math.random()*2)];
}

// User input his selection

const playerSelection = 'paper';
const computerSelection = computerPlay();

// Computer give results of the round
    // Computer recieve two values
    // Computer compares two values and print result
        // If selections equal, than draw
        // if player - rock && computer - scissors = win
            // else lose
        // ... to more selections

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You: ${playerSelection} | Computer: ${computerSelection}. DRAW!`;
    }

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `You: ${playerSelection} | Computer: ${computerSelection}. You WIN!`
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `You: ${playerSelection} | Computer: ${computerSelection}. You WIN!`
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `You: ${playerSelection} | Computer: ${computerSelection}. You WIN!`
    } else {
        return `You: ${playerSelection} | Computer: ${computerSelection}. You LOSE!`
    }
}
