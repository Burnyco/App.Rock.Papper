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

function win(userChoise, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoise + "Beats" + computerChoice + "You Win !";

}

function lose() {

}

function draw() {
    console.log("DRAW");
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