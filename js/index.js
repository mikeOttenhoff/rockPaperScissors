const handShapes = { 0: "rock", 1: "paper", 2: "scissors" };

const getComputerChoice = function () {
  const handShapeArr = Object.keys(handShapes);
  const random = Math.random();
  const handShapeIndex = Math.floor(random * handShapeArr.length);

  const randomKey = handShapeArr[handShapeIndex];
  const randomValue = handShapes[randomKey];
  return randomValue;
};

getComputerChoice();
console.log(getComputerChoice());
