function computerPlay() {
    const items = [`Rock`, `Paper`, `Scissors`];
    const choice = items[Math.floor(Math.random()*items.length)];
    return choice;
}

function playerPlay(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

function game() {
    
    let playerWin = 0;
    let computerWin = 0;
    
    for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
        console.log(roundsPlayed)
        const computerSelection = computerPlay();
        const playerSelection = prompt(`Make your choice between Rock, Paper and Scissors:`, );
        const playerInsensitive  = playerPlay(playerSelection);
        const result = playRound(playerInsensitive, computerSelection);

        function playRound(playerInsensitive, computerSelection) {
            if (playerInsensitive === computerSelection) {
                console.log("Tie");
                roundsPlayed--;
            }
            else if (playerInsensitive == `Rock`){
                if (computerSelection == `Paper`) {
                    console.log("Computer Won");
                    computerWin++;
                    console.log(computerWin)
                }
                else {
                    console.log("You won");
                    playerWin++;
                    console.log(playerWin)
                }
            }
            else if (playerInsensitive == `Paper`){
                if (computerSelection == `Scissors`) {
                    console.log("Computer Won");
                    computerWin++;
                    console.log(computerWin)
                }
                else {
                    console.log("You won");
                    playerWin++;
                    console.log(playerWin)
                }
            }
            else if (playerInsensitive == `Scissors`){
                if (computerSelection == `Rock`) {
                    console.log("Computer Won");
                    computerWin++;
                    console.log(computerWin)
                }
                else {
                    console.log("You won");
                    playerWin++;
                    console.log(playerWin)
                }
            }
        }
    }

    if (playerWin > computerWin) {
        console.log("Congrats you beat the Computer");
    }
    else {
        console.log("Computer Won, Good luck next time!");
    }

}

alert("Let's play Rock, Paper and Scissors!");
game()
