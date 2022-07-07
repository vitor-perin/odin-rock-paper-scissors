const buttons = document.querySelectorAll('button');
const roundWinner = document.querySelector('.round-result')

let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    const items = [`rock`, `paper`, `scissor`];
    const choice = items[Math.floor(Math.random()*items.length)];
    return choice;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.classList.value;
        computerChoice = computerPlay();

        round(playerChoice, computerChoice);
    });
});

function round(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        roundWinner.textContent = `Tie, no points gained`;
    }
    else if((computerChoice == "rock" && playerChoice == "scissor") ||
            (computerChoice == "scissor" && playerChoice == "paper") ||
            (computerChoice == "paper" && playerChoice == "rock")){
            computerScore++;
            if(computerScore == 5){
                roundWinner.textContent = `Computer Won. Better luck next Time`;
                reset()
            }
            else {
                roundWinner.textContent = `Computer won the round`;
            }
    }
    else {
        playerScore++;
        if(playerScore == 5){
            roundWinner.textContent = `Congrats YOU Won!`;
            reset()
        }
        else {
            roundWinner.textContent = `You won the round.`;
        }
    }

    setScore(playerScore, computerScore)
}

function setScore(playerScore, computerScore) {
    document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function reset() {
    playerScore = 0;
    computerScore = 0;
}