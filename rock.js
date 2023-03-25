
let playerWins = 0;
let computerWins = 0;
let plays = [];

function play(playerSelection) {
    let computerSelection = Math.ceil(Math.random() * 3);

    // map the numbers to their corresponding names
    let options = {
        1: 'Rock',
        2: 'Paper',
        3: 'Scissors'
    };

    let result;

    

    if (playerSelection === options[computerSelection]) {
        result = 'Tie';
    } else if ((playerSelection === 'Rock' && computerSelection === 3) ||
               (playerSelection === 'Paper' && computerSelection === 1) ||
               (playerSelection === 'Scissors' && computerSelection === 2)) {
        playerWins++;
        result = 'You win!';
    } else {
        computerWins++;
        result = 'You lose!';
    }
    
    // add the play to the plays array
    plays.push({ playerSelection, computerSelection, result });

    // update the UI
    let history = document.getElementById('history');
    let html = '';
    for (let i = 0; i < plays.length; i++) {
        html += `<li>${plays[i].playerSelection} vs ${options[plays[i].computerSelection]} - ${plays[i].result}</li>`;
    }
    history.innerHTML = html;

    let score = document.getElementById('score');
    score.innerText = `Player: ${playerWins}, Computer: ${computerWins}`;

    if (playerWins === 3) {
        let congrats = document.createElement('div');
        congrats.innerText = 'Congratulations! You won the game!';
        congrats.style.color = 'green';
        congrats.style.fontSize = '24px';
        congrats.style.fontWeight = 'bold';
        congrats.style.textAlign = 'center';
        alert(congrats.innerHTML);
        reset();
    
    } else if (computerWins === 3) {
        let sorry = document.createElement('div');
        sorry.innerText = 'Sorry, you lost the game.';
        sorry.style.color = 'red';
        sorry.style.fontSize = '24px';
        sorry.style.fontWeight = 'bold';
        sorry.style.textAlign = 'center';
        alert(sorry.innerHTML);
        reset();
    }
}

function reset() {
    playerWins = 0;
    computerWins = 0;
    plays = [];
    let history = document.getElementById('history');
    history.innerHTML = '';
    let score = document.getElementById('score');
    score.innerText = 'Player: 0, Computer: 0';
}

document.getElementById('rock').addEventListener('click', () => play('Rock'));
document.getElementById('paper').addEventListener('click', () => play('Paper'));
document.getElementById('scissors').addEventListener('click', () => play('Scissors'));



