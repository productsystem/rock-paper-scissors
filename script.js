function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt(`Write: Rock, paper or scissors.`);
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice){
        console.log("It's a tie!!");
        return 0;
    }

    switch (humanChoice) {
        case "rock":
            if(computerChoice === "paper"){
                console.log("You lose! Paper beats Rock");
                return 1;
            } else{
                console.log("You win! Rock beats Scissors");
                return 2;
            }
        case "paper":
            if(computerChoice === "scissors"){
                console.log("You lose! Scissors beats Paper");
                return 1;
            } else{
                console.log("You win! Paper beats Rock");
                return 2;
            }
        case "scissors":
            if(computerChoice === "rock"){
                console.log("You lose! Rock beats Scissors");
                return 1;
            } else{
                console.log("You win! Scissors beats Paper");
                return 2;
            }
        default:
            console.log("Are you sure you have spelled the option correctly?");
            return 0;
    }
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
    let result = 0;

    for(let i = 0; i< 5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        result = playRound(humanSelection, computerSelection);

        if(result == 1)
        {
            computerScore++;
        }
        else if(result == 2)
        {
            humanScore++;
        }
    }

        if(computerScore > humanScore)
        {
            return console.log(
            `You lose! The computer won ${computerScore} rounds and you won ${humanScore}.`
            );
        }

        else if(computerScore < humanScore){
            return console.log(
            `Congratulations, you win! The computer won ${computerScore} rounds and you won ${humanScore}.`
            );
        }   
        else
        {
            return console.log(
                `It's a tie! The computer won ${computerScore} rounds and you won ${humanScore}.`
            );
        }   
}

playGame();