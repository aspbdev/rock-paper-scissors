const playerSelections = document.querySelectorAll('.player-choice');
const playerScoreboard = document.querySelector('.player-score');
const computerScoreboard = document.querySelector('.computer-score');
const roundResult = document.querySelector('.round-result');
const playerPick = document.querySelector('.player-selection');
const computerPick = document.querySelector('.computer-selection');


function game() {
    let playerScore = 0;
    let computerScore = 0;
    let winner = '';

    playerSelections.forEach(selection => 
        selection.addEventListener('click', () => {
            winner = playRound(selection.id);
            if (winner === 'player') playerScore++;
                else if (winner === 'computer') computerScore++;
    
            playerScoreboard.textContent = playerScore;
            computerScoreboard.textContent = computerScore;
            
            if (playerScore === 3 || computerScore === 3) {
                roundResult.textContent = 'Game over';
                playerScore = 0;
                computerScore = 0;
            }
        })
    );

}

game();

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    playerPick.textContent = playerSelection;
    computerPick.textContent = computerSelection;

    if (playerSelection === computerSelection) {
        roundResult.textContent = 'IT\'S A TIE';
        return 'tie';
    }

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        roundResult.textContent = 'YOU WIN';
        return 'player';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        roundResult.textContent = 'YOU WIN';
        return 'player';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        roundResult.textContent = 'YOU WIN';
        return 'player';
    } else {
        roundResult.textContent = 'COMP WINS';
        return 'computer';
    }
}

function computerPlay() {
    const gameValues = ['rock', 'paper', 'scissors'];
    return gameValues[Math.round(Math.random() * 2)];
}
