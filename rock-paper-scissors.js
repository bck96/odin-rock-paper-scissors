playerScore = 0;
cpuScore = 0;

function getCpuChoice(){
    return Math.floor(Math.random() * 3) + 1;
}

getCpuChoice();
console.log(getCpuChoice());

function getPlayerChoice(){
    let choice = prompt("Make your choice: Rock, Paper, or Scissors.");
    console.log(choice);
    return choice;
}

getPlayerChoice();

// Get computer choice
    // Randomly return "rock", "paper", or "scissors"

// Get human choice (use prompt)

// Track player and computer scores

// Play single round
    // Increment score of winner

// Player five rounds