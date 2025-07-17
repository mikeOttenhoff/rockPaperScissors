const handShapes = { 0: "rock", 1: "paper", 2: "scissors" };

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
  humanChoice = getHumanChoice().toLowerCase();
  computerChoice = getComputerChoice();

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
const container = document.createElement("section");
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
    playRound(humanChoice, getComputerChoice());
    //Code below updates hte result score elements
    humanScoreElement.innerText = `Human: ${humanScore}`;
    computerScoreElement.innerText = `Computer: ${computerScore}`;
    // Do something if either one get's 5 points
    if (humanScore === 5 || computerScore === 5) {
      const buttonsClass = document.querySelector(".buttons");
      buttonsClass.remove();

      const winner =
        humanScore === 5 ? "You win the game!" : "The computer wins the game!";
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

// result element
const results = document.createElement("div");
results.classList.add("results");
const humanScoreElement = document.createElement("p");
// the code below is needed to give us the zero in the beginning
humanScoreElement.innerText = `Human: ${humanScore}`;
const computerScoreElement = document.createElement("p");
// the code below is needed to give us the zero in the beginning
computerScoreElement.innerText = `Computer: ${computerScore}`;
results.append(humanScoreElement, computerScoreElement);
container.appendChild(results);
