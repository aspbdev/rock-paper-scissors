
function computerPlay() {
    const gameValues = ['rock', 'paper', 'scissors'];
    return gameValues[Math.round(Math.random()*2)];
}

function playRound() {
    const playerSelection = prompt('Your choice:');
    const computerSelection = computerPlay();

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

function game() {
    let roundCounter = 1;
    while (roundCounter <= 5) {
        console.log(`Round ${roundCounter} | ${playRound()}`);
        roundCounter++;
    }
}

game();