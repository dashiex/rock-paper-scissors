
// 1st - Randomly return Rock, Paper or Scissors

function getComputerChoice () {
    randNum = Math.floor(Math.random() * 3);

    switch(randNum) {
        case 0:
            compChoice = "Rock"
            break;

        case 1:
            compChoice = "Paper"
            break;

        case 2:
            compChoice = "Scissors"
            break;
    }

    return compChoice;
}

// Ask users to type input either Rock, Paper or Scissors

function getHumanChoice () {
    input = window.prompt("Rock, Paper or Scissors?").toLowerCase();


    switch(input) {
        case "rock":
            userChoice = "Rock"
            break;
        
        case "paper":
            userChoice = "Paper"
            break;

        case "scissors":
            userChoice = "Scissors"
            break;

            default:
            getHumanChoice()
            break;
    }   

    return userChoice;
}


// Run user based on inputted number or rounds and display who is the winner

function playGame(roundCount) {
    let humanScore = 0;
    let computerScore = 0;


    // Get user and computer inputs and decide who wins the round

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "Rock" && computerChoice === "Scissors"){
            console.log("You win! Rock beats Scissors!");
            humanScore++;
        } else if(humanChoice === "Scissors" && computerChoice === "Paper"){
            console.log("You win! Scissors beats Paper!");
            humanScore++;
        } else if(humanChoice === "Paper" && computerChoice === "Rock") {
            console.log("You win! Paper beats Rock!");
            humanScore++;
        } else if(humanChoice === "Rock" && computerChoice === "Paper") {
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        } else if(humanChoice === "Scissors" && computerChoice === "Rock") {
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        } else if(humanChoice === "Paper" && computerChoice === "Scissors"){
            console.log("You lose! Scissors beats Paper!");
        } else {
            console.log("Its a Tie!");
        }

        console.log("Player score: "+humanScore);
        console.log("Computer score: "+computerScore);
    }


    // Loop through the playRound function as many times as defined in the parameter
    for(i = 0; i < roundCount; i++) {
        console.log("Round "+ (i + 1));
        playRound(getHumanChoice(), getComputerChoice());
    }


        //Check who is the winner

        if(humanScore > computerScore){
            console.log("Player is the Winner!");
        }else if (humanScore < computerScore){
            console.log("Computer is the Winner!");
        } else {
            console.log("It's a tie!");
        }

}

playGame(5);