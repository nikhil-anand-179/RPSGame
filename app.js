console.log("lets play the game!");
let computerOptions= ["rock","paper","scissor"];
function computerPlay(){
    const indexVal= Math.floor(Math.random() * computerOptions.length);
    const choice= computerOptions[indexVal];
    return choice;
}

let playerScore=0;
let computerScore=0;
let roundWinner='';

function playRound(playerSelection,computerSelection){

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){

        roundWinner='Tie';
        // console.log(roundWinner);
        return roundWinner;
    }

    else if(
        (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissor')||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock'))
        
        {

        playerScore++;
        roundWinner= 'Player';
        // console.log(roundWinner);
        return roundWinner;

        }

    else if(
        (computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'scissor')||
        (computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'paper') ||
        (computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'rock'))
      
      {

        computerScore++;
        roundWinner= 'Computer';
        // console.log(roundWinner);
        return roundWinner;

      }  

}

function game(){

    for (let i = 0; i < 5; i++) {
        let playerInput= prompt("enter your weapon");
        let compInput= computerPlay();
        if(playRound(playerInput,compInput)==='Player'){

            console.log("you Win this round");
        }
        else if(playRound(playerInput,compInput)==='Computer'){

            console.log("you lost this round");
        }
        else{
            
            console.log("No one win this round");
        }

     }

     if (playerScore > computerScore){
         console.log("Player Won the game!!");
     }

     else if(computerScore > playerScore){
         console.log("Computer Won the game!!");
     }

     else if(computerScore === playerScore){
        console.log("It is a Tie!!");
    }

     else{
         console.log("nobody Won!!");
     }

}

game();
