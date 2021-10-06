
function computerPlay() {
    const gameValues = ['rock', 'paper', 'scissors'];
    return gameValues[Math.round(Math.random()*2)];
}

function playRound(playerSelection, computerSelection) {
    const roundChoises = `You: ${playerSelection} | Computer: ${computerSelection}.`

    if (playerSelection === computerSelection) {
        return `${roundChoises} DRAW!`;
    }

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `${roundChoises} You WIN!`
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `${roundChoises} You WIN!`
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `${roundChoises} You WIN!`
    } else {
        return `${roundChoises} You LOSE!`
    }
}

function game() {
    let roundCounter = 1;
    while (roundCounter <= 5) {
        const playerSelection = prompt('Your choice:');
        const computerSelection = computerPlay();
        console.log(`Round ${roundCounter} | ${playRound(playerSelection, computerSelection)}`);
        roundCounter++;
    }
}

game();