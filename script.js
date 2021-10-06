// Computer generates output
    // Computer generates random numder from 1 to 3
    // Computer return value from array

function computerPlay() {
    const gameValues = ['rock', 'paper', 'scisssors'];
    return gameValues[Math.round(Math.random()*2)];
}