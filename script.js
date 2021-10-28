// start game - press button
// define score, p1=0, p2=0
// 
// choose player option = start round 
// generate computer option
// compare options 
// determine winner | res = p1,p2,x
// increase winner's score 
// repeat until one's score reach 5
// suggest to restart game

function computerPlay() {
    const gameValues = ['rock', 'paper', 'scissors'];
    return gameValues[Math.round(Math.random()*2)];
}

function playRound(playerSelection) {

    const computerSelection = computerPlay();
    const gameResult = document.querySelector('.game-result');
    gameResult.textContent = `Your selection: ${playerSelection} | Computer selection: ${computerSelection}`;

    if (playerSelection === computerSelection) {
        return `DRAW!`;
    }

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'player';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'player';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'player';
    } else {
        return 'computer';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    const playerSelections = document.querySelectorAll('.player-choice');
    
    const playerScoreboard = document.querySelector('.player-score');
    const computerScoreboard = document.querySelector('.computer-score');

    playerSelections.forEach(selection => selection.addEventListener('click', () => {
        let winner = playRound(selection.id);
        
        if (winner === 'player') playerScore++;
            else if (winner === 'computer') computerScore++;
        playerScoreboard.textContent = playerScore;
        computerScoreboard.textContent = computerScore;
    }));
}

game();