let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreboard_div = document.querySelector('score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors";
}



function win(userChoise, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = 'You'.fontsize(3).sub();
    const smallMachineWord = 'Machine'.fontsize(3).sub();
    result_p.innerHTML = ` ${convertToWord(userChoise)}${smallUserWord} Beats  ${convertToWord(computerChoice)}${smallMachineWord}  You Win ! `;

}

function lose(userChoise, computerChoice) {

    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = 'You'.fontsize(3).sub();
    const smallMachineWord = 'Machine'.fontsize(3).sub();
    result_p.innerHTML = ` ${convertToWord(userChoise)}${smallUserWord} Loses ${convertToWord(computerChoice)}${smallMachineWord}  You Lost ! `;
}

function draw(userChoise, computerChoice) {

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = 'You'.fontsize(3).sub();
    const smallMachineWord = 'Machine'.fontsize(3).sub();
    result_p.innerHTML = ` ${convertToWord(userChoise)}${smallUserWord} Equals ${convertToWord(computerChoice)}${smallMachineWord}  It's a Draw ! `;
}



function game(userChoise) {
    const computerChoice = getComputerChoice();
    switch (userChoise + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoise, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoise, computerChoice);
            break;
        case 'rr':
        case 'p':
        case 'ss':
            draw(userChoise, computerChoice);
            break;
    }

}




function main() {

    rock_div.addEventListener('click', function() {
        game('r')

    })

    paper_div.addEventListener('click', function() {
        game('p')
    })

    scissors_div.addEventListener('click', function() {
        game('s')
    })

}

main();