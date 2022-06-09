console.log("lets play a game!");
let computerOptions= ["rock","paper","scissor"];
function computerPlay(){
    const indexVal= Math.floor(Math.random() * computerOptions.length);
    const choice= computerOptions[indexVal];
}

computerPlay();