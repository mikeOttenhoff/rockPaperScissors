const handShapes = { 0: "rock", 1: "paper", 2: "scissors" };

const getComputerChoice = function () {
  const handShapeArr = Object.keys(handShapes);
  const random = Math.random();
  const handShapeIndex = Math.floor(random * handShapeArr.length);

  const randomKey = handShapeArr[handShapeIndex];
  const randomValue = handShapes[randomKey];
  return randomValue;
};

const getHumanChoice = function () {
  const humanPrompt = prompt(
    "Pick one of the following: Rock, Paper, Scissors"
  );
  return humanPrompt;
};

let humanScore = 0;
let computerScore = 0;

const playRound = function (humanChoice, computerChoice) {
  humanChoice = getHumanChoice().toLowerCase();
  computerChoice = getComputerChoice();

  //rock
  //rock
  if (humanChoice === "rock" && computerChoice === "rock") {
    return console.log(`${humanChoice}:${computerChoice} - It's a tie!`);
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    return console.log(`${humanChoice}:${computerChoice} - The computer wins`);
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    return console.log(`${humanChoice}:${computerChoice} - You win`);
    // paper
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    return console.log(`${humanChoice}:${computerChoice} - You win`);
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    return console.log(`${humanChoice}:${computerChoice} - It's a tie!`);
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    return console.log(`${humanChoice}:${computerChoice} - The computer wins`);
    //scissors
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    return console.log(`${humanChoice}:${computerChoice} - The computer wins`);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    return console.log(`${humanChoice}:${computerChoice} - You win`);
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    return console.log(`${humanChoice}:${computerChoice} - It's a tie!`);
  }
};

const playGame = function () {
  for (let round = 0; round < 5; round++) {
    playRound();
  }
};
playGame();

console.log(humanScore, computerScore);
