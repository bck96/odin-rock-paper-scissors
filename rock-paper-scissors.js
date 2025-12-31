playerScore = 0;
cpuScore = 0;

// Display player choices
const body = document.querySelector("body");

const choices = document.createElement("div");
choices.textContent = "CHOICES: ";

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
rockBtn.id = "rock";
choices.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
paperBtn.id = "paper";
choices.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
scissorsBtn.id = "scissors";
choices.appendChild(scissorsBtn);

body.appendChild(choices);

// Display results section
const resultsDiv = document.createElement("p");
resultsDiv.textContent = "RESULTS";

// Display final results
const finalDisplay = document.createElement("h2");
finalDisplay.textContent = "";
resultsDiv.appendChild(finalDisplay);

// Display player vs cpu choices
const choiceDisplay = document.createElement("p");
choiceDisplay.textContent = "";
resultsDiv.appendChild(choiceDisplay);

// Display round winner
const winnerDisplay = document.createElement("div");
winnerDisplay.textContent = "";
resultsDiv.appendChild(winnerDisplay);

const scoreDisplay = document.createElement("p");

// Display current player and cpu scores
const playerScoreDisp = document.createElement("p");
playerScoreDisp.textContent = "SCORE: " + playerScore;
scoreDisplay.appendChild(playerScoreDisp);

const cpuScoreDisp = document.createElement("p");
cpuScoreDisp.textContent = "SCORE: " + cpuScore;
scoreDisplay.appendChild(cpuScoreDisp);

resultsDiv.appendChild(scoreDisplay);

body.appendChild(resultsDiv);

// Check for player input
choices.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id) {
        case "rock":
            playRound("rock", getCpuChoice());
            break;
        case "paper":
            playRound("paper", getCpuChoice());
            break;
        case "scissors":
            playRound("scissors", getCpuChoice());
            break;
    }

    console.log("Player Choice: " + capitalizeFirstLetter(target.id));
});

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

// Play a single round
function playRound(playerChoice, cpuChoice){
    choiceDisplay.textContent = (capitalizeFirstLetter(playerChoice) + " vs " + capitalizeFirstLetter(cpuChoice));
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
    gameManager();
}

function gameManager(){
    if (playerScore >= 5 || cpuScore >= 5){
        if (playerScore >= 5){
            finalDisplay.textContent = "YOU WIN! - Refresh to play again!";
        }
        else if (cpuScore >= 5){
            finalDisplay.textContent = "YOU LOSE! - Refresh to play again!";
        }
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
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
    playerScoreDisp.textContent = "SCORE: " + playerScore;
    cpuScoreDisp.textContent = "SCORE: " + cpuScore;
    winnerDisplay.textContent = (resultsMessage + " " + comparisonMessage + ".")
}

// Display result of a tie
function showTie(choice){
    winnerDisplay.textContent = ("Tie! You both chose " + choice + ".");
}

// Capitalize the first letter of a string
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}