const handShapes = { 0: "rock", 1: "paper", 2: "scissors" };
const container = document.createElement("section");

const getComputerChoice = function () {
  const handShapeArr = Object.keys(handShapes);
  const random = Math.random();
  const handShapeIndex = Math.floor(random * handShapeArr.length);

  const randomKey = handShapeArr[handShapeIndex];
  const randomValue = handShapes[randomKey];
  return randomValue;
};

let humanChoice = "";
const getHumanChoice = function () {
  return humanChoice;
};

let humanScore = 0;
let computerScore = 0;

const playRound = function (humanChoice, computerChoice) {
  humanChoice = getHumanChoice();

  //Choices
  //rock
  if (humanChoice === computerChoice) {
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
  }
};

// Crafting the UI part
const body = document.querySelector("body");

//create a container within the body

container.classList.add("container");
body.appendChild(container);

// a fetching title
const title = document.createElement("h1");
title.innerText = `Let's play some Rock, Paper, Scissors`;
container.appendChild(title);

//This is the collective div with all the handshapes
const contentDiv = document.createElement("div");
contentDiv.classList.add("buttons");
//This gives us acces to Key and Value in our object
const shapeElements = Object.entries(handShapes);

// For each element in our object we create a shapegroup that has a unique class and title based on the shapeElements value
shapeElements.forEach(function ([key, value]) {
  const shapeGroup = document.createElement("div");
  const textElement = document.createElement("button");
  textElement.innerText = value;

  textElement.addEventListener("click", function () {
    humanChoice = value;
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    //Updates the result score elements
    humanScoreElement.innerText = `You: ${humanScore}`;
    computerScoreElement.innerText = `Computer: ${computerScore}`;
    // Updates the result, current
    currentHumanScore.innerText = `Your choice: ${getHumanChoice()}`;
    currentComputerScore.innerText = `Computer: ${computerChoice}`;

    // Do something if either one get's 5 points
    if (humanScore === 5 || computerScore === 5) {
      const buttonsClass = document.querySelector(".buttons");
      buttonsClass.remove();

      let winner;
      if (humanScore === 5) {
        winner = "You win the game!";
        computerScoreElement.remove();
      } else {
        winner = "The computer wins the game!";
        humanScoreElement.remove();
      }
      const message = document.createElement("p");
      message.innerText = winner;
      results.appendChild(message);
    }
  });
  shapeGroup.classList.add(value);
  shapeGroup.appendChild(textElement);
  contentDiv.appendChild(shapeGroup);
});

container.appendChild(contentDiv);

// Elements to show what is currently played
const currentPlay = document.createElement("div");
currentPlay.classList.add("currentPlay");

let currentHumanScore = document.createElement("p");
currentHumanScore.innerText = ``;

let currentComputerScore = document.createElement("p");
currentComputerScore.innerText = ``;

currentPlay.append(currentHumanScore, currentComputerScore);
container.appendChild(currentPlay);

// result element
const results = document.createElement("div");
results.classList.add("results");

const humanScoreElement = document.createElement("p");
// the code below is needed to give us the zero in the beginning
humanScoreElement.innerText = `You: ${humanScore}`;

const computerScoreElement = document.createElement("p");
// the code below is needed to give us the zero in the beginning
computerScoreElement.innerText = `Computer: ${computerScore}`;

results.append(humanScoreElement, computerScoreElement);
container.appendChild(results);
