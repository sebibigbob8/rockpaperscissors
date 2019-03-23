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
/**
 * Game logic
 * @param userChoice
 */
let gameStart = async (userChoice) => {
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
    await countdownCaller().then;
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
            textScoreEl.innerText = "DRAW !";
            break;
        default:
    }
    //Update score
    scoreCompEl.innerText = compScore;
    scoreUserEl.innerText = userScore;


};

/**
 * Asynchronus code
 * Promise wrap in a function. That way let us choose when the promise will be resolve.
 * @returns {Promise<any>}
 */
function countdownCaller(){
    return new Promise((resolve, reject) => {
        let countdown = 1;
        let interval;
        document.body.classList.add('shadow');
        document.getElementById(`countainer`).style.display = 'none';
        let calculate = () => {
            if (countdown > 3) {
                document.getElementById(`countainer`).style.display = 'block';
                document.getElementById(`countdown${countdown - 1}`).style.display = 'none';
                document.body.classList.remove('shadow');
                resolve('done!');
                clearInterval(interval);
                return;
            }
            if (document.getElementById(`countdown${countdown - 1}`) != null)
                document.getElementById(`countdown${countdown - 1}`).style.display = 'none';
            document.getElementById(`countdown${countdown}`).style.display = 'block';
            countdown++;
        };
        interval = setInterval(calculate, 1000);
    });
}

/*
TODO: Add hands up and down effect during the countdown
 */

