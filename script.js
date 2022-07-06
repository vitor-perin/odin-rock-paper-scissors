const buttons = document.querySelectorAll('button');
const score = document.querySelectorAll('');
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
        console.log("Tie");
    }
    else if((computerChoice == "rock" && playerChoice == "scissor") ||
            (computerChoice == "scissor" && playerChoice == "paper") ||
            (computerChoice == "paper" && playerChoice == "rock")){
    }
    else {
    }
}