let userScore = 0;
let compScore = 0;

/**
 * Catch DOM elements
 * @type {HTMLElement}
 */
const rockEl = document.getElementById("r");
const paperEl = document.getElementById("p");
const scissorsEl = document.getElementById("s");
const textScoreEl = document.getElementById('winText');
const scoreUserEl = document.getElementById('user-score');
const scoreCompEl = document.getElementById('comp-score');

let result = 0; //0=noGame/1=userWin/2=compWin/3=equality

rockEl.onclick = e => {
    gameStart('rock');
};
paperEl.onclick = e => {
    gameStart('paper');

};
scissorsEl.onclick = e => {
    gameStart('scissors');
};

let gameStart = (userChoice) => {
    result = 0;
    let compChoice = Math.floor(Math.random() * 3) + 1;
    switch (compChoice) {
        case 1:
            compChoice = 'rock';
            switch (userChoice) {
                case 'rock':
                    result = 3;
                    break;
                case 'paper':
                    result = 1;
                    break;
                case 'scissors':
                    result = 2;
                    break;
                default:
                    result = 0;
            }
            break;
        case 2:
            compChoice = 'paper';
            switch (userChoice) {
                case 'rock':
                    result = 2;
                    break;
                case 'paper':
                    result = 3;
                    break;
                case 'scissors':
                    result = 1;
                    break;
                default:
                    result = 0;
            }
            break;
        case 3:
            compChoice = 'scissors';
            switch (userChoice) {
                case 'rock':
                    result = 1;
                    break;
                case 'paper':
                    result = 2;
                    break;
                case 'scissors':
                    result = 3;
                    break;
                default:
                    result = 0;
            }
            break;
        default:
            compChoice = null;
    }
    switch (result) {
        case 1:
            userScore++;
            textScoreEl.innerText = "You WIN";
            break;
        case 2:
            compScore++;
            textScoreEl.innerText = "You LOOSE";
            break;
        case 3:
            textScoreEl.innerText = "DRAW !"
            break;
        default:
    }
    //Update score
    scoreCompEl.innerText = compScore;
    scoreUserEl.innerText = userScore;
    console.log("Result: "+result);
};


