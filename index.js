


let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let playerScore = 0
let pcScore = 0

let yourResultInBoard = document.getElementById('your-result')
let pcResultInBoard = document.getElementById('pc-result')




let playRoundEvent = (e) => {
  let player_choice = e.target.id
  let computer_choice = computerPlay()
  gameResults.style.color = "black"
  

  // change action board image 
  let replacePlayerPic = document.getElementById("replacePlayerPic")
  let replacePcPic = document.getElementById("replacePcPic")
  let player_image = document.createElement("IMG");
  player_image.src = `imgs/${player_choice}.png`
  player_image.id = 'replacePlayerPic'
  let pc_image = document.createElement("IMG");
  pc_image.src = `imgs/${computer_choice}.png`
  pc_image.id = 'replacePcPic'
  replacePlayerPic.parentNode.replaceChild(player_image, replacePlayerPic);
  replacePcPic.parentNode.replaceChild(pc_image, replacePcPic);

  // find how win or lose in Each round
  let round_result = playRound(player_choice, computer_choice)
  if (round_result === true) {
    playerScore++
    yourResultInBoard.textContent = playerScore
  } else if (round_result === false) {
    pcScore++
    pcResultInBoard.textContent = pcScore
  }



  // determine win or lose the whole game based on score after 5 rounds   
  if (playerScore + pcScore >= 5) {
    if (playerScore >= pcScore) {
      gameResults.textContent = "You have won the game"
      gameResults.style.color = "green"
      resetBoard()
    } else {
      gameResults.textContent = "You have lost the game"
      gameResults.style.color = "red"
      resetBoard()
    }
  }

}


function resetBoard() {
  playerScore = 0
  pcScore = 0
  yourResultInBoard.textContent = playerScore
  pcResultInBoard.textContent = pcScore
  // gameResults.style.color = "black"

}



rock.addEventListener('click', playRoundEvent)
paper.addEventListener('click', playRoundEvent)
scissors.addEventListener('click', playRoundEvent)






let computerPlay = () => {
  let random_choice = Math.floor(Math.random() * 3)
  let choice_list = ['rock', 'paper', 'scissors']
  return choice_list[random_choice];
}



let gameResults = document.getElementById("game-result")
let playRound = (player_choice, computer_choice) => {
  //rock
  if (player_choice === 'rock' && computer_choice === 'rock') {
    gameResults.textContent = "same choice! repeat"
  }
  if (player_choice === 'rock' && computer_choice === 'paper') {
    gameResults.textContent = "You Lose! Paper beats Rock"
    return false
  }
  if (player_choice === "rock" && computer_choice === "scissors") {
    gameResults.textContent = "You Win! Rock beats Scissors"
    return true;
  }

  // paper
  if (player_choice === "paper" && computer_choice === "rock") {
    gameResults.textContent = "You Win! Paper beats Rock"
    return true;
  }
  if (player_choice === "paper" && computer_choice === "paper") {
    gameResults.textContent = "same choice! repeat"
  }
  if (player_choice === "paper" && computer_choice === "scissors") {
    gameResults.textContent = "You Lose! Scissors beats Paper"
    return false;
  }

  //scissors
  if (player_choice === "scissors" && computer_choice === "rock") {
    gameResults.textContent = "You Lose! Rock beats Scissors"
    return false;
  }
  if (player_choice === "scissors" && computer_choice === "paper") {
    gameResults.textContent = "You Win! Scissors beats Paper"
    return true;
  }
  if (player_choice === "scissors" && computer_choice === "scissors") {
    gameResults.textContent = "same choice! repeat"
  }
}







