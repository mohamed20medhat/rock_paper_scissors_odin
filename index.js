





let computerPlay = () => {
    let random_choice = Math.floor(Math.random() * 3)
    let choice_list = ['rock', 'paper', 'scissors']

    return choice_list[random_choice];
}


// console.log(computerPlay())
// choice

let playRound = (player_choice, computer_choice) => {
    //rock
    if (player_choice === 'rock' && computer_choice === 'rock' ){
        console.log("same choice! repeat")
        return "same"
    }
    if (player_choice === 'rock' && computer_choice === 'paper' ){
        console.log("You Lose! Paper beats Rock");
        return false
    }
    if (player_choice === "rock" && computer_choice === "scissors") {
        console.log("You Win! Rock beats Scissors");
        return true;
    }

    // paper
    if (player_choice === "paper" && computer_choice === "rock") {
        console.log("You Win! Paper beats Rock");
        return true;
    }
    if (player_choice === "paper" && computer_choice === "paper") {
        console.log("same choice! repeat");
        return "same";
    }
    if (player_choice === "paper" && computer_choice === "scissors") {
        console.log("You Lose! Scissors beats Paper");
        return false;
    }

    //scissors
    if (player_choice === "scissors" && computer_choice === "rock") {
        console.log("You Lose! Rock beats Scissors");
        return false;
    }
    if (player_choice === "scissors" && computer_choice === "paper") {
        console.log("You Win! Scissors beats Paper");
        return true;
    }
    if (player_choice === "scissors" && computer_choice === "scissors") {
        console.log("same choice! repeat");
        return "same";
    }
}


// console.log(playRound('paper', computerPlay()))
let game = () => {
    let game_result = 2
    let number_of_rounds = 0

    for (let i = 0; i < number_of_rounds; i++) {
        let player_choice = prompt(
            "choose from rock || paper || scissors",
            "rock"
        ).toLowerCase();

        let computer_choice = computerPlay();

        let round_result = playRound(player_choice, computer_choice);
        if (round_result === true) {
            game_result++;
        } else if (round_result === 'same'){
            number_of_rounds ++
        }
    }
    
    console.log("current game result is: ", game_result);
    if (game_result >= Math.floor(number_of_rounds / 2) ) {
        console.log("you have won the game")
        return true
    }else {
        console.log("you have lost the game")
        return false
    }

}


game()




