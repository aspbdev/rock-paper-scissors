
const playerSelections = document.querySelectorAll('.player-choice');
const gameResult = document.querySelector('.game-result');

playerSelections.forEach(selection => selection.addEventListener('click', () => {
    gameResult.textContent = playRound(selection.id);
}));

function computerPlay() {
    const gameValues = ['rock', 'paper', 'scissors'];
    return gameValues[Math.round(Math.random()*2)];
}

function playRound(playerSelection) {

    const computerSelection = computerPlay();

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
