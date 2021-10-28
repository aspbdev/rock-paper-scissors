// start game
// define score, p1=0, p2=0
// 
// choose player option = start round 
// round 
//  generate computer option
//  show options
//  compare options 
//  determine winner | res = p1,p2,x
//  increase winner's score 
//  refresh scores
// check next round possibility

const playerSelections = document.querySelectorAll('.player-choice');
const playerScoreboard = document.querySelector('.player-score');
const computerScoreboard = document.querySelector('.computer-score');
const roundResult = document.querySelector('.round-result');
const playerPick = document.querySelector('.player-selection');
const computerPick = document.querySelector('.computer-selection');

let playerScore = 0;
let computerScore = 0;

function game() {
    playerSelections.forEach(selection => selection.addEventListener('click', () => {
        playRound(selection.id);
    }));    
}

game();

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    playerPick.textContent = playerSelection;
    computerPick.textContent = computerSelection;

    if (playerSelection === computerSelection) {
        roundResult.textContent = 'IT\'S A TIE';
        return;
    }

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        roundResult.textContent = 'YOU WIN';
        playerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        roundResult.textContent = 'YOU WIN';
        playerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        roundResult.textContent = 'YOU WIN';
        playerScore++;
    } else {
        roundResult.textContent = 'COMP WINS';
        computerScore++;
    }

    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;
}

function computerPlay() {
    const gameValues = ['rock', 'paper', 'scissors'];
    return gameValues[Math.round(Math.random() * 2)];
}
