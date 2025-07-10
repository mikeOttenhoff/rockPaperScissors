const handShapes = { 0: "Rock", 1: "Paper", 2: "Scissors" };

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

const humanScore = 0;
const computerScore = 0;

const playRound = function (humanChoice, computerChoice) {
  humanChoice = getHumanChoice().toLowerCase();
  console.log(humanChoice);
  computerChoice = getComputerChoice();
};

playRound();
