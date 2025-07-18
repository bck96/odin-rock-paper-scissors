playerScore = 0;
cpuScore = 0;

playGame();

// Generate the CPU's choice
function getCpuChoice(){
    let rng = Math.floor(Math.random() * 3) + 1;
    if (rng === 1){
        cpuChoice = "rock";
    }
    else if (rng === 2){
        cpuChoice = "paper";
    }
    else if (rng === 3){
        cpuChoice = "scissors";
    }
    console.log("CPU Choice: " + capitalizeFirstLetter(cpuChoice));
    return cpuChoice;
}

// Input the player's choice
function getPlayerChoice(){
    let choice = prompt("Make your choice: Rock, Paper, or Scissors.").toLowerCase();
    console.log("Player Choice: " + capitalizeFirstLetter(choice));
    return choice;
}

// Play a single round
function playRound(playerChoice, cpuChoice){
    if (playerChoice === cpuChoice){
        showTie(playerChoice);
    }
    else{
        if (playerChoice === "rock"){
            if (cpuChoice === "paper"){
                showResults("lose", playerChoice, cpuChoice);
            }
            else if (cpuChoice === "scissors"){
                showResults("win", playerChoice, cpuChoice);
            }
        }
        else if (playerChoice === "paper"){
            if (cpuChoice === "rock"){
                showResults("win", playerChoice, cpuChoice);
            }
            else if (cpuChoice === "scissors"){
                showResults("lose", playerChoice, cpuChoice);
            }
        }
        else if (playerChoice === "scissors"){
            if (cpuChoice === "rock"){
                showResults("lose", playerChoice, cpuChoice);
            }
            else if (cpuChoice === "paper"){
                showResults("win", playerChoice, cpuChoice);
            }
        }
    }
}

// Player a full game of 5 rounds
function playGame(){
    for (i = 1; i < 6; i++){
        console.log("Round " + i + " of 5. START!")
        playRound(getPlayerChoice(), getCpuChoice())
        console.log("Player Score: " + playerScore);
        console.log("CPU Score: " + cpuScore);

        if (i === 5){
            if (playerScore > cpuScore){
                console.log("You win! Congratulations!")
            }
            else if (playerScore < cpuScore){
                console.log("You lose! Better luck next time.")
            }
            else{
                console.log("Tie! You're evenly matched.")
            }

            console.log("Refresh to try again.")
        }
    }
}

// Display results if not a tie
function showResults(winLose, playerChoice, cpuChoice){
    resultsMessage = "You " + winLose + "!";
    if (winLose === "win"){
        comparisonMessage = capitalizeFirstLetter(playerChoice + " beats " + cpuChoice);
        playerScore++;
    }
    else if (winLose === "lose"){
        comparisonMessage = capitalizeFirstLetter(cpuChoice + " beats " + playerChoice);
        cpuScore++;
    }
    console.log(resultsMessage + " " + comparisonMessage + ".")
}

// Display result of a tie
function showTie(choice){
    console.log("Tie! You both chose " + choice + ".");
}

// Capitalize the first letter of a string
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}