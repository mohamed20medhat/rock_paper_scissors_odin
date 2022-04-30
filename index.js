





let computerPlay = () => {
    let random_choise = Math.floor(Math.random() * 3)
    let choise_list = ['rock', 'paper', 'scissors']

    return choise_list[random_choise];
}

// console.log(computerPlay())


let playRound = (player_choise, compuer_choise) => {
    //rock
    if (player_choise === 'rock' && compuer_choise === 'rock' ){
        console.log("same choise! repeat")
        return "same"
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
        console.log("same choise! repeate");
        return "same";
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
        console.log("same choise! repeate");
        return "same";
    }
}


// console.log(playRound('paper', computerPlay()))

let game = () => {
    let game_result = 0
    let number_of_rounds = 5

    for (let i = 0; i < number_of_rounds; i++) {
        let player_choise = prompt(
            "choose from rock || paper || scissors",
            "rock"
        ).toLowerCase();

        let compuer_choise = computerPlay();

        let round_result = playRound(player_choise, compuer_choise);
        if (round_result === true) {
            game_result++;
            // console.log("current game result is: ", game_result);
        } else if (round_result === 'same'){
            number_of_rounds ++
        }
    }

    if(game_result >= 3){
        console.log("you have won the game")
        return true
    }else {
        console.log("you have lost the game")
        return false
    }

}


game()




