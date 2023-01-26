/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
let name = prompt("Enter your Name to start the game."); 

let totalScore = {'Human': 0, 'Computer': 0};
let playerScoreDiv = document.getElementById('player-score');
let handsDiv = document.getElementById('hands');
let result = document.getElementById('result');
let endGameButtonDiv = document.getElementById('endGameButton');
function getComputerChoice() {

  let options = ['Scissors', 'Paper', 'Rock'];
  let val = (Math.floor(Math.random()*3));
  return options[val];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score = 0;
  if(playerChoice === 'Rock' && computerChoice === 'Scissors'){
    score = 1;
  }
  else if(playerChoice === 'Scissors' && computerChoice === 'Paper'){
    score = 1;
  }
  else if(playerChoice === 'Paper' && computerChoice === 'Rock'){
    score = 1;
  }
  else if(playerChoice === 'Scissors' && computerChoice === 'Rock'){
    score = -1;
  }
  else if(playerChoice === 'Paper' && computerChoice === 'Scissors'){
    score = -1;
  }
  else if(playerChoice === 'Rock' && computerChoice === 'Paper'){
    score = -1;
  }
  return score;
  // All situations where human draws, set `score` to 0
  

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  

  // Otherwise human loses (aka set score to -1)
  

  // return score
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
    if(score == -1){
        result.innerText = "You Lose!";    
    }
    else if(score == 1){
        result.innerText = "You Won!";  
    }
    else{
        result.innerText = "It is a tie!";
    }
    totalScore['Human']+= score;
    
    totalScore['Computer'] -= score;
    handsDiv.innerHTML = `${name} : ${playerChoice}  vs   Computer  :  ${computerChoice}`;
    playerScoreDiv.innerText  = `${name}'s Score: ${totalScore['Human']}`;
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    let Computer = getComputerChoice();
    let result = getResult(playerChoice, Computer);
    // console.log({Computer});
    // console.log({playerChoice});
    // console.log({result});
    // console.log({totalScore});
    showResult(result, playerChoice, Computer);
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {


    if(name === ''){
        console.log("Enter name first");
        alert("Please Enter the name first");
    }
  // use querySelector to select all RPS Buttons
    let Allbuttons = document.querySelectorAll('.rpsButton');
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
    // Allbuttons[0].onclick = () => console.log(Allbuttons[0].value);
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

    Allbuttons.forEach(button => {
        button.onclick = () => onClickRPS(button.value);
    });

   endGameButtonDiv.onclick = () => endGame();
  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  handsDiv.innerText = "";
  playerScoreDiv.innerText = "";
  result.innerText = "";
  totalScore['Human'] = 0;
  totalScore['Computer'] = 0
}

playGame()