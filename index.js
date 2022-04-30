
let player_choise = prompt("choose from rock || paper || scissors", "rock").toLowerCase()




let computerPlay = () => {
    let random_choise = Math.floor(Math.random() * 3)
    let choise_list = ['rock', 'paper', 'scissors']

    return choise_list[random_choise];
}

// console.log(computerPlay())


let playRound = (player_choise, compuer_choise) => {
    //rock
    if (player_choise === 'rock' && compuer_choise === 'rock' ){
        console.log("same choise! i will let you win")
        return true
    }
    if (player_choise === 'rock' && compuer_choise === 'paper' ){
        console.log("You Lose! Paper beats Rock");
        return false
    }
    if (player_choise === "rock" && compuer_choise === "scissors") {
        console.log("You Win! Rock beats Scissors");
        return true;
    }

    // paper
    if (player_choise === "paper" && compuer_choise === "rock") {
        console.log("You Win! Paper beats Rock");
        return true;
    }
    if (player_choise === "paper" && compuer_choise === "paper") {
        console.log("same choise! i will let you win");
        return true;
    }
    if (player_choise === "paper" && compuer_choise === "scissors") {
        console.log("You Lose! Scissors beats Paper");
        return false;
    }

    //scissors
    if (player_choise === "scissors" && compuer_choise === "rock") {
        console.log("You Lose! Rock beats Scissors");
        return false;
    }
    if (player_choise === "scissors" && compuer_choise === "paper") {
        console.log("You Win! Scissors beats Paper");
        return true;
    }
    if (player_choise === "scissors" && compuer_choise === "scissors") {
        console.log("same choise! i will let you win");
        return true;
    }
}


console.log(playRound('paper', computerPlay()))



